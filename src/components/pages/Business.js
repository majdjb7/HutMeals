import React from 'react';
import '../../App.css';

export default function Business() {
  return(
          
  
    <body>
      
      <div className="col-md-2 text-left">
        <a className=" btn btn-success" role="button" href="/">Main page</a>
      </div>
      <section className="testimonial py-5" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-4 py-5 bg-primary text-white text-center">
              <div className=" ">
                <div className="card-body">
                  <img
                    src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                  />
                  <h2 className="py-3">Registration</h2>
                  <p>
                    By submitting this form, Your business will be shared on the
                    market place page.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8 py-5 border">
              <h4 className="pb-4">Please fill your business details</h4>
              <form method="GET" action="/submit">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Business Name"
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6" name="email">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6" name="email">
                    <input
                      type="number"
                      name="zip_code"
                      className="form-control"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
  
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      id="Mobile No."
                      name="mobileNo"
                      placeholder="Phone"
                      className="form-control"
                      required="required"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <select
                      id="inputState"
                      className="form-control"
                      name="busninessType"
                    >
                      <option>Electronics</option>
                      <option>Food</option>
                      <option>Clothing</option>
                      <option>Beauty</option>
                      <option>Educational</option>
                      <option>Fitness</option>
                      <option>Home & Living</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      id="comment"
                      name="comment"
                      placeholder="Description"
                      cols="40"
                      rows="5"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="itemUrl"
                      placeholder="Image Url"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
  
                <div className="form-row">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true">
                    <a
                      className="btn btn-success btn-md"
                      role="button"
                      data-toggle="modal"
                      data-target="#form"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <hr />
  
                <div className="form-row">
                  <input type="submit" className="btn btn-danger" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  
      <div
        className="modal fade"
        id="form"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">Add Item</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form method="GET" action="/add_item">
              <div className="form-group col-md-12">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="itemName"
                      placeholder="Item Name"
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <div className="form-group col-md-6" name="email">
                    <input
                      type="text"
                      name="Price"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Item Price"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="itemUrl"
                      placeholder="Image Url"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <textarea
                  id="comment"
                  name="comment"
                  placeholder="Description"
                  cols="40"
                  rows="5"
                  className="form-control"
                ></textarea>
                <br />
                <div className="text-center">
                  <input type="submit" className="btn btn-success" value="Add" />
                  <input
                    type="submit"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    value="Close"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>

    
    
    
    );

}
