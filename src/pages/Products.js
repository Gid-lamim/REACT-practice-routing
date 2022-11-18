import { Link } from "react-router-dom";

const Products = () => {
    return( 
        <section>
                <h1>This is the Products page</h1>

                <ul>
                    <li><Link to='/products/p1'>old Books</Link></li>
                    <li><Link to='/products/p2'>Old screen door</Link></li>
                    <li><Link to='/products/p3'>Used toilet paper</Link></li>
                </ul>
        </section>
    );


};

export default Products;