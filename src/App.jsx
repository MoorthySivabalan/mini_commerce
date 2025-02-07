import React, { useState } from 'react';
import { FaSearch, FaCartPlus } from "react-icons/fa";
import Pro from './Product';
import './App.css';
import ball1 from './images/baseball_ball.jpg';
import ball2 from './images/basket_ball.jpg';
import ball3 from './images/beach_volley_ball.jpg';
import ball4 from './images/bowling_ball.jpg'
import ball5 from './images/cricket_ball.jpg';
import ball6 from './images/football_ball.jpg';
import ball7 from './images/golf_ball.jpg';
import ball8 from './images/handball_ball.jpg';
import ball9 from './images/hockey_ball.jpg';
import ball10 from './images/rugby_ball.jpg';
import ball11 from './images/smiley_ball.jpg';
import ball12 from './images/stumper_ball.jpg';
import ball13 from './images/table_tennis_ball.jpg';
import ball14 from './images/tennis_ball.jpg';
import ball15 from './images/volley_ball.jpg';


export default function App() {
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);

    const sendProduct = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.name === item.pname);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.name === item.pname
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { name: item.pname, price: item.amount, quantity: 1 }];
            }
        });
    };

    const product = [
        { name: "Base Ball", category: "ball", price: 296, no: 1, pic: ball1 },
        { name: "Basketball Ball", category: "ball", price: 355, no: 2, pic: ball2 },
        { name: "Beach Volley Ball", category: "ball", price: 199, no: 3, pic: ball3 },
        { name: "Bowling Ball", category: "ball", price: 11510, no: 4, pic: ball4 },
        { name: "Cricket Ball", category: "ball", price: 485, no: 5, pic: ball5 },
        { name: "Football Ball", category: "ball", price: 349, no: 6, pic: ball6 },
        { name: "Golf Ball", category: "ball", price: 2795, no: 7, pic: ball7 },
        { name: "Handball Ball", category: "ball", price: 879, no: 8, pic: ball8 },
        { name: "Hockey Ball", category: "ball", price: 149, no: 9, pic: ball9 },
        { name: "Rugby Ball", category: "ball", price: 630, no: 10, pic: ball10 },
        { name: "Smiley Ball", category: "ball", price: 29, no: 11, pic: ball11 },
        { name: "Stumper Ball", category: "ball", price: 287, no: 12, pic: ball12 },
        { name: "Table Tennis Ball", category: "ball", price: 363, no: 13, pic: ball13 },
        { name: "Tennis Ball", category: "ball", price: 81, no: 14, pic: ball14 },
        { name: "Volleyball Ball", category: "ball", price: 629, no: 15, pic: ball15 },
    ]

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className='overall'>
            <nav>
                <h1> Search.com </h1>
                <div>
                    <input className="dark-button" type="checkbox" id="menu" />
                    <input htmlFor="menu" className='search' type="text" placeholder='Search here...' defaultValue={search} onChange={sea => setSearch(sea.target.value)} />
                    <label htmlFor="menu">
                        <FaSearch />
                    </label>
                    <label htmlFor="bill" className='bill'>
                        <FaCartPlus />
                    </label>
                </div>
            </nav>
            <main>
                {product.filter((item) => {
                    if (search == "") {
                        return item;
                    } else if (item.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                        return item;
                    }
                }).map((item) => (
                    <Pro sent={sendProduct} pname={item.name} img={item.pic} amount={item.price} />
                ))}
                <input className="cart-button" type="checkbox" id="bill" />
                <aside>
                    <h2> Your Cart <FaCartPlus /> </h2>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <table className="cart-table">
                            <tr className='title'>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            {cart.map((item) => (
                                <tr key={item.name}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>₹{item.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <th> Total </th>
                                <th> {totalItems} </th>
                                <th> ₹{totalPrice} </th>
                            </tr>
                        </table>
                    )}
                </aside>

            </main>
        </div>
    )
}