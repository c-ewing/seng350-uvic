# Server for Victoria Event Finder (SENG350 Project)
 NodeJS and ExpressJS server backed with a SQLite Database

# Request format:

Data can be requested from the server using a `get` request following the formats:

```
baseurl/resources/<TYPE>/id/[ID]
baseurl/resources/<TYPE>/range/[START-END]
baseurl/search/<TERM>/[TYPE#START-END]
```
## `Resources` Requests:
The `id` of the resource being queried is **optional** and only used to request the full resource details

The `range` is **optional** and **mutually exclusive** with `id` and is used to define a range of results to to retrieve from the endpoint

If neither `id` nor `range` is provided then the query returns up to `MAX_NUM_RESULTS` (default 20) from the specified `TYPE`

The `TYPE` of resource being queried is defined as follows and is **required** for a valid `resources` request:

| Resource Type | Type name |
| ------------- | --------- |
| Sports Team   | SportsTeams |
| Restaurant    | Restaurants |
| School Club   | SchoolClubs |
| Event         | Events     |
| Victoria Resource | VictoriaResources |
| Degree Specific Opportunity | DegreeSpecificOpportunities |
| Job Opportunity | JobOpportunities |

---

## `Search` Requests:
The `TERM` is required and is a string to search for within the `Resources`. `TERM` can be a comma separated string of multiple terms to search for, such as `uvic,club`. The results will contain results that have either `uvic` or `clubs` in them.

**Optionally** following the `TERM` are parameters `TYPE` (as above) and `START`/`END` (indicating a slice of results)

**

# Response format:

Data is return in response to a valid [request](#resources-requests) in the following format. Responses may contain a list of these objects.

```json
{
    "id":                   "", // UUID V4: https://www.uuidgenerator.net/version4
    "title":                "",
    "start-date:":          "", // JSON Date String
    "end-date":             "", // JSON Date String
    "short-description":    "",
    "long-description":     "", // Not filled unless responding to a request with an `id` specified
    "image":                "" // Optional image, only for requests with `id` specified
}
```
---

# Submission format:
```
UNIMPLEMENTED
```
---

# Server Setup:
In a separate directory from one containing the `Client` website (does not contain a `milestone-2` folder already) run:
```bash
git clone https://gitlab.csc.uvic.ca/courses/2022091/SENG350_COSI/assignments/jkonkin/milestone-2.git -b VicEventServer
```

To start the `Server` run:
```bash
npm install
npm start
```

The server defaults to running on `localhost:3000` however this may be occupied by other running NodeJS applications.

---

### Usage:
https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples