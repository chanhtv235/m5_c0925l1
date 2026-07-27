import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js";
import Header from "./component/Header.jsx";
import ListComponent from "./class_component/ListComponent.jsx";

function App() {

    return <>
        <Header appName = "Codegym" address = "ĐN"/>
        <ListComponent/>
    </>;
}

export default App
