import React from 'react';

function Product( { label, image, productName, price } ) {
    return (
        <article>
            <span>{label}</span>
            <img src={image} alt={productName}/>
            <p>{productName}</p>
            <h4>€{price},-</h4>
        </article>
    )
};

export default Product