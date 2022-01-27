import React, { useState } from 'react'
import "./resturant.css"
import Menu from './MenuApi';
import MenuCart from './MenuCart';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
        Menu.map((cval) => {
        return cval.category;
    })
    ),
    "All",
];
// console.log(Menu[0].category);
// console.log(uniqueList);
const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu)
    const filterItem = (takenCategory) => {
        if(takenCategory==="All")
        {setMenuData(Menu)
        return;}
        const updatedList = Menu.filter((CurValue) => {
            return CurValue.category === takenCategory;
        });
        setMenuData(updatedList);
    }

    return (
        <>
            <Navbar navVal={uniqueList} filterItem={filterItem} />
            <MenuCart val={menuData} />
        </>

    );
};

export default Resturant;
