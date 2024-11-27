import React, {useEffect, useState} from 'react';
import './home.scss';


const Home = () => {

  const [data, setData] = useState(null);

  useEffect(() =>{
    fetch('https://s3.eu-west-2.amazonaws.com/chromeye.tasks/data.json')
    .then((response) => response.json())
    .then((data) => setData(data.hero))
    .catch((error) => console.log("Error fetching data:", error));
  },[]);

  if(!data) return <div>Loading...</div>


  return (
    <section className='home'>
      <div className='content'>
        <h1 className='title'>{data.title}</h1>
        <p className='description'>{data.description}</p>
        <a href={data.buttonUrl} className='button'>{data.buttonLabel}</a>
      </div>
      <div className='image-container'>
        <img src={data.image} alt='Visual' className='image' />
      </div>
    </section>
  );
};

export default Home