import { DeleteOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { useProducts, useToast } from "../../hooks";
import { ToastListComponent } from "../../components";
import useCatalog from "../../store/useCatalog";

const BasketPage = () => {
  const [products, _, deleteProducts] = useProducts();
  const { deleteBasketItem } = useCatalog();
  const { showToast, toasts, removeToast } = useToast();

  const wholePrice = products.reduce(
    (acc, cur) => parseFloat(cur.price) + acc,
    0
  );

  const handleDeleteProduct = (product) => {
    return () => {
      showToast("Товар успешно удалён");
      deleteProducts(product);
      deleteBasketItem(product);
    };
  };

  return (
    <div className={styles.itemsContainer}>
      {products.map((product) => {
        const id = `${product.id}${product.colorId}${product.size.id}`;
        const imagePath = `${product?.images?.[0]}`;

        return (
          <div key={id} className={styles.item}>
            <ToastListComponent removeToast={removeToast} data={toasts} />
            <div title={product?.name}>
              <img
                src={imagePath}
                alt={product?.name}
                className={styles.image}
              />
            </div>
            <div title="Название">{product?.name}</div>
            <div title="Размер">{product?.size?.label}</div>
            <div title="Цена">{product?.price} $</div>
            <div
              className={styles.deleteButton}
              title="Удалить"
              onClick={handleDeleteProduct(product)}
            >
              <DeleteOutlined />
            </div>
          </div>
        );
      })}
      <div className={styles.wholePrice}>{`Итого: ${wholePrice} $`}</div>
    </div>
  );
};
export { BasketPage };
