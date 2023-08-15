import React from "react";
import '../Style/ChatForm.css';
import status from '../Images/status-up.png';
import chatBox from '../Images/chatbox.png';
import { useTranslation} from "react-i18next";


const ChatForm = ({dir}) =>{
    const { t } = useTranslation();
    const handleButton=()=>{
        alert("Thanks for Reaching Us ! Contact Me on WhatsApp .");
    }
    
    return(
        <>
            <div className=" bg-chatForm fluid-container " id="Contact">
                <div className="container d-flex  p-5  flex-wrap " dir={dir} style={{maxWidth:"100%"}}>
                    <form className="form text-white" style={{maxWidth:"100%"}} dir={dir} >
                        <div className="flex flex-column flex-wrap" >
                            <h1 className="my-5">{t("Get In Touch")}</h1>
                            <div className="Name d-block ">
                                <input type="text" name="Fname" style={{width:"47%"}} placeholder={t("First name*")} /> &nbsp;
                                <input type="text" name="Lname" style={{width:"47%"}}  placeholder={t("Last name*")}/>
                            </div> <br />
                            <input className="my-4" type="email" placeholder="Email" /> <br />
                            <input className="my-4" type="number" name="number" placeholder={t("Phone number")} /> <br />
                            <input type="text" name="Lname" style={{width:"47%"}}  placeholder={t("Organization*")}/> <br />
                            <input className="my-4" type="text" name="idea" placeholder={t("Please describe your primary business activity*")} /><br />
                            <input className="my-4" type="text" name="idea" placeholder={t("Is Your Company Established For 1 Year or More?")} /><br />
                            <input className="my-4" type="text" name="idea" placeholder={t("Are You a Trading or Import/Export Company?")} />
                            <p>{t("When would you like to set up your business?")}</p>
                            
                            <div className="row container gap-4 "style={{ marginTop:'4rem'}}>
                                
                                <div className=" chat-typeColor  col-sm-5  d-flex flex-row flex-wrap  border rounded "  >
                                <div className="chat-typeBox">
                                   <img  src={status} alt="Loading.." />
                                   </div>
                                   <p >{t("Immediately")}</p>
                                    </div>
                                <div className=" chat-type  col-sm-5  d-flex  flex-sm-row flex-wrap border rounded">
                                <div className="chat-typeBox">
                                   <img  src={status} alt="Loading.." />
                                   </div>
                                   <p className="chat-typeText">{t("In 3 month")}</p>
                                    </div>
                                                                
                                <div className=" chat-type col-sm-5 d-flex flex-sm-row flex-wrap  border rounded" >
                                <div className="chat-typeBox">
                                   <img  src={status} alt="Loading.." />
                                   </div>
                                   <p className="chat-typeText">{t("In 6 month")}</p>
                                    </div>
                                <div className=" chat-type col-sm-5  d-flex  flex-row flex-wrap px-2 border rounded" >
                                <div className="chat-typeBox">
                                   <img   src={status} alt="Loading.." />
                                   </div>
                                   <p className="chat-typeText">{t("In year")}</p>
                                    </div>
                                    </div>
                                    <button onClick={handleButton} className="chatForm-btn my-4 py-3" >{t("Submit")}</button>
                            </div>

                        

                    </form>
                    <div className="picture d-none d-lg-block py-5 " >
                        
                        <img className="chatForm-img"  src={chatBox} alt="Loading.." />
                        
                    </div>
                </div>
            </div>
        </>
    );

}
export default ChatForm;