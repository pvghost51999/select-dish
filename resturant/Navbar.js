import React from 'react'
import "./resturant.css"
const Navbar = ({ navVal, filterItem }) => {
    return (
        <>

            <nav className="navbar">
                <div className="btn-group">
                    {navVal.map((curNav) => {
                        return (
                            <>
                                <button className="btn-group__item" onClick={() => filterItem(curNav)}> {curNav}</button>
                            </>
                        )

                    })}
                </div>
            </nav>
        </>
    )

}

export default Navbar
