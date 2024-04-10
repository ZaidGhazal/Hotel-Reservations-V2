import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { SignIn } from './pages/Login';

import Home from './pages/Home';
import HotelBooking from './pages/MyBookings';
import Payment from './pages/Payment';

function App() {
  return (
      <>
          {/* This is the alias of BrowserRouter i.e. Router */}
          <Router>
              <Routes>
                  {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
                  <Route
                      exact
                      path="/"
                      element={<SignIn />}
                  />

                  {/* This route is for about component 
        with exact path "/about", in component 
        props we passes the imported component*/}
                  <Route
                      path="/home"
                      element={<Home />}
                  />

                  <Route  
                      path="/book"
                      element={<Payment />}
                  />

                  <Route  
                      path="/mybookings"
                      element={<HotelBooking />}
                  />

                  <Route
                      path="*"
                      element={<Navigate to="/" />}
                  />
              </Routes>
          </Router>
      </>
  );
}

export default App;