import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Product
          id="12321341"
            title="Woman Evolve: Break Up with Your Fears and Revolutionize Your Life"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81kdGoWLFzS._AC_UL320_.jpg"
            rating={5}
          />
          <Product 
          id="49538094"
          title="1080P Web Camera, HD Webcam with Microphone & Privacy Cover, 2021 NexiGo N60 USB Computer Camera, 110-degree Wide Angle, Plug and Play, for Zoom/Skype/Teams/OBS, Conferencing and Video"
            price={39.99}
            image="https://m.media-amazon.com/images/I/51xRoLtOjgS._AC_UY218_.jpg"
            rating={4}/>
        </div>
        <div className="home__row">
          <Product
          id="4903850"
          title="Smart Watch for Women, AGPTEK IP68 Waterproof Smartwatch for Android and iOS Phones Activity Tracker with Full Touch Color Screen Heart Rate Monitor Pedometer Sleep Monitor, Pink"
            price={45.99}
            image="https://m.media-amazon.com/images/I/71JfGjxM5lL._AC_UY218_.jpg"
            rating={4} />
          <Product
          id="23445930" 
          title="All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Twilight Blue"
          price={49.99}
          image="https://m.media-amazon.com/images/I/71yEX4ugtJL._AC_UY218_.jpg"
          rating={4}/>
          <Product 
           id="3254354345"
          title="2020 Apple iPad (10.2-inch, Wi-Fi, 128GB) - Space Gray (8th Generation)"
          price={599.99}
          image="https://m.media-amazon.com/images/I/71gOkVA6-eL._AC_UY218_.jpg"
          rating={5}/>
        </div>
        <div className="home__row">
          <Product
          id="90829332"
          title="SAMSUNG LC34J791WTNXZA 34-Inch CJ791 Ultrawide Curved Gaming Monitor, White"
          price={649.99}
          image="https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_UY218_.jpg"
          rating={4} />
        </div>
      </div>
    </div>
  );
}

export default Home;
