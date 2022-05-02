import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";


const uniqueList=[
    ...new Set(Menu.map((curElement)=>{
      return curElement.category;
})),"All",
]       // there r many repeat category r in menuApi so not repeat that category so this method is used
const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  //console.log(menuData);

  const filterItem = (category) => {
      if(category==="All"){
          setMenuData(Menu);
      return;
    }
    const updateList = Menu.filter((curElement) => {
      return curElement.category === category;
    });
    setMenuData(updateList);
  };
  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  );
};

export default Restaurant;
