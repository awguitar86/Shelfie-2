import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postBin } from '../services/api.services';

class AddBin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '0',
        };

    }

    changeNameHandler(e) {
        this.setState({ name: e.target.value });
    }

    changePriceHandler(e) {
        if (e.target.value === '') {
            this.setState({ price: '$'});
        } else {
            this.setState({ price: e.target.value });
        }
    }

    addBin() {
        const id = this.props.match.params.id;
        const idArray = id.split('');
        const shelf = idArray[0];
        const { name, price } = this.state;
        const body = {
            name: name,
            price: formattedPrice,
        };

        if ( name !== '' && formattedPrice > 0 ) {
            postBin(id, body)
                .then( res => {
                    if (res.status === 200) {
                        this.props.history.push(`/shelf/${shelf}`);
                    }
                });
        } else {
            alert('please enter in a name and a price greater than $0.00, and try again.');
        }
    }

    render() {
        const id = this.props.match.params.id.split('');
        const shelfName = id[0];
        const bin_id = id[1];

        return(
            <div className='AddBin'>
                <div className='ab-header'>
                    <Link to='/' className='ab-logo-container'>
                        <img src='../assets/logo.png' alt='shelfie-logo' />
                    </Link>
                    <Link to={`/shelf/${shelfName}`} className='ab-shelf-container' >
                        <p> Shelf {shelfName} </p>
                    </Link>
                    <div className='ab-addbin-container'>
                        <p> Add to Bin {bin_id} </p>
                    </div>
                </div>
                <div className='ab-body'>
                    <div className='ab-form'>
                        <p className='ab-name-label'> Name </p>
                        <input type='text' onChange={ e => this.changeNameHandler(e) } />
                        <p className='ab-price-label'> Price </p>
                        <input type='text' onChange={ e => this.changePriceHandler(e) } value={this.state.price} />
                        <button onClick={this.addBin}> + Add to Inventory </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBin;