import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsync } from "./productsSlice";
import '../products/Card.css';
import { addAsync } from '../cart/cartSlice';

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  return (
    <>
      <button onClick={() => dispatch(fetchAsync())}>Fetch Products</button>
      {products.map(product => (
        <div className="card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
          <h1>{product.title}</h1>
          <p className="price">{product.price}</p>
          <p>{product.description}</p>
          <p>
            <button onClick={()=>dispatch(addAsync(product ))}>Add to Cart</button>
          </p>
        </div>
      ))}
    </>
  );
}
