import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Home2 from "./pages/homeA/HomeA";
import { hotelColumns, roomColumns, bookingsColumns } from "./DataTableSource";
import List2 from "./pages/listA/ListA";
import Listroom from "./pages/listrooms/ListB";
import ListC from "./pages/listBookngs/ListC";
import Single from "./pages/single/Single";

import {
  hotelInputs,
  roomInputs,
} from "./Form_Source";

import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import Register from "./pages/Register/Register";
import Appointments from "./pages/appointments/appointments";
import Payment from "./pages/payment/payment";

function App() {

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="adminhome"
          index
          element={
            <ProtectedRoute>
              <Home2 />
            </ProtectedRoute>
          }
        />
        <Route path="hotels">
          <Route
            index
            element={
              <ProtectedRoute>
                <List2 columns={hotelColumns} />
              </ProtectedRoute>
            }
          />
          <Route
            path=":productId"
            element={
                <Hotel />
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <NewHotel inputs={hotelInputs} title="Add New Hotel" />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="rooms">
          <Route
            index
            element={
              <ProtectedRoute>
                <Listroom columns={roomColumns} />
              </ProtectedRoute>
            }
          />
          <Route
            path=":productId"
            element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <NewRoom inputs={roomInputs} title="Add New Room" />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="Bookings">
          <Route
            index
            element={
              <ProtectedRoute>
                <ListC columns={bookingsColumns} />
              </ProtectedRoute>
            }
          />
          <Route
            path=":productId"
            element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <NewRoom inputs={roomInputs} title="Add New Room" />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/hotel"
          element={
            
              <List />
    
          }
        />

        <Route
          path="/hotels/:id"
          element={
            
              <Hotel />
            
          }
        />
        <Route
          path="/appoinment"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />
        <Route path="/payment" element={
            <ProtectedRoute>
            <Payment />
            </ProtectedRoute>}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
