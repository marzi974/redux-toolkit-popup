import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import {useDispatch} from 'react-redux'
import {uiActions} from '../../store/ui'


const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
 const dispatch = useDispatch()

  return (
    <Modal>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {items.map((product) => (
            <CartItem item={product} />
          ))}
        </ul>
        <button onClick={()=>dispatch(uiActions.toggleCart())}>X</button>
      </Card>
    </Modal>
  );
};


export default Cart;
