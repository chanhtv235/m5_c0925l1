import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js";
import Header from "./component/Header.jsx";
import List from "./component/student/List.jsx";

function App() {

    return <>
        <Header appName = "Codegym" address = "ĐN"/>
        <List/>
    </>;
}

export default App
