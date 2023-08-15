import React from "react";
import '../Style/AboutUs.css';
import About from '../Images/About.png';
import AboutOverlay from '../Images/AboutOverlay.png';
import { useTranslation} from "react-i18next";


const AboutUs = ({dir}) => {
  const { t } = useTranslation();

  const arabic={
    fontFamily:t("Syne"),
    fontWeight:t("bold"),
    fontSize:t("h5size"),
  }
  const arabicpara={
    fontFamily:t("Syne"), 
    fontSize:t("psize")
  }

  return (
    <>
    <div className="bg-AboutUs text-white" id="About"  >
    
          <div dir={dir} className="container   py-5  " >
          <div className="BODY   d-flex AboutUs flex-wrap justify-content-center align-items-center">
                  <div className="col d-flex flex-sm-column py-5 flex-wrap" style={{maxWidth:'100%'}}>
                    <h1 style={arabic} className="heading-contact">{t("We are the leading company in the field of incorporation for local and foreign companies and investors")}</h1>
                    <p  style={arabicpara} className="para-contact">{t("We always step forward to be next to the newly established organizations in the Saudi market to accompany them in the establishment and overcome the difficulties from the commercial registry until the beginning of the first projects of the organization. Herein actually lies the fact of multiple choice, which is considered the ideal company because of its experience in the field of incorporation from individuals to companies of the type of joint stock, and the experience is reflected in keeping pace with the development of regulations and laws in the Kingdom of Saudi Arabia. Motaded also provides a lot of")} </p>

                  </div>
                  <div className="images-contact col block-2 d-block " dir={dir}>
                  
                  <div  style={{maxWidth:'100%'}}  >
                    <img className=" imageBlock1"  src={About} alt="Loading.." />
                  </div>
                  <div className="image_div2">
                    <img className="imageBlock2" src={AboutOverlay} alt="Loading.." />
                    </div>

                  </div>
                  </div>
                  </div>
                </div>
          
        

    </>
  );
};
export default AboutUs;
