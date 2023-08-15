import React from "react";
import '../Style/KeyNumber.css';
import send from '../Images/send.png'
import { useTranslation} from "react-i18next";


const KeyNumber=({dir})=>{
    const { t } = useTranslation();
    const arabic={
        fontFamily:t("Syne"),
        fontSize:t("p2size"),
        fontWeight:t("bolder")
    }
    const arabicpara={
        fontFamily:t("Syne"),
        fontSize:t("psize"),
        fontWeight:t("bold")
    }

    return(
        <>
        <div className="bg-keyNumber fluid-container p-5" >
            <div className="BODY ">
           
            <div className=" container  text-white row d-flex flex-wrap " dir={dir} style={{padding:'2rem'}}>
                
                <div className="left-div col-12 col-sm-6 py-5 ">

                    <div className="d-flex flex-column flex-wrap " >
                        <h2 className="keyNumber-Heading">{t("KeyNumbers")}</h2>
                        <p style={arabicpara} className="keyNumber-para">{t("When the team is one of the most efficient experts who have complete knowledge about establishing companies through the stages.")}</p>
                        
                        <button 
                        onClick={()=>{
                            alert("Thanks For Reaching Us ! Contact Us via +92 312 0321 939");
                          }} 
                        className="keyNumber-btn py-3 px-2 d-none d-sm-block"  >
                             {t("Contact us")} <img width="16px" src={send} alt="" />
                        </button> 
                        </div>
                </div>
                <div className="right-div col-12 col-sm-6">
                    <div className=" row  gap-3 "  dir={dir} >
                        <div dir={dir}  className="rate col-sm-5 col-12 text-center "><h3 className="rate-heading" >$700.1 BN</h3><p style={arabic}>{t("Nominal GDP in 2020")}</p></div>
                        <div dir={dir} className="rate col-sm-5 col-12 text-center "><h3 className="rate-heading"  >$5.4 bN</h3><p style={arabic}>{t("Nominal GDP in 2020")}</p></div>
                        <div dir={dir} className="rate col-sm-5 col-12 text-center "><h3 className="rate-heading"  >$675 BN</h3><p style={arabic}>{t("FDI inflows in 2020")}</p></div>
                        <div dir={dir} className="rate col-sm-5 col-12 text-center "><h3 className="rate-heading"  >$19 937</h3><p style={arabic}>{t("FDI inflows in 2020")}</p></div>
                        <div dir={dir} className="rate col-sm-5 col-12 text-center "><h3 className="rate-heading"  >58.2%</h3><p   style={arabic} >{t("FDI inflows in 2020")}</p></div>
                        <div dir={dir} className="rate col-sm-5 col-12 text-center "><h3 className="rate-heading"  >$5.4 bN</h3><p style={arabic}>{t("FDI inflows in 2020")}</p></div>
                    </div>

                </div>
                </div>
                </div>
            </div>
        </>
    );

}
export default KeyNumber;