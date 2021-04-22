import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const product_list = [
  {
    id: 1,
    title: " Produtct 1",
    price: 9,
    description: "a really goof product!",
    quantity: 1,
  },
  {
    id: 2,
    title: " Produtct 2",
    price: 4,
    description: "a really goof product!",
    quantity: 1,
  },
  {
    id: 3,
    title: " Produtct 3",
    price: 7,
    description: "a really goof product!",
    quantity: 1,
  },
  {
    id: 4,
    title: " Produtct 4",
    price: 6,
    description: "a really goof product!",
    quantity: 1,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {product_list.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.description}
            quantity = {1}
            id={item.id}
            key={item.id}
            />
        ))}
      </ul>
    </section>
  );
};

export default Products;
