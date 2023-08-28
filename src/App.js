import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Search from './components/search'
import Home from "./components/home";
import Location from "./components/getLocation";
import ContactUS from './components/Form'
import Navbar from "./components/navbar";

const App = function(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/location" element={<Location/>}/>
                        <Route path="/contact-us" element={<ContactUS/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App