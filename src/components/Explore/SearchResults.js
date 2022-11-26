import { useEffect, useState } from "react";

export default function SearchResults () {
    const [data, setData] = useState([]);
    var url = window.location.href
    const searchTerm = url.split('?').pop().replace('%20', ",");
    console.log(searchTerm)

    useEffect(() => {
            // fetch data
            const dataFetch = async () => {
            const data = await (
                await fetch(
                    `http://localhost:3000/search/${searchTerm}`
                    )
                ).json();

                // set state when the data received
                setData(data);
            };

            dataFetch();
    }, [searchTerm]);

    console.log(data)

    return (
        <div>Search Results</div>
    )
}