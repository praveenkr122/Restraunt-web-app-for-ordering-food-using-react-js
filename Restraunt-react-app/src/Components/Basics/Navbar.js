import React from "react";

const Navbar = ({ filterItem, menuList }) => { // Corrected component name
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
                key={curElem} // Add a key prop
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;