const sqlite3 = require('sqlite3')

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

function CREATE_TABLE(value) {
    return `CREATE TABLE ${value}( 
    id TEXT PRIMARY KEY, 
    title TEXT, 
    startDate TEXT, 
    endDate TEXT, 
    shortDescription TEXT, 
    longDescription, 
    image TEXT 
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
}

// # DB Functions:
function insert_data(table, id, title, startDate, endDate, shortDescription, longDescription, image) {
    DATABASE.run(INSERT_DATA(table), [id, title, startDate, endDate, shortDescription, longDescription, image], (err) => {
        if (err) {
            console.error(`Error inserting: [${[id, title, startDate, endDate, shortDescription, longDescription, image]}] into table:  ${table}.\nDue to: ${err}`)
        }
    })
}

function select_by_range(table, start, end) {
    let offset = start
    // Limit the number of returned results to MAX_NUM_RESULTS
    let limit = Math.min(MAX_NUM_RESULTS, start-end)

    return new Promise((resolve, reject) => {
        DATABASE.all(SELECT_RANGE(table), [limit, offset], (err, rows) =>{
            if (err) {
                console.error(`Failed to fetch rows: ${start}-${end} from ${table}:\n${err}`)
                reject(err)
            } else{
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
    select_by_range
}
