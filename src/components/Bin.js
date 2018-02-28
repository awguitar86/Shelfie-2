import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatPriceForDB, formatPriceForDisplay } from '../utils/formatting.utils';
import { getBin, updateBin, deleteBin } from '../services/api.services';

class Bin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            bin_id: '',
            shelf: '',
            name: '',
            price: '',
        };
        this.allowEdit = this.allowEdit.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.deleteThenRedirect = this.deleteThenRedirect.bind(this);
    }

    componentWillMount() {
        getBin(this.props.match.params.id)
            .then( bin => {
                const { bin_id, shelf, name, price } = bin;
                const formattedPrice = formatPriceForDisplay(price);
                this.setState({ bin_id, shelf, name, price: `$${formattedPrice}` });
            });
    }

    allowEdit() {
        this.setState({ edit: true });
    }

    changeNameHandler(e) {
        this.setState({ name: e.target.value });
    }

    changePriceHandler(e) {
        this.setState({ price: e.target.value });
    }

    saveChanges() {
        const { name, price } = this.state;
        const formattedPrice = formatPriceForDB(price);
        const body = {
            name: name,
            price: formattedPrice,
        };

        if (name !== '' && formattedPrice > 0 ) {
            updateBin(this.props.match.params.id, body)
                .then( res => {
                    if (res.status === 200) {
                        this.setState({ edit: false });
                    } else {
                        alert('There was an issue with your request');
                    }
                });
        } else {
            alert('please enter in a name and ap rice greater than $0.00, and try again.');
        }
    }

    deleteThenRedirect() {
        const shelf = this.state.shelf;
        deleteBin(this.props.match.params.id)
            .then( res => {
                if (res.status === 200) {
                    this.props.history.push(`/shelf/${shelf}`);
                } else {
                    alert('There was an issue with your request');
                }
            });
    }

    render() {
        const { edit, bin_id, shelf, name, price } = this.state;
        let binArray = bin_id.split('');
        let bin = binArray[1];
        let binName;
        let binPrice;
        let saveOrEdit;

        if (!edit) {
            binName = <p className='b-bin-name'> {name} </p>
            binPrice = <p className='b-bin-price'> {price} </p>
            saveOrEdit = <button className='b-edit-btn' onClick={this.allowEdit}> Edit </button>
        } else {
            binName = <input className='b-input-name' type='text' value={name} onChange={ e => this.changeNameHandler(e) } />
            binPrice = <input className='b-input-price' type='text' value={price} onChange={ e => this.changePriceHandler(e) } />
            saveOrEdit = <button className='b-save-btn' onClick={this.saveChanges}> Save </button>
        }

        return(
            <div>
                <div className='b-page-left'>
                    <Link to='/' className='b-logo-container'>
                        <img src='../assets/logo.png' alt='shelfie-logo'/>
                    </Link>
                </div>
                <div className='b-page-right'>
                    <div className='b-header-right'>
                        <Link to={`/shelf/${shelf}`} className='b-shelf-container'>
                            <p> Shelf {shelf} </p>
                        </Link>
                        <div className='b-bin-container'>
                            <p> Bin {bin} </p>
                        </div>
                    </div>
                    <div className='b-body'>
                        <img src='http://lorempixel.com/200/200/business/' alt='bin' />
                        <div className='b-info-container'>
                            <p className='b-name-label'> Name </p>
                            {binName}
                            <p className='b-price-label'> Price </p>
                            {binPrice}
                            <div className='b-btn-container'>
                                {saveOrEdit}
                                <button className='b-delete-btn' onClick={this.deleteThenRedirect}> Delete </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Bin;