import { Link } from "react-router-dom";

import ExpertSidebar from "./ExpertSidebar";

function AddProduct() {
  return (
    <div className="container mt-4">
      {/* <h3 className="mb-4 mt-3">Favorites (4)</h3> */}
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <ExpertSidebar />
        </div>

        <div className="col-md-9 col-12 mb-3">
          <div className="card">
            <h4 className="card-header">Upload Project</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="Category" className="form-label">
                    Category
                  </label>
                  <select className="form-control">
                    <option>Interior design</option>
                    <option>Graphic design</option>
                    <option>Bungalow</option>
                    <option>Maisonette</option>
                    <option>Apartment</option>
                    <option>Mixed Use Development</option>
                    <option>Highrise Building</option>
                    <option>Institution</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="Title" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="Title" />
                </div>
                <div className="mb-3">
                  <label for="Price" className="form-label">
                    Price
                  </label>
                  <input type="number" className="form-control" id="Price" />
                </div>
                <div className="mb-3">
                  <label for="Description" className="form-label">
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="Description"
                    rows="8"
                  />
                </div>
                <div class="mb-3">
                  <div>
                    <label for="ProductImg" className="form-label">
                      Project Images
                    </label>
                  </div>
                  <div className="input-group">
                    <input type="file" class="form-control" id="ProductImg" />
                    <label class="input-group-text" for="inputGroupFile02">
                      Upload
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
