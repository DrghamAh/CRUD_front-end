import './App.css';
import Header from './components/layouts/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
      <ProductList />
      </div>
    </div>
  );
}

export default App;
