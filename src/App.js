import {Route} from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail';

function App() {
  //we use Route as a normal component.
  /*Using Route will allow us to load different pages according to the path we choose.
    our-domain.com/welcome  will load the welcome page for example.
  */

  /*Using dynamic routes is done using colons.
    our-domain.com/product-details/<idHere>  will load the welcome page for example.
  */
  

  return (
    <div>
      <MainHeader/>
      <main>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail/>
        </Route>

        <p>Here we have two paths: welcome and products. <br/> It doesn't render a different page. <br/>It just renders the component into this existing page according to the chosen path</p>
        
      </main>
    </div>
    
  );
}

export default App;
