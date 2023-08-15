import React from "react";
import '../Style/OurTeam.css';
import Abdullah from '../Images/Abdullah.jpeg';
import Attique from '../Images/Attique.jpeg';
import Kamran from '../Images/Kamran.jpeg';
import Abdul from '../Images/AbdulRehmanAlqah.png';
import { useTranslation} from "react-i18next";

const OurTeam = ({dir}) =>{
  const { t } = useTranslation();
  const arabic={
    fontFamily:t("Syne"),
    fontWeight:t('bold'),
    
  }
  const arabicheading={
    fontFamily:t("Syne"),
    fontWeight:t('bold'),
    fontSize:t("h3size")
  }
  const arabicpara={
    fontFamily:t("Syne"),
    fontWeight:t('bold'),
    fontSize:t("p2size")
  }

    return(
        <>
        <div className="bg-Team text-white">
           
           <div className=" container py-4"  >
           <div className="BODY">
             <h1 className=" text-center py-5 " >{t("Our perfect Team")}</h1>
            <div className="partners   row gap-0 justify-content-center  " dir={dir}>
                <div className="col-sm-3  d-flex flex-column text-left" dir={dir}>
                    <img className="team" src={Abdullah} alt="Loading.." />
                    <h1 className="name" style={arabic} >{t("Abdullah Zubair")}</h1>
                    <p className="title" style={arabic}>{t("GM")}</p>
                    <p>{t("An expert in establishing companies for investors, managing investors’ businesses, and government relations")}</p>
                </div>
                <div className="col-sm-3 d-flex flex-column">
                    <img className="team" src={Kamran} alt="Loading.." />
                    <h1 className="name" style={arabic}>{t("Kamran Zafar")} </h1>
                    <p className="title" style={arabic}>{t("Backend-Developer")}</p>
                    <p>{t("Advise investors in Saudi market to set a business and helping with HR operation and recruitment well experienced in F&B industry and other Similar industry related to administrative")}</p>
                </div>
                <div className="col-sm-3 d-flex flex-column">
                    <img className="team" src={Abdul} alt="Loading.." />
                    <h1 className="name" style={arabic}>{t("Abdualrahman Alqahtani")}</h1>
                    <p className="title" style={arabic}>{t("Business Development")}</p>
                    <p>{t("An expert recruitment consultant helps organizations find the best candidates by understanding their labor market needs and preparing tailored employment plans. They possess excellent communication and persuasion skills.")}</p>
                </div>
                <div className="col-sm-3 d-flex flex-column">
                    <img className="team" src={Attique} alt="Loading.." />
                    <h1 className="name" style={arabic}>{t("Attique ur Rehman")}</h1>
                    <p className="title" style={arabic}>{t("Business Development")}</p>
                    <p>{t("Expert in commercial law, with practical skills in handling all company-related commercial issues from contract formulation to commercial court pleading.")}</p>
                </div>
            </div>
            </div>
        </div>
        <div className="chat fluid-container  ">
            <div className="chat-flex d-flex flex-column justify-content-center align-items-center text-white"  >
            <p style={arabicpara}>{t("Tell about nature of your business")}</p>
            <h1 className="TeamHeading" style={arabicheading} >{t("Let’s Chat With")} <span  className="TeamSpan" > {t("Motaded")} </span></h1>
            </div>
            </div>
        </div>
        
        </>
    );
}
export default OurTeam;