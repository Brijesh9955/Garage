import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "~slick-carousel/slick/slick.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './Garage/Technician/Signup';
import Header from './Garage/Header';

import Vehical from './Garage/Vehical';
import Login from './Garage/Technician/Login';
import Home from './Garage/Home';
import Csignup from './Garage/Customer/Csignup';
import Clogin from './Garage/Customer/Clogin';
import Appointment from './Garage/Appointment';
import Technician from './Garage/Technician/Technician';
import Service from './Garage/Technician/Service';
import Invoice from './Garage/Invoice';
import Cprotect from './Garage/protector/Cprotect';
import Footer from './Garage/Footer';
import About from './Garage/About';
import Tprotect from './Garage/protector/Tprotect';
import Protect from './Garage/protector/Protect';
import Contact from './Garage/Contact';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          {/* home page */}
          <Route exact path="/">
            <Home></Home>
          </Route>


          {/* technician page */}
          <Route path="/technician">
            <Technician></Technician>
          </Route>

          <Route path="/technician-signup">
            <Signup></Signup>
          </Route>

          <Route path="/technician-login">
            <Login></Login>
          </Route>

          {/* serivce page */}
          <Route path="/service">
            <Tprotect>
              <Service></Service>
            </Tprotect>
          </Route>


          {/* customer page*/}
          <Route path="/customer-signup">
            <Csignup></Csignup>
          </Route>

          <Route path="/customer-login">
            <Clogin></Clogin>
          </Route>


          {/* vehical page */}
          <Route path="/vehical">
            <Cprotect>
              <Vehical></Vehical>
            </Cprotect>
          </Route>


          {/* appoinment page */}
          <Route path="/appoinment">
            <Appointment></Appointment>
          </Route>

          {/* invoice page */}
          <Route path="/invoice">
            <Invoice></Invoice>
          </Route>

          <Route path="/about-us">
            <About></About>
          </Route>

          {/* <Route path="/contact">
            <Contact></Contact>
          </Route> */}

        </Switch>
        <Footer />
      </Router>
    </div >
  );

}
export default App;


// Tech login  ->  technicain page -> add Service -> service -> Home add card click -> customer login -> vehical -> appointment -> home

//  Appointment -> technicain page  card appointment no -> appoinment card click -> invoice -> home. 


// https://ld-wp73.template-help.com/wordpress/prod_11656/v4/car-repair/#