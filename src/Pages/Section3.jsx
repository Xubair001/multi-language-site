import React from "react";
import '../Style/Section3.css';
import { useTranslation } from "react-i18next";


const Section3=({dir})=>{
    const { t } = useTranslation();
    const arabic={
        fontFamily:t("Syne"),
        fontWeight:t("bolder"),
        fontSize:t("h4size")
    }
    const arabicpara={
        fontFamily:t("Syne"),
        
        fontSize:t("psize")
    }

    return(
        <>
        
        <div className="bg-section3 text-white py-4 "   dir={dir} >
        
            <h1 className=" text-center py-4" style={{fontFamily:t("Syne"),fontWeight:t("bolder")}}>{t("Government costs")}</h1>
            <div className="container py-4">
            <div className="BODY" >
            <div className="  row gap-1 py-2" dir={dir}  >
               
                <div className="small-box  col" >
                <h4 className="py-2" style={arabic} >{t("Ministry of Investment")}</h4>
                <p style={arabicpara}>{t("MESA License")}</p>
                </div>
                <div className="small-box col">
                    <h4 style={arabic} className="py-2">{t("Ministry of Commerce ")}</h4>
                    <p style={arabicpara}>{t("Commercial Register")}</p>
                </div>
                <div className="small-box col">
                    <h4 style={arabic} className="py-2">{t("Chamber of Commerce")}</h4>
                    <p style={arabicpara}>{t("Subscription")}</p>
                </div>
            </div>
            <div className="row gap-1 py-2">
                <div className="small-box  col">
                <h4 style={arabic} className="py-2">{t("Ministry of Labor")}</h4>
                <p style={arabicpara}>{t("Qawia platform")}</p>
                </div>
                <div className="small-box  col-5">
                    <h4 style={arabic} className="py-2">{t("General Organization for Social Insurance")} </h4>
                    <p style={arabicpara}>{t("(Madad platform)")}</p>
                </div>
                <div className="small-box col">
                    <h4 style={arabic} className="py-2">{t("National Address")} </h4>
                    <p style={arabicpara}>{t("(SBL)")} </p>
                </div>
            </div>
            
             <div className="row gap-1 py-2">
                <div className="small-box col">
                <h4 style={arabic} className="py-2">{t("Ministry of Interior")} </h4>
                <p style={arabic}>{t("Muqeem platform")}</p>
                </div>
            
            
                <div className="small-box col">
                    <h4 style={arabic} className="py-2">{t("Zakat and Tax Authority. ")} </h4>
                    
                </div>
                <div className="small-box col">
                    <h4 style={arabic} className="py-2">{t("Medical Insurance Board. ")} </h4>
                    
                </div>
                <div className="small-box col ">
                    <h4 style={arabic} className="py-2">{t("Saudi Business Center.")}</h4>
                    
                </div>

            </div>
            </div>
        </div>
        
        </div>
        </>
    );
}
export default Section3;