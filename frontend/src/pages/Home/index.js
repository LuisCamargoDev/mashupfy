import React, { Component } from "react";
import Menu from '../../components/Menu';

// import Header from "../../components/Header";
// import axios from "axios";

import Product from '../../components/Product';
import Company from '../../components/Company';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Menu/>
                <Company/>
                <Product/>
            </div>
        );
    }
}