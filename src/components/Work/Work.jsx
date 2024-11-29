import React, { useEffect, useState } from 'react';
import "./work.scss";

const Work = () => {
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        fetch("https://s3.eu-west-2.amazonaws.com/chromeye.tasks/data.json")
            .then((response) => response.json())
            .then((data) => setPortfolio(data.portfolio))
            .catch((error) => console.log("Error fetching portfolio data:", error));
    }, []);

    if (!portfolio) return <div className="loading">Loading...</div>;

    return (
        <section className="work">
            <div className="wrapper">
                <div className="work-header">
                    <h1 className="work-title">Our Work</h1>
                    <p className="work-description">{portfolio.description}</p>
                </div>
                <div className="work-items">
                    {portfolio.items.map((item, index) => (
                        <div key={index} className={`work-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="work-item-text">
                                <h2 className="item-title">{item.title}</h2>
                                <p className="item-description">{item.description}</p>
                                <a href={item.buttonUrl} className="item-button">
                                    {item.buttonLabel}
                                </a>
                            </div>
                            <div className="work-item-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
