import { useEffect } from "react";
import { getProducts } from "../../mock/api";
import { ProductCardComponent } from "../../components/";
import useCatalog from "../../store/useCatalog";
import styles from "./styles.module.css";

const CatalogPage = () => {
  const { setProducts, products } = useCatalog();
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className={styles.catalog}>
      {products.map((product) => (
        <ProductCardComponent product={product} key={product.id} />
      ))}
    </div>
  );
};
export { CatalogPage };
