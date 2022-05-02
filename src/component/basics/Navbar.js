import React from "react";

export default function Navbar({ filterItem, menuList }) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElement) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElement)}
              >{curElement}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
