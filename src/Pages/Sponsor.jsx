import React from "react";
import icon1 from '../Images/icon1.png';
import icon2 from '../Images/icon2.png';
import icon3 from '../Images/icon3.png';
import icon4 from '../Images/icon4.png';
import icon5 from '../Images/icon5.png';
import icon6 from '../Images/icon6.png';
import icon7 from '../Images/icon7.png';
import icon8 from '../Images/icon8.png';

const Sponsor= ({dir})=>{
    return(
    <>
    <div className="container-fluid  bg-light">
    <div className="row sponsor  " dir={dir}  >
        
        <img  className="Sponsor-images col" src={icon1} alt="Sponsor" />
        <img  className="Sponsor-images col" src={icon2} alt="Sponsor" />
        <img  className="Sponsor-images col" src={icon3} alt="Sponsor" />
        <img  className="Sponsor-images col" src={icon4} alt="Sponsor" />
        <img  className="Sponsor-images col" src={icon5} alt="Sponsor" />
        <img  className="Sponsor-images col" src={icon6} alt="Sponsor" />
        <img  className="Sponsor-images col" src={icon7} alt="Sponsor" />
        <img  className="Sponsor-images col" src={icon8} alt="Sponsor" />
    </div>
    </div>
    
    </>);

}
export default Sponsor;