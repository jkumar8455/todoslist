// import logo from './logo.svg';
import './App.css';
import { Header } from "./myComponents/Header"
import { Todos } from "./myComponents/Todos"
import { Footer } from "./myComponents/Footer"
import { About } from './myComponents/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Header title="TodosList" searchBar={false} />
        <Footer />
        <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<Todos/>}>
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
