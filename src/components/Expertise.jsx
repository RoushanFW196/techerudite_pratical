import React from "react";
import "../styles/expertise.css";

const Expertise = () => {
  return (
    <div className="expertise-container">
      <h2 className="expertise-heading">Our Area Expertise</h2>
      <div className="expertise-areas">
        <div className="expertise-gridItems first">
          <img src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="no img" />
          <p>web development</p>
        </div>
        <div className="expertise-gridItems">
          <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="no img" />
          <p>
            ecommerce web
            <br /> development
          </p>
        </div>
        <div className="expertise-gridItems">
          <img src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="no img" />
          <p>
            Mobile Application <br /> Development
          </p>
        </div>
        <div className="expertise-gridItems">
          <img src="https://images.unsplash.com/photo-1557053964-937650b63311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="no img" />
          <p>UI/UX Designing</p>
        </div>
        <div className="expertise-gridItems">
          <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="no img" />
          <p>Digital Marketing </p>
        </div>
        <div className="expertise-gridItems">
          <img src="https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="no img" />
          <p>
            Website & App <br />
            Maintenance
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
