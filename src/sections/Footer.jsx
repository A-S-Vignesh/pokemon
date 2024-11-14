import React from "react";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer container-fluid p-4 mt-4">
      <div className="row">
        <h4 className="col-md-6">Made by Vignesh with 💞</h4>
        <h6 className="col-md-6">©{year} Notes. All rights reserved</h6>
      </div>
    </div>
  );
}

export default Footer;
