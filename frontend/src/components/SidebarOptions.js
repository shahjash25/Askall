import React from "react";
import { Add } from "@mui/icons-material";
import "./css/SidebarOptions.css";
import Education from "../assets/educationjpeg.jpeg";
import Technology from "../assets/technologyjpeg.jpeg";
import History from "../assets/historyjpeg.jpeg";
import Business from "../assets/educationjpeg.jpeg";
import Psychology from "../assets/buisnessjpeg.jpeg";
import Cooking from "../assets/cookingjpeg.jpeg";
import Music from "../assets/musicjpeg.jpeg";
import Science from "../assets/sciencejpeg.jpeg";
import Health from "../assets/healthjpeg.jpeg";
import Movies from "../assets/moviesjpeg.jpeg";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img src={Technology} alt="" />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img src={Education} alt="" />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <img
          src={History}          
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src={Business}          
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src={Psychology}          
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src={Cooking}          
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src={Music}          
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src={Science}          
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src={Health}          
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src={Movies}          
          alt=""
        />
        <p>Movies</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
