import React from "react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="container-fluid bg-dark text-white text-center p-4 my-3">
      <p>
        <small>copyright&copy;{year}</small>
      </p>
    </footer>
  );
};

export default Footer;
