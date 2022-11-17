import {useParams} from 'react-router-dom'

const ProductDetail = () =>{
    const params = useParams();

    return (
        <section>
            <h2>Product Details here</h2>
            <h3>{params.productId}</h3>
        </section>
    );
}

export default ProductDetail;