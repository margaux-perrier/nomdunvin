//import header
import Header from '../Header/Header';
//import burger
import Burger from '../FilterMenu/FilterMenu';
// import de cardList
import CardList from '../CardList/CardList';

// import Footer component
import Footer from '../Footer/Footer';
// import scss
import './app.scss';

function App() {
  return (
    <div className = "App">
      <Header />
      <div className="container">
         <Burger />
         <CardList />
        </div>
      <Footer />
    </div>

  );
}

export default App;
