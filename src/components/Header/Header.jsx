import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css"

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Find Your Book of Choice.</h2><br />
          <p className="header-text fs-18">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae, architecto, repellat ab voluptatibus laborum quo aperiam laudantium, exercitationem neque quod reprehenderit sequi perspiciatis fugit!</p>
          <SearchForm/>
        </div>
      </header>
    </div>
  )
}

export default Header