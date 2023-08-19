import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUS';

function App() {
  return (



<Router>

<Routes>
 <Route path="/" element={<Homepage />} />
 <Route path="/about-us" element={<AboutUs />} />

</Routes>

</Router>
  );
}

export default App;
