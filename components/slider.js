import React from "react";
import "react-multi-carousel/lib/styles.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

export const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export const Responsive = {
  0: {
    items: Math.floor(2.5),
    margin: 20
  },
  768: {
    items: Math.floor(2.5),
    margin: 30
  },
  1024: {
    items: Math.floor(2.5),
    margin: 50
  }
}







