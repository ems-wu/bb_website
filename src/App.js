import logo from './images/logo.png';
import header_girl from './images/header_girl.jpg'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Cards from './Cards';
import Tools from './Tools';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <img src={header_girl} alt="header_image" />
        <h1> Welcome, B.B.!</h1>
        <p>
          Join Us!
        </p>
        <Header />
        <MainContent />
        <Cards />
        <Tools />
        <Footer />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
