// import header component
import Header from '../Header/Header';
// import FilterMenu component
import FilterMenu from '../FilterMenu/FilterMenu';
// import footer component
import Footer from '../Footer/Footer';



// import scss
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <FilterMenu />
      <Footer />
    </div>
  );
}

export default App;
