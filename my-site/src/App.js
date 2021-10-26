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
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
