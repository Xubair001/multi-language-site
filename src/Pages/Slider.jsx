import React from "react";
import { useState } from "react";
import flash from '../Images/flash.png';
import drop from '../Images/drop.png';
import sliderIcon1 from '../Images/slidericon1.png';
import reciept from '../Images/Reciept.png';
import slider2 from '../Images/Slider2.png';
import slider4 from '../Images/slider4.png';
import slider1 from '../Images/Slider1.png';
import '../Pages/Slider.css';
import { useTranslation} from "react-i18next";

const Slider=({flexDirection,Align,dir})=>{
    const { t } = useTranslation();

    const[page1,setPage1]=useState('block');
    const[page2,setPage2]=useState('none');
    const[page3,setPage3]=useState('none');
    const[page4,setPage4]=useState('none');
    const[color1,setColor1]=useState('yellow');
    const[color2,setColor2]=useState('purple');
    const[color3,setColor3]=useState('purple');
    const[color4,setColor4]=useState('purple');
    const handlePage1=()=>{
        setPage1('block');
        setPage2('none');
        setPage3('none');
        setPage4('none');
        setColor1('yellow');
        setColor2('purple');
        setColor3('purple');
        setColor4('purple');

    }
    const handlePage2=()=>{
        setPage1('none');
        setPage2('block');
        setPage3('none');
        setPage4('none');
        setColor2('green');
        setColor1('purple');
        setColor3('purple');
        setColor4('purple');
    }
    const handlePage3=()=>{
        setPage1('none');
        setPage2('none');
        setPage3('block');
        setPage4('none');
        setColor3('orange');
        setColor1('purple');
        setColor2('purple');
        setColor4('purple');
    }
    const handlePage4=()=>{
        setPage1('none');
        setPage2('none');
        setPage3('none');
        setPage4('block');
        setColor1('purple');
        setColor2('purple');
        setColor3('purple');
        setColor4('yellow');

    }
    const arabic={
        fontFamily:t("Syne"),
        
    }
    const heading={
        fontFamily:t("Syne"),
        fontSize:t("hsize"),
        
    }
    const h4={
        fontFamily:t("Syne"),
        fontWeight:t("bold"),
        fontSize:t("h4size")
    }
    const para={
        fontFamily:t("Syne"),
        fontSize:t("p2size"),
        
    }
    

    return(
        <> 
        

        {/* code real */}
        <div className="bg_slider  py-5 text-white" style={arabic} >
            
            <div className="container py-5" >
            <div className="BODY">
                <div dir={dir}>
            <p className="heading_slider" style={h4}>{t("Four new zones. Four new global hubs. Four game-changing opportunities.")}</p>
            <h6  style={para} className="w-50" >{t("Join global players to innovate and scale in both established and emerging industries at strategic locations across the Kingdom")}</h6>
            </div>
            <div className="slider row " dir={dir} style={{maxWidth:'100%'}}>
                <div className="col-3">
                    <button onClick={handlePage1} style={{backgroundColor:color1 }} className="slider_btn" ></button> <br />
                    <span style={para}>{t("King Abdullah Economic City (KAEC) SEZ")}</span>

                </div>
                <div className="col-3">
                    <button className="slider_btn" onClick={handlePage2} style={{backgroundColor:color2}}></button> <br />
                    <span style={para}>{t("Ras Al-Khair Special Economic Zone")}</span>
                </div>
                <div className="col-3">
                    <button className="slider_btn" onClick={handlePage3} style={{backgroundColor:color3}} ></button> <br />
                    <span style={para}>{t("Jazan Special Economic Zone")}</span>
                </div>
                <div onClick={handlePage4} className="col-3">
                    <button className="slider_btn"  style={{backgroundColor:color4}}></button> <br />
                    <span style={para} className="w-fit">{t("Cloud Computing SEZ")}</span>
                </div>
            </div>
            {/* Slider page */}
            <div className="page1" style={{display:page1}}>
            <img className="my-5" src={slider1} alt="Loading.." width="100%"/>

            <div className="d-flex pageSlider " dir={dir}>
                <div className="left">
                    <h1 className="py-2">{t("Access an unparalleled geostrategic location at the heart of global trade routes")}</h1>
                    <p style={para} className="p-3">{t("13% of global trade passes through the Red Sea and your company can easily connect into global supply chains here, utilizing existing, world-class infrastructure and the world’s most efficient port (as rated by the World Bank 2022).")}</p>
                    <div className="d-flex innerSlider" dir={dir}>
                        <div className="mx-2" style={para}>
                            <h5 className="slider_innerHeading ">{t("Key location information")}</h5>
                            <ul >
                                <li>{t("Province: Makkah")}</li>
                                <li>{t("90 minutes from Jeddah Airport")}</li>
                                <li>{t("Size of the zone: 60km2")}</li>
                            </ul>
                        </div>
                        <div className="mx-2" style={para} >
                            <h5 className="slider_innerHeading">{t("Sectors of opportunity")}</h5>
                            <ul >
                                <li>{t("Automobile supply chain and assembly")}</li>
                                <li>{t("Consumer goods")}</li>
                                <li>{t("ICT (Electronic light manufacturing)")}</li>
                                <li>{t("Pharmaceuticals")}</li>
                                <li>{t("MedTech")}</li>
                                <li>{t("Logistics")}</li>
                            </ul>
                        </div>
                    </div>
                    <button style={para} onClick={()=>{
                        alert("Hogya Download! xD")
                    }}  className="slider_button p-3 text-white"  >{t("Download the brochure")}</button>

                </div>
                <div className="right container" style={para}>
                    <div className="row py-3 my-5 gap-3">
                    <div dir={dir} className=" slider_point col-12 rounded py-2 d-flex">
                        <img className="point_image" width="40px" height="40px" src={flash} alt="icon"  />
                        <p className="px-2">{t("Abundant electrical supply including over 29GWH of clean power annually ")}</p>
                    </div>
                    <div dir={dir} className=" slider_point col-12 rounded py-2 d-flex">
                        <img className="point_image" height="40px" width={40} src={reciept} alt="icon" />
                        <p className="px-2">{t("Potable and process water supply, with distribution at 1.5 bar minimum")}</p>
                    </div>
                    <div dir={dir} className=" slider_point col-12 py-2 rounded d-flex">
                        <img className="point_image" height={40} width={40} src={sliderIcon1} alt="icon" />
                        <p className="px-2">{t("The gas zone will supply investors with natural gas at a significant cos advantage")}</p>
                    </div>
                    <div dir={dir} className="slider_point col-12 py-2 d-flex rounded">
                        <img className="point_image" height={40} width={40} src={drop} alt="icon"  />
                        <p className="px-2">{t("Wide portfolio of telecoms services with a state-of-the-art fiber network")}</p>
                    </div>
                    <div dir={dir} className="slider_point col-12 py-2 d-flex rounded">
                        <img  className="point_image" height={40} width={40} src={flash} alt="icon" />
                        <p className="px-2">{t("Reliable sewage networks, including a membrane bio-reactor plant")}</p>
                    </div>
                    </div>


                </div>

            </div>
            </div>


            {/* page2 of slider */}
            <div className="page2" style={{display:page2 }}>
            <img className="my-5" src={slider2} alt="Loading.." width="100%"/>

            <div className="d-flex pageSlider "style={para} dir={dir}>
                <div className="left p-2">
                    <h1 className="py-2">{t("Establish your business within a global powerhouse for the maritime industries")}</h1>
                    <p className="p-3">{t("At the center of the Arabian Gulf, with an abundant supply of industrial talent and a quick and efficient multimodal transport system, Ras Al-Khair SEZ seamlessly connects your business to global markets.")}</p>
                    <div className="d-flex innerSlider" dir={dir}>
                        <div className="col">
                            <h5 className="slider_innerHeading">{t("Key location information")}</h5>
                            <ul>
                                <li>{t("100km from the vibrant city of Jubail")}</li>
                                <li>{t("Size of the zone: 20km2")}</li>                                
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="slider_innerHeading">{t("Sectors of opportunity")}</h5>
                            <ul>
                                <li>{t("Shipbuilding and MRO")}</li>
                                <li>{t("Rig platforms and MRO")}</li>
                            </ul>
                        </div>
                    </div>
                    <button  className="slider_button p-3 m-4 text-white" >{t("Download the brochure")}</button>

                </div>
                <div className="right container">
                    <div className="row py-3 my-5 gap-3">
                    <div dir={dir} className="slider_point col-12 rounded py-2 d-flex">
                        <img className="point_image" width="40px" height="40px" src={flash} alt="icon" />
                        <p className="px-2">{t("Access state-of-the-art technologies including AI, biometrics and IOT")}</p>
                    </div>
                    <div dir={dir} className="slider_point col-12 rounded py-2 d-flex">
                        <img className="point_image" height="40px" width={40} src={reciept} alt="icon" />
                        <p className="px-2">{t("Enjoy green products and materials, as well as renewable energy sources")}</p>
                    </div>
                    <div dir={dir} className="slider_point col-12 py-2 rounded d-flex">
                        <img className="point_image" height={40} width={40} src={sliderIcon1} alt="icon" />
                        <p className="px-2">{t("Benefit from green products, materials, and renewable energy sources")}</p>
                    </div>
                    <div dir={dir} className="slider_point col-12 py-2 d-flex rounded">
                        <img  className="point_image" height={40} width={40} src={drop} alt="icon" />
                        <p className="px-2">{t("Access internationally competitive prices")}</p>
                    </div>
                    <div dir={dir} className=" slider_point col-12 py-2 d-flex rounded">
                        <img className="point_image" height={40} width={40} src={flash} alt="icon" />
                        <p className="px-2">{t("Take advantage of innovative lifecycle management offerings")}</p>
                    </div>
                    </div>
                </div>
                </div>           
            </div>
            {/* page3 of slider */}
            <div className="page3" style={{display:page3}}>
            <img className="my-5" src={slider2} alt="Loading.." width="100%"/>

            <div className="d-flex pageSlider " style={para} dir={dir}>
                <div className="left">
                    <h1 className="py-2">{t("Join an industrial city and growth hub, perfectly located on the Red Sea")}</h1>
                    <p className="p-3">{t("Take advantage of Jazan’s unique position on the crucial Red Sea shipping route, its proximity to growing African markets and its role as a platform for Saudi Arabia-China investment.")}</p>
                    <div className="d-flex innerSlider" dir={dir}>
                        <div className="col">
                            <h5 className="slider_innerHeading">{t("Key location information")}</h5>
                            <ul>                
                                <li>{t("Province: Jazan")}</li>
                                <li>{t("Size of the zone: 24.6km2")}</li>                       
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="slider_innerHeading">{t("Sectors of opportunity")}</h5>
                            <ul>
                                <li>{t("Food processing")}</li>
                                <li>{t("Metals conversion")}</li>
                                <li>{t("Logistics")}</li>
                            </ul>
                        </div>
                    </div>
                    <button className="slider_button p-3 text-white" >{t("Download the brochure")}</button>

                </div>
                <div className="right container">
                    <div className="row py-3 my-5 gap-3">
                    <div dir={dir} className="slider_point col-12 rounded py-2 d-flex">
                        <img className="point_image" width="40px" height="40px" src={flash} alt="icon" />
                        <p className="px-2">{t("Access state-of-the-art technologies including AI, biometrics and IOT")}</p>
                    </div>
                    <div dir={dir} className="slider_point col-12 rounded py-2 d-flex">
                        <img className="point_image" height="40px" width={40} src={reciept} alt="icon" />
                        <p className="px-2">{t("Enjoy green products and materials, as well as renewable energy sources")}</p>
                    </div>
                    <div dir={dir} className="slider_point col-12 py-2 rounded d-flex">
                        <img className="point_image" height={40} width={40} src={sliderIcon1} alt="icon" />
                        <p className="px-2">{t("Benefit from green products, materials, and renewable energy sources")}</p>
                    </div>
                    <div dir={dir} className="slider_point col-12 py-2 d-flex rounded">
                        <img className="point_image" height={40} width={40} src={drop} alt="icon" />
                        <p className="px-2">{t("Access internationally competitive prices ")}</p>
                    </div>
                    </div>
                </div>
                </div>           
            </div>
            {/* page4 of slider */}
            <div className="page4" style={{display:page4}}>
            <img className="my-5" src={slider4} alt="Loading.." width="100%"/>

            <div className="d-flex pageSlider " style={para} dir={dir}>
                <div className="left px-5">
                    <h1 className="py-2">{t("Where emerging and disruptive technologies flourish")}</h1>
                    <p className="p-3">{t("Be part of Saudi Arabia’s own ‘Silicon Valley’ and establish yourself in a home for emerging and disruptive digital technologies.")}</p>
                    <div className="d-flex innerSlider">
                        <div className="col">
                            <h5 className="slider_innerHeading">{t("Key location information")}</h5>
                            <ul>
                                <li>{t("This virtual SEZ is part of King Abdulaziz City for Science and Technology (KACST) in Riyadh")}</li>
                                <li>{t("Cloud Computing")}</li>                                
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className="slider_innerHeading">{t("Sectors of opportunity")}</h5>
                            <ul>
                                
                                <li>{t("Cloud Computing")}</li>
                            </ul>
                        </div>
                    </div>
                    <button className="slider_button p-3 text-white" >{t("Download the brochure")}</button>

                </div>
                <div className="right container ">
                    <div className="row py-3 my-5 gap-3">
                    <div dir={dir} className="slider_point col-12 rounded py-2 d-flex">
                        <img className="point_image" width="40px" height="40px" src={flash} alt="icon" />
                        <p className="px-2">{t("Special tax treatment in line with OECD principle that avoids double taxation and accommodates CSPS operating model ")}</p>
                    </div>
                    <div dir={dir} className="slider_point col-12 rounded py-2 d-flex">
                        <img className="point_image" height="40px" width={40} src={reciept} alt="icon" />
                        <p className="px-2">{t("Expat levy ensuring fees exemption for employees and their families in the zone ")}</p>
                    </div>
                    <div dir={dir} className="slider_point col-12 py-2 rounded d-flex">
                        <img className="point_image" height={40} width={40} src={sliderIcon1} alt="icon" />
                        <p className="px-2">{t("Affordable network connectivity and electricity available at a competitive rate of 0.05 USD/KWH for businesses ")}</p>
                    </div>
                    <div dir={dir} className="slider_point col-12 py-2 d-flex rounded">
                        <img className="point_image" height={40} width={40} src={drop} alt="icon" />
                        <p className="px-2">{t("Flexibility to provide cloud computing services from the zone, with the ability to build and operate data centers from all over the kingdom ")}</p>
                    </div>
                    
                    </div>
                </div>
                </div>           
            </div>

            </div>
            </div>
            </div>

        </>
    )
}
export default Slider;