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

---

### Response format:

Data is return in response to a valid [request](#request-format) in the following format:

```json
{
    "title":                "",
    "id":                   "",
    "start-date:":          "",
    "end-date":             "",
    "short-description":    "",
    "long-description":     "", // Not filled unless responding to a request with an `id` specified
    "image":                "" // Optional image, only for requests with `id` specified
}
```

[TODO]
- compression?
- unique id for each event
---

### Submission format:
[TODO] 
- Base64 encoded or compressed?
- Post Request
---

### Setup:
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