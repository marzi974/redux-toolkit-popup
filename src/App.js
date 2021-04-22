import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const showCart = useSelector(state => state.ui.showCart);
console.log('showcart:'+ showCart)
  useEffect(() => {
    const sendCart = async () => {
      const response = await fetch(
        "https://redux-test-be8e9-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Ça n'a pas marché...");
      }

      const responseData = await response.json();
      console.log(responseData);
    };

    try {
      sendCart();
    } catch (error) {


    }
  }, [cart]);

  return (
    <Layout>
      { showCart && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
