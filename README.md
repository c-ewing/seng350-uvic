# Server for Victoria Event Finder (SENG350 Project)

## NodeJS and ExpressJS server backed with a SQLite Database

### Request format:
Data can be requested from the server using a `get` request following the format:

```
baseurl/<type>/[id]
```
The `type` of resource being queried is defined as follows and is **required** for a valid request:

| Resource Type | Type name |
| ------------- | --------- |
| Sports Team   | sports-team |
| Restaurant    | restaurant |
| School Club   | school-club |
| Event         | event     |
| Victoria Resource | vic-resource |
| Degree Specific Opportunity | degree-opportunity |
| Job Opportunity | job     |

The `id` of the resource being queried is **optional** and only used to request the full resource details

### Response format:
[TODO]
- compression?
- send the short description of an event unless the optional `id` is provided
- if `id` is provided send the full event details ands description as a response
- unique id for each event

### Submission format:
[TODO] 
- Base64 encoded or compressed?
- Post Request

### Setup:
In a separate directory from one containing the `Client` website (does not contain a `milestone-2` folder already) run:
```bash
git clone https://gitlab.csc.uvic.ca/courses/2022091/SENG350_COSI/assignments/jkonkin/milestone-2.git -b viceventserver
```

To start the `Server` run:
```bash
npm install
npm start
```

The server defaults to running on `localhost:3000` however this may be occupied by other running NodeJS applications.