import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './shelfA.css';

class ShelfA extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <header className="shelf-header">
                    <div className="shelf-left">
                        <Link to="/"><img src={Logo} alt="shelfie logo"/></Link>
                    </div>
                    <div className="shelf-right">
                        <Link to="/"><h2>SHELF A</h2></Link>
                    </div>
                </header>
                <div className="body">
                    <Link to="/create/A1" className="add bin-1">+ Add Inventory</Link>
                    <Link to="/" className="add bin-2">+ Add Inventory</Link>
                    <Link to="/" className="add bin-3">+ Add Inventory</Link>
                    <Link to="/" className="add bin-4">+ Add Inventory</Link>
                    <Link to="/" className="add bin-5">+ Add Inventory</Link>
                </div>
            </div>
        );
    }
}

export default ShelfA;