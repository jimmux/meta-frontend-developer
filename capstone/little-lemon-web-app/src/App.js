import { BrowserRouter } from "react-router";
import './App.css';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
