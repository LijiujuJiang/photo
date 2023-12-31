import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import navItems from "./img";


export default function Navbar() {
  return (
    <>
      <div style={{ height: "500px" }}>
        
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          stopOnHover={true}
          dynamicHeight={false}
        >
          {navItems.map((item, index) => (
            <div key={index}>
              <img src={item.imageUrl} />
              <p style={{ marginTop: "10px",color:item.color}}>{item.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
