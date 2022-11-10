import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1' , price:6, title: 'My First Book', description: 'My First Book i ever wrote' },
  { id: 'p2' , price:8, title: 'My Second Book', description: 'My Second Book i ever wrote' },
  { id: 'p3' , price:10, title: 'My Third Book', description: 'My Third Book i ever wrote' },
  { id: 'p4' , price:12, title: 'My Fourth Book', description: 'My Fourth Book i ever wrote' }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
          <ProductItem
          key = {product.id}
          id = {product.id}
          title = {product.title}
          price= {product.price}
          description= {product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
