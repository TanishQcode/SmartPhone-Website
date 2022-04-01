import "./App.css";
import Navbar1 from "./components/Navbar1.js";
import Navbar0 from "./components/Navbar0.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import pkg from "./data/data.json";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import NavSlide from './components/NavSlide.js';











function App() {
  return (
    <Router>
      <Navbar1 />
      <Navbar0 />

      <NavSlide miPhones={pkg.miPhones}  redmiPhones={pkg.redmiPhones} tv={pkg.tv} laptop={pkg.laptop} fitnessAndLifeStyle={pkg.fitnessAndLifeStyle} home={pkg.home} accessories={pkg.accessories} audio={pkg.audio}/>

      <Slider start={pkg.banner.start} />
      <Offers offer={pkg.offer} />

      <Heading text="START PRODUCTS" />
      <StarProduct starProduct={pkg.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Route exact path="/music">
         <HotAccessories music={pkg.hotAccessories.music} musicCover={pkg.hotAccessoriesCover.music}/>
      </Route>
     
      <Route exact path="/smartDevice">
         <HotAccessories smartDevice={pkg.hotAccessories.smartDevice} smartDeviceCover={pkg.hotAccessoriesCover.smartDevice}/>
      </Route>
     
      <Route exact path="/home">
         <HotAccessories home={pkg.hotAccessories.home} homeCover={pkg.hotAccessoriesCover.home}/>
      </Route>
     
      <Route exact path="/lifeStyle">
         <HotAccessories lifeStyle={pkg.hotAccessories.lifeStyle} lifeStyleCover={pkg.hotAccessoriesCover.lifeStyle}/>
      </Route>
     
      <Route exact path="/mobileAccessories">
         <HotAccessories mobileAccessories={pkg.hotAccessories.mobileAccessories} mobileAccessoriesCover={pkg.hotAccessoriesCover.mobileAccessories}/>
      </Route>
     <Heading text="PRODUCT REVIEWS"/>
     
     <ProductReviews productReviews={pkg.productReviews}/>
     
     <Heading text="Videos"/>
     <Videos videos={pkg.videos}/>

     <Heading text="IN THE PRESS"/>
      <Banner banner={pkg.banner}/>

     <Footer footer={pkg.footer} /> 

    </Router>

  );
}
export default App;
