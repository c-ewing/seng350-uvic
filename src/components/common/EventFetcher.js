import {useState, useEffect} from 'react';
import {React, Component} from 'react';

export default function EventFetcher(value) {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
    const data = await (
      await fetch(value)).json();
      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  for(let i = 0; i < data.length; i++){
    // console.log(data[i])
  }

  return (
    data
  )
}


