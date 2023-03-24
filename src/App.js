import logo from './logo.svg';
import './App.css';
import { Home } from './home';
import Navbar from './component/navbar';
import { Router } from './component/router';
import { Footer } from './component/footer';

function App() {
  return (
    <div >
      <Navbar/>
<Router/>
<Footer/>
    </div>
  );
}

export default App;
