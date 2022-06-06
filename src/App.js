import React from 'react';
import { Navibar } from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import { Home } from './Home';
import { Album } from './Album';
import { About } from './About';
import { Footer } from './components/Footer';

function App() {
  return (
 <div class="container">
 <Router>
<Navibar/>
<Routes >
  <Route path='/home' element={<Home/>}/>
  <Route path='/album'element={<Album/>}/>
  <Route path='/about'element={<About/>}/>
</Routes >
</Router>
<Footer/>
 </div>
  );
}

export default App;
