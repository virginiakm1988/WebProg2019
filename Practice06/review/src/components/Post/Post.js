import React from "react";

export default ({ id }) => {


    const title = ["2019創創週《創闖看!》系列活動"];
    title.push( "創創11屆達人營");
    title.push("123");
    title.push("234");
    title.push("345");

    return (
        <article>
            <header className = "blank" >
            </header>
            <div style={{textAlign:'center',
                        backgroundColor: '#e1d2c0',
                        margin: '100px',
                        height: '300px',
                        backgroudcolor:'red'}}>
                <h1>Activities #{id}</h1>
                <p>{title[id-1]}</p>
            </div>
        </article>
    );
};
