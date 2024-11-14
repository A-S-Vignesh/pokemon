import React from "react";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer container-fluid p-4 bg-gray-300">
      <div className="row">
        <h2 className="col-md-6">Made by Vignesh with 💞</h2>
        <h4 className="col-md-6">©{year} Notes. All rights reserved</h4>
      </div>
    </div>
  );
}

export default Footer;
