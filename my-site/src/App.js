import logo from './logo.svg';
import './App.css';
import MyHeader from './components/myHeader/myHeader';
import MySkills from './components/mySkills/mySkills';
import Cards from './components/cards/cards';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <MyHeader/>
      <MySkills/>
      <h1 class = "title">My Projects</h1>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
