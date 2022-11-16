import {Route} from 'react-router-dom';

import Welcome from './components/Welcome'
import Products from './components/Products'

function App() {
  //we use Route as a normal component.
  /*Using Route will allow us to load different pages according to the path we choose.
    our-domain.com/welcome  will load the welcome page for example.
  */

  

  return (
    <div>
      <header></header>
      <main>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
        <p>Here we have two paths: welcome and products. <br/> It doesn't render a different page. <br/>It just renders the component into this existing page according to the chosen path</p>
        <a href="/welcome">welcome</a>
        <br/>
        <a href="/products">products</a>
      </main>
    </div>
    
  );
}

export default App;
