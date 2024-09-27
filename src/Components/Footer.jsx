import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

function Footer() {
  return (
    <div>
      <MDBFooter
        className="text-center text-dark "
        style={{ backgroundColor: "#d3e0ea" }}
      >
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i
                className="fa-brands fa-facebook fa-fade fa-2xl"
                style={{ color: "#74C0FC", marginTop: "19px" }}
              ></i>

              <MDBIcon />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i
                className="fa-brands fa-twitter fa-fade fa-xl"
                style={{ color: "#fafafa", marginTop: "19px" }}
              ></i>
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i
                className="fa-brands fa-google  fa-fade fa-xl"
                style={{ color: "#fafafa", marginTop: "19px" }}
              ></i>
              <MDBIcon />
            </MDBBtn>
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i
                className="fa-brands fa-instagram  fa-fade fa-xl"
                style={{ color: "#fafafa", marginTop: "19px" }}
              ></i>
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <i
                className="fa-brands fa-linkedin-in  fa-fade fa-xl"
                style={{ color: "#fafafa", marginTop: "19px" }}
              ></i>
              <MDBIcon />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <i
                className="fa-brands fa-github  fa-fade fa-xl"
                style={{ color: "#fafafa", marginTop: "19px" }}
              ></i>
              <MDBIcon />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div className="text-center p-3" style={{ backgroundColor: "#b8c4cf" }}>
          © 2024 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
