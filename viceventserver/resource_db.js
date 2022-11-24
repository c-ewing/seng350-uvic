const sqlite3 = require('sqlite3').verbose()

// ## SQLITE QUERIES/DEFINITIONS
// Check if the DB exists, if not set it up
const DATABASE_PATH = './resource_database.db'
const DATABASE = new sqlite3.Database(DATABASE_PATH, (err) => {
    if (err) {
        console.error(`Error opening database at: ${DATABASE_PATH}, with error: ${err.message}`);
    }
});
const MAX_NUM_RESULTS = 20

const TABLES = ['DegreeSpecificOpportunities', 'Events', 'JobOpportunities', 'Restaurants',
    'SchoolClubs', 'SportsTeams', 'VictoriaResources'];

const SELECT_TABLE_NAMES = "SELECT name FROM sqlite_schema \
                            WHERE type = 'table' \
                            AND name NOT LIKE 'sqlite_ % ' \
                            ORDER BY 1;"

function SELECT_RANGE(table) {
    return `SELECT * FROM ${table} ORDER BY id LIMIT ? OFFSET ?`
}

function SELECT_WHERE(table, term, limit, offset) {
    return `SELECT * FROM ${table} WHERE title LIKE ${term} OR shortDescription like ${term} ORDER BY id LIMIT ${limit} OFFSET ${offset}`
}

function SELECT_WHERE_MULTIPLE_TERMS(table, terms, limit, offset) {
    let query = `SELECT * FROM ${table} WHERE `
    for (let i = 0; i < terms.length - 1; i++) {
        query += `title LIKE ${terms[i]} OR shortDescription like ${terms[i]} OR `
    }
    query += `title LIKE ${terms[terms.length - 1]} OR shortDescription like ${terms[terms.length - 1]} ORDER BY id LIMIT ${limit} OFFSET ${offset}`
    return query
}

function SELECT_WHERE_ALL_TABLES(table, term) {
    return `SELECT * FROM ${table} WHERE title LIKE ${term} OR shortDescription like ${term}`
}

function SELECT_WHERE_ALL_TABLES_MULTIPLE_TERMS(table, terms) {
    let query = `SELECT * FROM ${table} WHERE `
    for (let i = 0; i < terms.length - 1; i++) {
        query += `title LIKE ${terms[i]} OR shortDescription like ${terms[i]} OR `
    }
    query += `title LIKE ${terms[terms.length - 1]} OR shortDescription like ${terms[terms.length - 1]}`
    return query
}

function CREATE_TABLE(value) {
    return `CREATE TABLE ${value}( 
    id TEXT PRIMARY KEY, 
    title TEXT, 
    startDate TEXT, 
    endDate TEXT, 
    shortDescription TEXT, 
    longDescription, 
    image TEXT,
    UNIQUE(title, startDate, endDate, shortDescription, longDescription, image) 
    )`
}

function INSERT_DATA(table) {
    return `INSERT INTO ${table} (id, title, startDate, endDate, shortDescription, longDescription, image) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`
}

// # Callbacks:
function checkTables(err, rows) {
    if (err) {
        console.error(`Error getting tables at startup: ${err}`);
    } else {
        // Check the database exists by seeing what tables are in it
        let table_names = rows.map(val => val.name);

        console.info(`Tables already exist? ${TABLES.every(table => table_names.includes(table))}`);
        console.info(`Table names: ${table_names}`)

        // Not every table name exists, if any do, create them
        if (!TABLES.every(table => table_names.includes(table))) {
            console.info('Creating Tables')

            // Create tables
            TABLES.forEach(table_name => {
                console.info(`Creating Table: ${table_name}`)

                DATABASE.run(CREATE_TABLE(table_name), (err) => {
                    if (err) {
                        console.error(`Error creating table ${table_name}, Error: ${err}`)
                    }
                });
            });

            console.info('Created Tables')
        }
    }

    console.info('## Database Started ##')
}

// # DB Functions:
function insert_data(table, id, title, startDate, endDate, shortDescription, longDescription, image) {
    return new Promise((resolve, reject) => {

        DATABASE.run(INSERT_DATA(table), [id, title, startDate, endDate, shortDescription, longDescription, image], (err) => {
            if (err) {
                console.error(`Error inserting: [${[id, title, startDate, endDate, shortDescription, longDescription, image]}] into table: ${table}.\n${err}`)
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

function select_by_range(table, start, end) {
    let offset = start
    // Limit the number of returned results to MAX_NUM_RESULTS
    let limit = Math.min(MAX_NUM_RESULTS, start - end)

    return new Promise((resolve, reject) => {
        DATABASE.all(SELECT_RANGE(table), [limit, offset], (err, rows) => {
            if (err) {
                console.error(`Failed to fetch rows: ${start}-${end} from ${table}:\n${err}`)
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

function select_by_id(table, id) {
    // Because the query is async we need to *promise* to return something in the future
    // and then on the callers side, wait for the promise to be completed. When that happens we can pull the
    // value out
    // from: https://kudadam.com/blog/return-data-from-sqlite3-nodejs
    return new Promise((resolve, reject) => {
        DATABASE.get(`SELECT * FROM ${table} WHERE id = "${id}"`, (err, row) => {
            if (err) {
                console.error(`Failed to get ${id} in ${table}:\n${err}`)
                reject(err)
            } else {
                resolve(row)
            }
        })
    })

}

function select_where(term, table, start, end) {
    let offset = start
    let limit = Math.min(MAX_NUM_RESULTS, end - start)
    let wildcarded_term = `'%${term}%'`

    // Build the statement, SQLite substitution would be better.. but i can't seem to get it to work...
    let statement = SELECT_WHERE(table, wildcarded_term, limit, offset)

    console.debug(statement)

    return new Promise((resolve, reject) => {
        DATABASE.all(statement, (err, rows) => {
            if (err) {
                console.error(`Failed to search for: ${term} from ${table}:\n${err}`)
                reject(err)
            } else {
                console.log(rows)
                resolve(rows)
            }
        })
    })
}

function select_where_multiple_terms(term, table, start, end) {
    let offset = start
    let limit = Math.min(MAX_NUM_RESULTS, end - start)
    let wildcarded_terms = term.map(t => `'%${t}%'`)

    // Build the statement, SQLite substitution would be better.. but i can't seem to get it to work...
    let statement = SELECT_WHERE_MULTIPLE_TERMS(table, wildcarded_terms, limit, offset)

    return new Promise((resolve, reject) => {
        DATABASE.all(statement, (err, rows) => {
            if (err) {
                console.error(`Failed to search for: ${term} from ${table}:\n${err}`)
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

function select_where_all_tables(term, tables, start, end) {
    let offset = start
    let limit = Math.min(MAX_NUM_RESULTS, end - start)
    let wildcarded_term = `'%${term}%'`

    // Build the statement, for each table to search UNION the search statements
    let statement = ''

    for (let i = 0; i < tables.length - 1; i++) {
        statement += SELECT_WHERE_ALL_TABLES(tables[i], wildcarded_term) + " UNION "
    }

    statement += SELECT_WHERE_ALL_TABLES(tables[tables.length - 1], wildcarded_term)
    // Add ordering and limiting
    statement += ` ORDER BY id LIMIT ${limit} OFFSET ${offset}`

    return new Promise((resolve, reject) => {
        DATABASE.all(statement, (err, rows) => {
            if (err) {
                console.error(`Failed to search for: ${term} from ${tables}:\n${err}`)
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

function select_where_all_tables_multiple_terms(term, tables, start, end) {
    let offset = start
    let limit = Math.min(MAX_NUM_RESULTS, end - start)
    let wildcarded_terms = term.map(t => `'%${t}%'`)

    // Build the statement, for each table to search UNION the search statements
    let statement = ''

    for (let i = 0; i < tables.length - 1; i++) {
        statement += SELECT_WHERE_ALL_TABLES_MULTIPLE_TERMS(tables[i], wildcarded_terms) + " UNION "
    }

    statement += SELECT_WHERE_ALL_TABLES_MULTIPLE_TERMS(tables[tables.length - 1], wildcarded_terms)
    // Add ordering and limiting
    statement += ` ORDER BY id LIMIT ${limit} OFFSET ${offset}`

    return new Promise((resolve, reject) => {
        DATABASE.all(statement, (err, rows) => {
            if (err) {
                console.error(`Failed to search for: ${term} from ${tables}:\n${err}`)
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

// ## Init DB:
function check_db_structure() {
    // Check if all of the TABLES exist. If not, this is first startup, create them.
    DATABASE.all(SELECT_TABLE_NAMES, checkTables)
}

// # EXPORTS:
module.exports = {
    TABLES,
    MAX_NUM_RESULTS,
    check_db_structure,
    insert_data,
    select_by_id,
    select_by_range,
    select_where,
    select_where_multiple_terms,
    select_where_all_tables,
    select_where_all_tables_multiple_terms
}
