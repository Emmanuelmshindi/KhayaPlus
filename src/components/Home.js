import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import archdes from "./assets/archdes.jpg";
import graphicdes from "./assets/graphicdes.jpg";
import digill2 from "./assets/digill2.jpg";
import Crafts from "./assets/Crafts.jpg";
import architect from "./assets/architect.jpg";
import craftsperson from "./assets/craftsperson.jpg";
import designerimg from "./assets/designerimg.jpg";
import artistimg2 from "./assets/artistimg2.jpg";

import SingleProduct from "./SingleProduct";

function Home() {
  const products = [
    {
      title: "Product1",
      price: 100,
    },
    {
      title: "Product2",
      price: 300,
    },
    {
      title: "Product3",
      price: 200,
    },
    {
      title: "Product4",
      price: 40,
    },
  ];
  return (
    <main className="mt-4">
      <div className="container">
        {/* <HeroImage /> */}
        {/* Popular designs */}
        {/* <h3 className="mb-4 mt-3">
          Popular Designs{" "}
          <Link to="/products" className="float-end btn btn-dark">
            View All Designs <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </h3>
        <div className="row">
          {products.map((product) => (
            <SingleProduct product={product} />
          ))}
        </div> */}
        {/* Popular designs */}
        {/* Popular categories */}
        <h3 className="mb-4 mt-3">
          Popular Categories{" "}
          <a href="#" className="float-end btn btn-dark">
            View All Categories <i className="fa-solid fa-arrow-right-long"></i>
          </a>{" "}
        </h3>
        <div className="row">
          {/* Category box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={archdes} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Architecture</h4>
              </div>
              <div className="card-footer">No. of projects: 25</div>
            </div>
          </div>
          {/* Category box */}
          {/* Category box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={graphicdes} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Graphic Design</h4>
              </div>
              <div className="card-footer">No. of projects: 20</div>
            </div>
          </div>
          {/* Category box */}
          {/* Category box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={digill2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Digital Illustration</h4>
              </div>
              <div className="card-footer">No. of projects: 13</div>
            </div>
          </div>
          {/* Category box */}
          {/* Category box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={Crafts} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Arts and Crafts</h4>
              </div>
              <div className="card-footer">No. of projects: 10</div>
            </div>
          </div>
          {/* Category box */}
        </div>
        {/* Popular categories end */}
        {/* Popular experts */}
        <h3 className="mb-4 mt-3">
          Featured Experts{" "}
          <a href="#" className="float-end btn btn-dark">
            View All Experts <i className="fa-solid fa-arrow-right-long"></i>
          </a>{" "}
        </h3>
        <div className="row">
          {/* Expert box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={architect} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <h5 className="card-title text-muted">Architect</h5>
              </div>
              <div className="card-footer">
                Categories: <a href="#">Apartments, Maisonnetes</a>
              </div>
            </div>
          </div>
          {/* Expert box */}
          {/* Expert box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={artistimg2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Jane Dee</h4>
                <h5 className="card-title text-muted">Fine Artist</h5>
              </div>
              <div className="card-footer">
                Categories: <a href="#">Arts and Crafts, Painting</a>
              </div>
            </div>
          </div>
          {/* Expert box */}
          {/* Expert box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={designerimg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Sidney Smith</h4>
                <h5 className="card-title text-muted">Digital Illustrator</h5>
              </div>
              <div className="card-footer">
                Categories: <a href="#">Digital Art</a>
              </div>
            </div>
          </div>
          {/* Expert box */}
          {/* Expert box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={craftsperson} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Jean Bill</h4>
                <h5 className="card-title text-muted">Interior Designer</h5>
              </div>
              <div className="card-footer">
                Categories: <a href="#">Interior design</a>
              </div>
            </div>
          </div>
          {/* Expert box */}
        </div>
        {/* Featured experts end */}

        {/* Rating and Reviews */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide my-4 bg-dark text-white p-5"
          data-bs-ride="True"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>Great service, no downtimes.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"> </i>
                  <i className="fa fa-star text-warning"> </i>
                  <i className="fa fa-star text-warning"> </i>
                  <cite title="Source Title">Cathy</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>Very professional experts I got to work with.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"> </i>
                  <i className="fa fa-star text-warning"> </i>
                  <cite title="Source Title">Sam</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>
                    Great service. I was able to order and pay for services
                    seamlessly.
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"> </i>
                  <i className="fa fa-star text-warning"> </i>
                  <i className="fa fa-star text-warning"> </i>
                  <i className="fa fa-star text-warning"> </i>
                  <cite title="Source Title">Ben</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* End */}
      </div>
    </main>
  );
}

export default Home;
