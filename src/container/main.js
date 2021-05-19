import React, { Component } from 'react';
import axios from 'axios';

import Header from "../components/header";
import Gnb from "../components/gnb";
import Footer from "../components/footer";

class Main extends Component{
    render(){
        return (
            <div>
                <Header />
                <Gnb />
                <div className="container">
                    main
                </div>
                <Footer />
            </div>
        )
    }
}

export default Main;