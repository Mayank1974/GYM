import React from "react";

export default function Footer() {
  return (
    
    <span className="p-3 flex flex-col bg-gray-900 text-white text-lg  shadow dark:bg-gray-900    sm:text-center dark:text-white">
      <span>
        © 2024{" "}
        <a href="/" className="hover:underline">
          MayankLifts™
        </a>
        . All Rights Reserved.
      </span>
      
      <span>Designed & Developed by <a href="https://www.linkedin.com/in/mayankchauhan2002/" className="font-bold"> Mayank Chauhan</a></span>
    </span>
  );
}
