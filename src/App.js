import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Join from './pages/Join';
import Team from './pages/Team';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/our-team">
                        <Team />
                    </Route>
                    <Route path="/join">
                        <Join />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
