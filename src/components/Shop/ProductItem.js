import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../store/cart'


const ProductItem = (props) => {
  const { title, price, description, id,quantity } = props;

const dispatch = useDispatch()

  const addToCart = ()=> {
    
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick ={() => dispatch(cartActions.addItemsToCart({ title, price, description, id,quantity } ))}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
