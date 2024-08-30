import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./styles.module.css";
import { useProducts } from "../../hooks";
import useCatalog from "../../store/useCatalog";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const { basketItems, setBasketItems } = useCatalog();

  const [products] = useProducts();
  useEffect(() => {
    setBasketItems(products);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <nav className={styles.navigation}>
          <div className={styles.link} onClick={() => navigate("../")}>
            Главная <HomeOutlined />
          </div>
        </nav>
        <div className={styles.link} onClick={() => navigate("../basket")}>
          Корзина <ShoppingCartOutlined />
          <div className={styles.itemsCount}>{basketItems.length}</div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export { HeaderComponent };
