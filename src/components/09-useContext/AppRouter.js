import React from 'react'
import {
    BrowserRouter as Router,
    Routes,    
    Route
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';


export const AppRouter = () => {
    return (
        <Router>            
                <NavBar />
                <div className='container'>            
                    <Routes>
                        <Route path="/" element={ < HomeScreen /> }/>
                        <Route path="/about" element={ < AboutScreen /> }/>
                        <Route path="/login" element={ < LoginScreen /> }/>

                        {/* Una forma de hacerlo */}
                        <Route path="*" element={ <HomeScreen />} />
                        {/* <Redirect to="/"> */}
                    </Routes>      
                </div>
            </Router>
        
    )
}
