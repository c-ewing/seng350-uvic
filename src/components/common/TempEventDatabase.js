import {useState, useEffect} from 'react';

let events = [{
    "id":                   "s1",
    "title":              "Vancouver Canucks vs Los Angeles Kings NHL Game",
    "startdate":          "Game Day : November 18th 7:00 PM",  
    "endDate":            "End Time : November 18th 9:00 PM", 
    "shortDescription":    "Location : Rogers Arena/Vancouver",
    "longDescription":     "Current Record: Canucks 4-7-3 and LA Kings 8-6-1", 
    "image":                "" 
  },{
      "id":                   "s2", 
      "title":                "Calgary Flames vs Tampa Bay Lightning NHL Game",
      "startdate":            "Game Day : November 17th 5:00 PM", 
      "endDate":             "End Time : November 17th 7:00 PM",
      "shortDescription":    "Location : Scotiabank Saddledome/Calgary",
      "longDescription":     "Current Record: Flames 5-6-2 and Tampa Bay 7-5-1",
      "image":                "" 
  },{
    "id":                   "r1",
    "title":                "Dinner Party at Wendy's",
    "startdate":          "Event Start Date and Time : November 16th 9:00 PM", 
    "endDate":             "Event End Date and Time : November 16th 11:30 PM" , 
    "shortDescription":    "Location : 776 Bay Street",
    "longDescription":     "Free Bacon Cheesburgers and Dave's Double (All customers have to pay for their drinks) ", 
    "image":                "" 
  },{
      "id":                   "r2", 
      "title":                "Birthday Party at Burger King",
      "startdate":          "Event Start Date and Time : November 15th 1:00 PM", 
      "endDate":             "Event End Date and Time : November 15th 5:00 PM",
      "shortDescription":    "Location : 1328 Douglas Street",
      "longDescription":     "Free Hamburger King Jr. Meals",
      "image":                "" 
  },{
    "id":                   "e1", 
    "title":                "The Blue Stones Concert",
    "startdate":          "Event Start Date and Time : November 24th 8:00 PM", 
    "endDate":             "Event End Date and Time : November 25th 02:00 AM",
    "shortDescription":    "Location : At Capital Balroom - 858 Yates Street",
    "longDescription":     "Fee : $17-$27 and 19 + only",
    "image":                "" 
},{
  "id":                   "e2", 
  "title":                "Small Works Art Show",
  "startdate":          "Event Start Date and Time : November 26th 10:00 AM", 
  "endDate":             "Event End Date and Time : November 26th 4:00 PM",
  "shortDescription":    "Location : Cordova Bay School - 5238 Cordova Bay Road",
  "longDescription":     "The art show will feature original artwork and art cards. Come out and see the work of these very talented artists!",
  "image":                "" 
}]

export default function TempEventDatabase() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
    const data = await (
      await fetch(
        "http://localhost:3000/resources/Events")
      ).json();
      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  console.log(data)
  return (
    events
  )
}


