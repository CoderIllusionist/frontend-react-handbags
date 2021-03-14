import React from 'react';

function Tile({image, children, title, imageFirst}) {

    // Show the image first
    if (imageFirst === true && image !== undefined) {
        return (
            <footer>
                <section>
                    <img src={image} alt=""/>
                </section>
                <section>
                    <h2>{title}</h2>
                    {children}
                </section>
            </footer>
        )
    }
    // Show the image last
    if (imageFirst === false && image !== undefined) {
        return (
            <footer>
                <section>
                    <h2>{title}</h2>
                    {children}
                </section>
                <section>
                    <img src={image} alt=""/>
                </section>
            </footer>
        )

    }
    // Text only mode (no images)
    if(image === undefined) {
        return (
            <footer>
                <section className={ 'center' }>
                    <h2>{title}</h2>
                    {children}
                </section>
            </footer>
        )
    }
};

export default Tile