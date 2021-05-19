import React, { Component } from 'react';

import Header from "../components/header";
import Gnb from "../components/gnb";
import Footer from "../components/footer";

class Viewer extends Component{
    render(){
        return (
            <div>
                <Header />
                <Gnb />
                <div className="container">
                Viewer
                </div>
                
                <Footer />
            </div>
        )
    }
}

export default Viewer;