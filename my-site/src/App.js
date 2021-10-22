import logo from './logo.svg';
import './App.css';
import MyHeader from './components/myHeader/myHeader';
import Cards from './components/cards/cards';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <MyHeader/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
