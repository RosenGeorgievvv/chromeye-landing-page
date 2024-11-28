import React, { useEffect, useState } from "react";
import "./agency.scss";

// import icons
import arrowDown from "../../assets/icons/chromeye_assignment_arrowdown_v1.svg";
import arrowUp from "../../assets/icons/chromeye_assignment_arrowup_v1.svg";

const AgencyService = () => {
  const [services, setServices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch("https://s3.eu-west-2.amazonaws.com/chromeye.tasks/data.json")
      .then((response) => response.json())
      .then((data) => setServices(data.agency_services.items))
      .catch((error) => console.log("Error fetching agency services:", error));
  }, []);


  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="agency-service">
      <h1 className="agency-service-title">Agency Services</h1>
      <div className="agency-service-container">
        <div className="service-list">
          {services.map((service, index) => (
            <div key={index} className={`service-item ${activeIndex === index ? "active" : ""}`}>
            <div className="service-header" onClick={() => toggleDescription(index)}>
            <h2 className={`service-title ${activeIndex === index ? "active" : ""}`}>{service.title}</h2>
              <img src={activeIndex === index ? arrowUp : arrowDown} alt="Arrow" className="arrow" />
            </div>
            {activeIndex === index && (
              <div className="service-description">
                <p>{service.description}</p>
              </div>
            )}
          </div>
          ))}
        </div>
        <div className="service-image">
          {activeIndex !== null && (
            <img src={services[activeIndex].image} alt={services[activeIndex].title} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AgencyService;
