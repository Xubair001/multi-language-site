import {React} from "react";
import '../Style/Section1.css';
import section1 from '../Images/Section1.png';
import send from '../Images/send.png';
import '../App.css';

import { useTranslation} from "react-i18next";
// import i18n from "./i18n";

const Section1= ({justifyContent,dir})=>{
    const { t } = useTranslation();
    
    return(
        <>
        
         <div className="bg-Section1 fluid-container d-flex text-white flex-wrap  p-5"
         style={{justifyContent:justifyContent ,backgroundImage:`url(${section1})`,backgroundSize:"cover"}}  >
        
        <div>
          
        <div className="container  d-flex flex-column p-5" dir={dir} style={{maxWidth:"100%"}}>
        <div className="BODY" style={{fontFamily:t("Syne")}}>
          <h1 className="headingContact  py-4 "style={{fontFamily:t("Syne"),fontWeight:t("bold"),fontSize:t('hsize')}} > {t("Expand in Pakistan with us")}</h1>

          
            <p  className="paraContact" style={{fontSize:t("psize"),fontWeight:t("bolder")}} >
              {t
              (
                "The KSA is one of the economies foreseeing the future, with its untapped opportunities and unique investment opportunities"
              )}
            </p>
          
            <div>
            <button onClick={()=>{
              alert("Thanks For Reaching Us ! Contact Us via +92 312 0321 939");
            }}   className="btnContact text-white p-3  my-2" style={{fontSize:t("psize")}}>
              {t("Contact us")} <img width="16px" src={send} alt="" />
            </button>
           
          </div>
          </div>
          </div>
          </div>
          </div>
          
        
      
        
        </>
    );
}
export default Section1;