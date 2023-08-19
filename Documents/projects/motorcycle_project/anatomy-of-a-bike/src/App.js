import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, BikeModel, Repair, PlanTrip } from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<BikeModel/>}/>
        <Route path='/repair' exact element={ <Repair/> }/>
        <Route path='/plantrip' exact element={ <PlanTrip/> }/>
      </Routes>                         
    </BrowserRouter>
  );
}

export default App;
