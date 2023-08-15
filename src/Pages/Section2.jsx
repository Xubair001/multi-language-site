import {useState,React} from "react";
import '../Style/Section2.css';
import Consultant from "../Images/Consultant.png";
import Growth from '../Images/Growth.png';
import Development from '../Images/Development.png';
import send from '../Images/send.png';
import { useTranslation } from "react-i18next";

// import i18n from "./i18n";


const Section2 =  ({flexDirection,textAlign,dir})=>{

    const { t } = useTranslation();
    


      

    //   section2 code here

    return (
        <>
        
              <div className="bg-section2">
      
        <div  className="container  py-5 flex-wrap  " dir={dir} style={{fontFamily:t("Syne")}}  >
            
            <div className="BODY row">
            <div className="left_side d-flex col  flex-column text-white col-sm-6 " dir={dir} >
              
                
                  <h1 className="section2-heading">
                    {t(
                      "Top Choice For 100% Foreign-Owned Company Setup In KSA"
                    )}
                  </h1>
                
                <p className="section2-para py-3 " style={{fontSize:t("psize")}}>
                  {t(
                    "Starting an independent foreign-owned business in the Kingdom of Saudi Arabia is a demanding process because of registrations and licenses from MISA and other ministries, residency fees, and various permits. Leveraging the service of a foreign business consultant in KSA like Motaded will help you avoid different roadblocks in the process. Having gone through the process for multiple LLCs and JSCs before, Motaded offers expert business setup KSA. Let us take care of the extensive requisites of your business setup and start your operations with solid legal and working foundations."
                  )}
                </p>
                <button 
                onClick={()=>{
                  alert("Thanks For Reaching Us ! Contact Us via +92 312 0321 939");
                }} 
                className="section2-btn my-3"  style={{float:textAlign}} >
              {t("Contact us")} <img width="16px" src={send} alt="/" />
            </button>
         </div>
            
          

          <div className="right_side col col-sm-6 d-flex  justify-content-center align-items-center " dir={dir} style={{maxWidth:"100%"}}  >
            <div className="d-flex flex-column text-white " style={{maxWidth:'486px'}} >
              <div className="d-flex section2-box ">
                <div className="icon m-4">
                  <img src={Growth} alt="Pictures" />
                </div>
                <div className="text m-4 ">
                  <h4 style={{textAlign:textAlign}} >{t("Growth")} </h4>
                  <p style={{fontSize:t("psize") ,fontFamily:t("SyneMedium")}}>
                    {t(
                      "Our shared ownership fuels our commitment to client success."
                    )}
                  </p>
                </div>
              </div>
              <div className="d-flex section2-box2" >
                <div className="icon m-4">
                  <img src={Consultant} alt="Pictures" />
                </div>
                <div className="text m-4">
                  <h4 style={{textAlign:textAlign}}>{t("Consultant")}</h4>
                  <p style={{fontSize:t("psize")}}>
                    {t(
                      "Over 40 years of driving brand innovations for clients and customers."
                    )}
                  </p>
                </div>
              </div>
              <div className="d-flex section2-box " >
                <div className="icon m-4">
                  <img src={Development} alt="Pictures" />
                </div>
                <div className="text m-4">
                  <h4 style={{textAlign:textAlign}} >{t("Development")}</h4>
                  <p style={{fontSize:t('psize')}}>
                    {t(
                      "Helping brands translate insights, ideas and experiences into value."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>

        </>
    );

}
export default Section2;