import classes from './CartButton.module.css';
import {useSelector, useDispatch} from 'react-redux'
import {uiActions } from '../../store/ui';


 
const CartButton = (props) => {

  const itemsInCart = useSelector(state => state.cart.totalItems)
   const dispatch = useDispatch()

  return (
    <button className={classes.button} onClick = {()=> dispatch(uiActions.toggleCart())}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
};

export default CartButton;
