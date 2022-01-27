import React from 'react'

const MenuCart = ({ val }) => {
    // console.log(val);
    return (
        <>
        <section className="main-card--cointainer">
            {val.map((CurElement) => {
                const{id,name,category,image,description}=CurElement;
                return (
                    
                    <>
                        <div className="card-container" >
                            <div className="card ">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    <span className="card-author subtle">{name}</span>
                                    <h2 className="card-title"> {name} </h2>
                                    <span className="card-description subtle">
                                    {description}
                                    </span>
                                    <div className="card-read">Read</div>
                                </div>
                                <img src={image} alt="images" className="card-media" />

                                <span className="card-tag  subtle">Order Now</span>
                            </div>
                        </div>
                    </>
                )
            })}
    </section>
        </>
    )
}

export default MenuCart
