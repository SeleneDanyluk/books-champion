import { useState } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router";
import NotFound from "./components/notFound/NotFound";
import Login from "./components/login/Login";
import Protected from "./components/protected/Protected";
import MainLayout from "./components/mainLayout/MainLayout"


function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<Protected isLogged={isLogged} />}>
              <Route path="/libros/*" element={<Dashboard />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
