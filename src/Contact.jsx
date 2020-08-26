import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  //Important

  const InputEvent = (event) => {
    const { name, value } = event.target; //object destructuring
    setData((preVal) => {
      return {
        ...preVal, //spread operator
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault(); //To prevent refreshing
    alert(
      `My full name is ${data.fullname}. My email id is ${data.email} . All I want to say is : ${data.msg}`
    );
  };
  return (
    <div>
      <div className="my-5" style={{ textAlign: "center" }}>
        <h1>Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto" style={{ margin: "auto" }}>
            <form onSubmit={formSubmit}>
              <div class="form-group" style={{ marginBottom: "10px" }}>
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder=" Enter your name"
                />
              </div>
              <div class="form-group" style={{ marginBottom: "10px" }}>
                <label for="exampleFormControlInput1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name"
                />
              </div>
              <div class="form-group" style={{ marginBottom: "10px" }}>
                <label for="exampleFormControlInput1">Phone No</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="mobile number"
                />
              </div>

              <div class="form-group" style={{ marginBottom: "10px" }}>
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <div
                style={{
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  name="msg"
                  value={data.msg}
                  className="btn btn-primary"
                  style={{ justifyContent: "center", color: "#fff" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
