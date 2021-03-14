import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";

// Images
import Bag1 from "./assets/bag_1.png"
import Bag2 from "./assets/bag_2.png"
import Bag3 from "./assets/bag_3.png"
import Bag4 from "./assets/bag_4.png"
import Brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>

            <Button
                disabled={false}
                text="To the collection"
            />
            <Button
                disabled={false}
                text="Shop all bags"
            />
            <Button
                disabled={true}
                text="Pre-orders"
            />
            <main>
                <Product
                    label="Best seller"
                    image={Bag1}
                    productName="The handy bag"
                    price="400"
                />
                <Product
                    label="Best seller"
                    image={Bag2}
                    productName="The stylish bag"
                    price="250"
                />
                <Product
                    label="New collection"
                    image={Bag3}
                    productName="The simple bag"
                    price="300"
                />
                <Product
                    label="New colection"
                    image={Bag4}
                    productName="The trendy bag"
                    price="150"
                />
            </main>
            {/* Image second */}
            <Tile image={Brand} title="The brand" imageFirst={false}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae corporis id illo illum nam
                    nihil officiis placeat repudiandae sed! Ad, culpa debitis harum incidunt pariatur perspiciatis
                    quibusdam temporibus vitae!</p>
                <h3>How it all started</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, velit!</p>
            </Tile>
            {/* Image first */}
            <Tile image={ourStory} title="Our story" imageFirst={true}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae corporis id illo illum nam
                    nihil officiis placeat repudiandae sed! Ad, culpa debitis harum incidunt pariatur perspiciatis
                    quibusdam temporibus vitae!</p>
            </Tile>
            {/* Text only mode */}
            <Tile title="Text only">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae corporis id illo illum nam
                    nihil officiis placeat repudiandae sed! Ad, culpa debitis harum incidunt pariatur perspiciatis
                    quibusdam temporibus vitae!</p>
            </Tile>
        </>
    );
};

export default App;



