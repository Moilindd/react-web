import React from 'react';
import {Routes,Route} from 'react-router-dom'
import About from './routes/About';

import Home from './routes/Home';
import Speakers from './routes/Speakers';
import Talks from './routes/Talks';
import Team from './routes/Team';
function App() {
    return ( <>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/talks' element = {<Talks/>} />
        <Route path = '/team' element = {<Team/>} />
        <Route path = '/speakers' element = {<Speakers/>} />
        <Route path = '/about' element = {<About/>} />
      </Routes>
        </>
    );
}

export default App;