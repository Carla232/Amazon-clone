import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from './Orders';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Slideshow from "./Slideshow";
import Address from "./Address";

const promise = loadStripe('pk_test_51IlrtoCye0EGgdpU741aXIQsNeYGGFLs1dgNK1v9JPmaOq1nyUiqd6YxBb5Y9Bl3EHueCUUztQ3esDYCwFgx91Ms00f7kzKygE');

function App() {
const[{},dispatch] = useStateValue();
useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>> ', authUser);
    if(authUser){
    // the user just logged in / the user was logged in
    dispatch({
      type: 'SET_USER',
      user: authUser
    })
  }else{
    // the user is logged out
    dispatch({
      type: 'SET_USER',
      user:null
    });
  }
  });
},[])

  return (
    // BEM
    <Router>
   <div className="app">
      <Switch>
      <Route path="/orders">
        <Header />
         <Orders />
        </Route>
        <Route path="/login">
         <Login />
        </Route>
        <Route path="/checkout">
      <Header />
      <Checkout />
      </Route>
      <Route path="/address">
      <Address />
      </Route>
      <Route path="/payment">
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
      </Route>
      <Route path="/">
     <Header />
     <Slideshow />
     <Home />
      </Route>
      </Switch>
       </div>
         </Router>
  );
}

export default App;
