import Khaya_logo from "./Khaya_logo.png";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { RiFacebookCircleLine } from "react-icons/ri";

function Footer() {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img className="m-2" src={Khaya_logo} alt="..." height="30"></img>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary">
            © 2024 KhayaPlus, All Rights Reserved
          </span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <SlSocialTwitter size="1.5em" />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <SlSocialInstagram size="1.5em" />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#">
              <RiFacebookCircleLine size="1.5em" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
