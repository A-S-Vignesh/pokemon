import React from "react";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="bg-white shadow-inner py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-700 text-lg font-medium">
            Made with 💞 by Vignesh
          </div>
          <div className="text-gray-500">
            ©{year} Pokédex. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
