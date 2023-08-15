import React from "react";
import '../Style/OurServices.css';
import Services1 from '../Images/Services1.png'
import Services2 from '../Images/Services2.png'
import Services3 from '../Images/Services3.png'
import Services4 from '../Images/Services4.png'
import Services5 from '../Images/Services5.png'
import Services6 from '../Images/Services6.png'
import Services7 from '../Images/Services7.png'
import Services8 from '../Images/Services8.png'
import { useTranslation} from "react-i18next";
// import i18n from "./i18n";


const OurServices=({Align,dir})=>{
    const { t} = useTranslation();
    const arabic ={
      fontFamily:t("Syne"),
      fontWeight:t("bold"),
      fontSize:t("h4size")
    }
    
    return(
        <>
            <div className="bg-services  text-white py-4 " id="Service" style={arabic} >
          
        
        
          <h1 className="text-center py-5">{t("Our Services")}</h1>
      <div className="container">
      <div className="BODY">
          <div
            className=" row gap-3 parallax my-3"  dir={dir}
            
          >
              <div className="images parallax rounded d-flex col-12 col-sm-7 align-items-end " style={{ backgroundImage:`url(${Services5})`,textAlign:Align}}>
                <h3 dir={dir}  style={arabic} >{t("Establishing companies")}</h3>
              </div>
            
              <div className="images parallax  d-flex rounded col align-items-end" style={{ backgroundImage:`url(${Services6})`,textAlign:Align}}>
                <h3 style={arabic}>{t("Recruitment")}</h3>
              </div>
          </div>
          
          <div
            className=" row gap-3  parallax my-3" dir={dir}
            
          >
              <div className="images parallax rounded d-flex col align-items-end " style={{ backgroundImage:`url(${Services7})`,textAlign:Align}}>
                <h3 style={arabic} >{t("Ready workspace")}</h3>
              </div>
            
              <div className="images parallax d-flex rounded col-12 col-sm-7 align-items-end " style={{ backgroundImage:`url(${Services8})`,textAlign:Align}}>
                <h3 style={arabic}>{t("Managing the human resources department")}</h3>
              </div>
          </div>
          <div
            className=" row gap-3 parallax my-3" dir={dir}
            
          >
              <div className="images parallax rounded d-flex col-12  col-sm-7 align-items-end" style={{ backgroundImage:`url(${Services1})`,textAlign:Align}}>
                <h3 style={arabic}>{t("Developing the relationship with government agencies")}</h3>
              </div>
            
              <div className="images parallax d-flex rounded col align-items-end " style={{ backgroundImage:`url(${Services2})`,textAlign:Align}}>
                <h3 style={arabic}>{t("Legal advice")}</h3>
              </div>
          </div>

          <div className="row  gap-3 parallax my-3" dir={dir} >
            <div className="images d-flex parallax rounded col align-items-end" style={{ backgroundImage:`url(${Services3})`,textAlign:Align}}>
            <h3 style={arabic}>{t("Administrative consulting")}</h3>
            
            </div>
            <div className="images parallax d-flex rounded col-12  col-sm-7 align-items-end " style={{ backgroundImage:`url(${Services4})`,textAlign:Align}}>
            <h3 style={arabic}>{t("Providing business partners")}</h3>
            </div>
          </div>
          </div>
          
          </div>
          </div>
          
        

        </>
    );
}
export default OurServices;
