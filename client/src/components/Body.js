import React from "react";
import "../css/body.css";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <div>
      <div class="pad">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="bodyHeading">
            At Pictoreal, we believe in the power of collective generosity . We provide a platform where your contributions can create lasting change, and where every donation, no matter how big or small, has the potential to transform lives.
            </h1>
            <Link to="/register">
              <button style={{ marginRight: " 2%" }}>Donate</button>
            </Link>
            <Link to="/createCampaign">
              <button style={{ marginRight: " 2%" }}>Raise Campaign</button>
            </Link>
          </div>
          <div class="col-lg-6">
            <img
              class="title-image"
              src="https://png.pngtree.com/png-clipart/20211212/original/pngtree-aesthetic-girl-long-hair-and-weeds-simple-cartoon-png-image_6961771.png"
              alt="iphone-mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
