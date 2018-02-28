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
}

export default AddBin;