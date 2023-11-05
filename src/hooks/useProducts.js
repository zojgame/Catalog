import { useStorage } from "./useStorage";

function useProducts() {
  const [products, setProducts] = useStorage("products", []);

  const addProduct = (value) => {
    const updatedProducts = [...products, value];
    setProducts(updatedProducts);
  };

  const deleteProduct = (value) => {
    const updatedProducts = products.filter(
      (product) =>
        !(
          product.id === value.id &&
          product.size.id === value.size.id &&
          product.colorId === value.colorId
        )
    );
    setProducts(updatedProducts);
  };

  return [products, addProduct, deleteProduct];
}

export { useProducts };
