import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './home.css';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="wrapper">
                <header className="header">
                    <div>
                        <Link to="/"><img src={Logo} alt="shelfie logo"/></Link>
                        <Link to="/"><h2>SHELFIE</h2></Link>
                    </div>
                </header>
                <div className="shelves">
                    <Link to="/shelfa">Shelf A</Link>
                    <Link to="/shelfb">Shelf B</Link>
                    <Link to="/shelfc">Shelf C</Link>
                    <Link to="/shelfd">Shelf D</Link>
                </div>
            </div>
        );
    }
}

export default Home;