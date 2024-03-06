import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";

function AllProducts(props) {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [Products, setProducts] = useState([]);
  const [totalResult, setTotalResults] = useState(0);

  useEffect(() => {
    fetchData(baseUrl + "/products");
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
        setTotalResults(data.count);
      });
  }

  function changeUrl(baseurl) {
    fetchData(baseurl);
  }

  var links = [];
  var limit = 1;
  var totalLinks = totalResult / limit;
  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li className="page-item">
        <Link
          onClick={() => changeUrl(baseUrl + `/products/?page=${i}`)}
          to={`/products/?page=${i}`}
          class="page-link"
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <section className="container mt-4">
      <h3 className="mb-4 mt-3">All Designs </h3>
      <div className="row">
        {Products.map((product) => (
          <SingleProduct product={product} />
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">{links}</ul>
      </nav>
    </section>
  );
}

export default AllProducts;
