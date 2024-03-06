import React from "react";
import { Link } from "react-router-dom";
import hero from "../hero.png";

export default function HeroImage() {
  return (
    <div
      style={{ height: 600 }}
      className="d-flex align-items-center justify-content-center"
    >
      <img src={hero} className="card-img-top h-100" alt="" />
    </div>
  );
}
