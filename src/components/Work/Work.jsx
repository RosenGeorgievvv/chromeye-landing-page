import React, { useState, useEffect } from "react";
import "./work.scss";

const Work = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://s3.eu-west-2.amazonaws.com/chromeye.tasks/data.json")
      .then((response) => response.json())
      .then((data) => setData(data.services))
      .catch((error) => console.log("Error fetching services data:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <section className="services">
      <div className="content">
        <h1 className="title">Our Services</h1>
        <p className="description">{data.description}</p>
        <div className="items">
          {data.items.map((item, index) => (
            <div key={index} className="item">
              <img
                src={item.icon}
                alt={`${item.title} Icon`}
                className="icon"
              />
              <h2 className="item-title">{item.title}</h2>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
        <a href={data.buttonUrl} className="button">
          {data.buttonLabel}
        </a>
      </div>
    </section>
  );
};

export default Work;
