import './App.css';
import { BrowserRouter } from 'react-router-dom'

//importing components
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Filter from './components/Filter';
// import Login from './components/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Filter />
        <Body />
        {/* <Login /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
