import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './shelfA.css';

class ShelfAItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="wrapper">
                <header className="shelf-header">
                    <div className="shelf-item-left">
                        <Link to="/"><img src={Logo} alt="shelfie logo"/></Link>
                    </div>
                    <div className="shelf-item-center">
                        <Link to="/shelfa"><h2>SHELF A</h2></Link>
                    </div>
                    <div className="shelf-item-right">
                        <h2>Add to Bin 1</h2>
                    </div>
                </header>
                <div className="body">
                    <input className="name" placeholder="Name"/>
                    <input className="price" placeholder="$Price"/>
                    <button className="add-to-inventory">+ Add to Inventory</button>
                </div>
            </div>
        );
    }
}

export default ShelfAItem;