import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Header from "./pages/Header/Header.jsx";
import PageRoutes from "./routes/PageRoutes.jsx";
import React, {Fragment} from "react";

function App() {
  return (
      <BrowserRouter>
          <Fragment>
              <Header />
              <PageRoutes/>
          </Fragment>
      </BrowserRouter>
  )
}

export default App
