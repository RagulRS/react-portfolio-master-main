import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
         
        <div
  className="container d-flex flex-column flex-lg-row align-items-center justify-content-between"
  style={{ minHeight: "100vh", padding: "20px" }}
>
  
  <div
    className="order-1 order-lg-2"
    style={{
      width: "90%", 
      maxWidth: "400px", 
      height: "auto", 
      aspectRatio: "1 / 1", 
      backgroundImage: `url(${introdata.your_img_url})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      border: "1px solid #ddd",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
    }}
  ></div>

  
  <div
    className="text order-3 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start"
    style={{
      maxWidth: "90%", 
      width: "100px", 
      margin: "20px",
    }}
  ></div>
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="lb-2x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <span>
                  <div id="button_h" className="ac_btn btn">
                  <a target="_blank" href={"https://drive.google.com/file/d/1OEutuudzky-YjqoAmym6xPyYDeGAHDfS/view?usp=sharing"}>Resume</a>
                  </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
