import React, { Component } from 'react';

import Header from "../components/header";
import Gnb from "../components/gnb";
import Footer from "../components/footer";

class WebtoonHome extends Component{
    render(){
        return (
            <div>
                <Header />
                <Gnb />
                <div className="container">
                WebtoonHome
                </div>                
                <Footer />
            </div>
        )
    }
}

export default WebtoonHome