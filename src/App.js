import {Route, Switch} from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail';

function App() {
  //we use Route as a normal component.
  /*Using Route will allow us to load different pages according to the path we choose.
    our-domain.com/welcome  will load the welcome page for example.

    Routing issue:  if you have a path that matches another path, two pages will render together on the same page.
      <Route path="/products">
            <Products/>
      </Route>
      <Route path="/products/:productId">
            <ProductDetail/>
      </Route>
    if we type our-domain.com/products/p1, for example, both Products and ProductDetail will render.

  */

  /*Using dynamic routes is done using colons.
    our-domain.com/product-details/<idHere>  will load the welcome page for example.
  
  
  
  */
  
  

  return (
    <div>
      <MainHeader/>
      <main>
        <Switch>
            <Route path="/welcome">
              <Welcome/>
            </Route>
            <Route path="/products" exact>
              <Products/>
            </Route>
            <Route path="/products/:productId" exact>
              <ProductDetail/>
            </Route>
        </Switch>
        
      </main>
    </div>
    
  );
}

export default App;
