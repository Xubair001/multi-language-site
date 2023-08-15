import React, { useState } from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Section1 from "./Pages/Section1";
import Section2 from "./Pages/Section2";
import './index.css';
import AboutUs from "./Pages/AboutUs";
import Slider from "./Pages/Slider";
import OurServices from "./Pages/OurServices";
import Section3 from "./Pages/Section3";
import Sponsor from "./Pages/Sponsor";
import KeyNumber from "./Pages/KeyNumber";
import OurTeam from "./Pages/OurTeam";
import ChatForm from "./Pages/ChatForm";

import phone from '../src/Images/call.svg';



const MultiLanguageSite = () => {
  const [name, setName] = useState("Arabic");
  const [flexDirection, setFlexDirection] = useState("row");
  const [textAlign, setTextAlign] = useState("left");
  const [justifyContent, setjustifyContent] = useState("start");
  const[dir,setDir]=useState('ltr');
  
  const { t, i18n } = useTranslation();

  //color for navbar
  const navColor1 = "rgb(4, 32, 36)";
  const navColor2 = "rgb(10, 63, 67)";
  const navGradientStyle = {
    background: `linear-gradient(${navColor1},${navColor2})`,
    fontFamily: "Syne",
    border: "2px solid rgba(10, 63, 67, 1)",
  };

  //color for section 2
   //translator function
  const Translate = () => {
    if (name === "Arabic") {
      setName("English");
      setFlexDirection('row-reverse');
      setTextAlign('right');
      setjustifyContent('end');
      setDir('rtl');
      i18n.changeLanguage("ar");
    }
    else if (name === "English") {
      setName("Arabic");
      setFlexDirection('row'); // Reset flex direction
      setTextAlign('left'); // Reset text alignment
      setjustifyContent('start'); // Reset justify content
      setDir('ltr'); // Reset direction
      i18n.changeLanguage("en"); // Change language to Arabic
    }
    };
 

  return (
    <>
      
      
{/* //nav bootstrap */}

<nav class="navbar navbar-expand-md navbar-light "style={navGradientStyle}>
  <div class="container-fluid text-white ">
  
    <div class="dropdown d-block d-sm-none">
  <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="navbar-toggler-icon "></i>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item " href="#">Home</a></li>
    <li><a class="dropdown-item " href="#">About Us</a></li>
    <li><a class="dropdown-item " href="#">Services</a></li>
    <li><a class="dropdown-item "  href="#">Contact Us</a></li>
    <li><a   onClick={Translate}  className=" mx-3" style={{ textDecoration: "none" }}href="#">{name}</a></li>
  </ul>
</div>

    <a class="navbar-brand mt-2 mt-lg-0 d-block d-sm-none" href="#">
    <h3 className="text-white ">Kadhar Tech</h3>
      </a>
      <div>

      </div>


              
    <div class="collapse navbar-collapse justify-content-around " id="navbarSupportedContent" >
      
    <a class="navbar-brand mt-2 mt-lg-0" href="#">
    <h3
     className="text-white ">Kadhar Tech</h3>
      </a>
      
      
      <div>
      
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
                href="#"
              >
                Home
              </a>
        </li>
        <li class="nav-item">
        <a
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
                href="#"
              >
                About Us
              </a>
        </li>
        <li class="nav-item">
        <a
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
                href="#"
              >
                Services
              </a>
        </li>
        <li class="nav-item">
        <a
                className="nav-link text-white"
                style={{ textDecoration: "none" }}
                href="#"
              >
                Contact Us
              </a>
        </li>
      </ul>
      
    
    
    </div>
    
    
    <div class="d-flex align-items-center">
      
      <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
        </a>
        <img height={20} width={20} src={phone} alt="icon" />
    <a
          class=" d-flex align-items-center text-white hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
          style={{textDecoration:"none"}}
        >
          
          <span>+92 312 0321 939</span>
          <a
              onClick={Translate}
              className="text-white mx-3"
              style={{ textDecoration: "none" }}
              href="#"
            >
              {name}
            </a>
          
        </a>


      
        </div>
    
  </div>
  </div>
</nav>
<Section1 justifyContent={justifyContent}
 dir={dir}
 />

<Section2 flexDirection={flexDirection}
 justifyContent={justifyContent} 
 textAlign={textAlign}
  dir={dir}
  />


<Slider flexDirection={flexDirection} Align={textAlign} dir={dir} />
<Section3 dir={dir}/>
<OurServices Align={textAlign} dir={dir} />
<AboutUs flexDirection={flexDirection} dir={dir} />
<Sponsor dir={dir}/>
<KeyNumber flexDirection={flexDirection} dir={dir}/>
<OurTeam textAlign={textAlign} dir={dir}/>
<ChatForm flexDirection={flexDirection} dir={dir}/>

        
    </>
  );
};
export default MultiLanguageSite;

