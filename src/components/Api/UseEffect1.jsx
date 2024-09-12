import React, { useState, useEffect } from 'react';

function UseEffect1() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
                
                if (!response.ok) {
                    throw new Error('Error fetching data');
                }
                
                let myData = await response.json();
                setData(myData); // Directly setting the data
                console.log(myData);
            } catch (error) {
                setError(error.message); // Update the error state
            }
        };

        fetchData(); // Fetch data when the component mounts

        console.log('Component mounted');

        // Cleanup function (not needed in this case, but provided as an example)
        return () => {
            console.log('Component unmounted');
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h1>UseEffect1</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
                {console.log(data)}
            </ul>
        </>
    );
}

export default UseEffect1;
