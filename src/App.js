

import Header from './components/Header/Header';
import SliderImages from './components/sliderImages';
 import CardSlider from './components/CardSlider';
 import Premiere from './components/premiere';
 import Footer from './components/Footer';
//  import AllMovies from './components/AllMovies';
 import Allmoviesfetch from './components/allmoviesfetch';
 
import './App.css';
import Registration from './components/Registration';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    
   /* <Header/>
   <SliderImages/>
   <CardSlider/>
   <Premiere/>
   <Footer/> */

<Router>
<div>
  <Header/>
  <Switch>
    <Route exact path="/" >

      <SliderImages/>
      <CardSlider/>
      <Premiere/>
    </Route>

    <Route exact  path="/movies">
       <Allmoviesfetch/>
    </Route>

    <Route exact  path="/register">
       <Registration/>
    </Route>

  </Switch>

  <Footer/>

</div>

</Router>

    
  );
}

export default App;
