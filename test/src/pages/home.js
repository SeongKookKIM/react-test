import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

$(function () {
  $(".mo").on("click", function () {
    $(".tt").fadeIn(3000);
  });
  $(".close").on("click", function () {
    $(".tt").fadeOut(3000);
  });
});

function Home() {
  const navi = useNavigate();

  useEffect(() => {
    gsap.from(".mo", {
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
      yPercent: 50,
      scale: 3,
      opacity: 0,
    });
    gsap.to(".boox2", {
      scrollTrigger: {
        trigger: ".boox",
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
      backgroundColor: "red",
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="home">
      <h1>Home 입니다.</h1>
      <button
        onClick={() => {
          navi("/test");
        }}
      >
        {" "}
        이동
      </button>
      <button className="mo">MODAL</button>
      <div className="tt">
        테스트입니다.
        <div className="close"></div>
      </div>
      <div className="boox"></div>
      <div className="boox2"></div>
    </div>
  );
}

export default Home;
