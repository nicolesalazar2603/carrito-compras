import React, { useState } from 'react';
import leopardo from '../images/sample1 (1).PNG';
import black from '../images/sample1 (2).PNG';
import palmeras from '../images/sample1 (3).PNG';
import aqua from '../images/sample1 (4).PNG';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    console.log(props);
    //const [basketNumbers, setBasketNumbers] = useState(0)
    //const addToBasket = () => {
        //setBasketNumbers (basketNumbers +1);
        //Add to the a onClick={addToBasket}
    
    return (
        <div className="container">
            <div className="image">
                <img src={leopardo} alt="Leo Swimsuit" />
                <h3>Swinsuit</h3>
                <h3>$100.000</h3>
                <a onClick={props.addBasket} className="addToCart cart1" href="#">Agregar al carrito</a>
            </div>
            <div className="image">
                <img src={black} alt="Black Swimsuit" />
                <h3>Swinsuit</h3>
                <h3>$100.000</h3>
                <a onClick={props.addBasket} className="addToCart cart2" href="#">Agregar al carrito</a>
            </div>
            <div className="image">
                <img src={palmeras} alt="palmeras Swimsuit" />
                <h3>Swinsuit</h3>
                <h3>$100.000</h3>
                <a onClick={props.addBasket} className="addToCart cart3" href="#">Agregar al carrito</a>
            </div>
            <div className="image">
                <img src={aqua} alt="aqua Swimsuit" />
                <h3>Swinsuit</h3>
                <h3>$100.000</h3>
                <a onClick={props.addBasket} className="addToCart cart4" href="#">Agregar al carrito</a>
            </div>
         
        </div>
    )

}

export default connect(null, { addBasket }) (Home);
