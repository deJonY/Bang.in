import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Section1 from "./section/Section1";
import Section2 from "./section/Section2";
import Section3 from "./section/Section3";
import Footer from "./component/Footer";

function App() {
    return (
        <div className="App">
            <Header/>

            <Section1/>

            <Section2/>

            <Section3/>

            <Footer/>
        </div>
    );
}

export default App;
