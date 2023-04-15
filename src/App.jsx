import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/Pages/Login/Login";
import Dashboard from "@/Pages/Dashboard/Dashboard";
import Navbar from "@/Components/Navbar";
import Receive from "@/Pages/Receive/Receive";
import ReceiveEdit from "@/Pages/Receive/Edit/ReceiveEdit";
import ReceiveAdd from "@/Pages/Receive/Add/ReceiveAdd";
import AuthMiddleware from "@/Components/AuthMiddleware";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <AuthMiddleware>
              <Navbar>
                <Dashboard />
              </Navbar>
            </AuthMiddleware>
          }
        />
        <Route
          path="/receive"
          element={
            <AuthMiddleware>
              <Navbar>
                <Receive />
              </Navbar>
            </AuthMiddleware>
          }
        />
        <Route
          path="/receive/edit"
          element={
            <AuthMiddleware>
              <Navbar>
                <ReceiveEdit />
              </Navbar>
            </AuthMiddleware>
          }
        />
        <Route
          path="/receive/add"
          element={
            <AuthMiddleware>
              <Navbar>
                <ReceiveAdd />
              </Navbar>
            </AuthMiddleware>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
