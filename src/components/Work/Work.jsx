import React, {useState, useEffect} from 'react';


const Work = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://s3.eu-west-2.amazonaws.com/chromeye.tasks/data.json")
        .then((response) => response.json())
        .then((data) => setData(data.services))
        .catch((error) =>console.log("Error fetching services data:", error));
    }, []);

    if(!data) return <div>Loading...</div>

  return (
    <section className='services'>
        <div className='content'>
            <h1 className='title'>{data.title}</h1>
            <p className='description'>{data.description}</p>
        </div>
    </section>
  )
}

export default Work