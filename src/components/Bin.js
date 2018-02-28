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

    }
}