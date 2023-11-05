import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct, getSizes } from "../../mock/api";
import { useToast } from "../../hooks";
import {
  CarouselComponent,
  BasketButtonComponent,
  SizesComponent,
  ColorsComponent,
  ToastListComponent,
} from "../../components";
import { PriceUI } from "../../ui";
import styles from "./styles.module.css";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { showToast, toasts, removeToast } = useToast();
  const [sizes, setSizes] = useState();

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
      setSelectedColor(data?.colors[0]);
    });
    getSizes().then((data) => setSizes(data));
  }, []);

  const handleColorClick = (color) => {
    return () => {
      setSelectedColor(color);
    };
  };

  const handleSizeClick = (size, isEnabled) => {
    return () => {
      if (isEnabled) {
        setSelectedSize(size);
      }
    };
  };

  return (
    <div className={styles.detailPage}>
      <ToastListComponent removeToast={removeToast} data={toasts} />
      <div className={styles.itemInfoContainer}>
        <CarouselComponent
          images={selectedColor?.images}
          name={selectedColor?.name}
        />
        <div className={styles.infoContainer}>
          <div className={styles.title}>{product?.name}</div>
          <div className={styles.itemDescription}>
            {selectedColor?.description}
          </div>
          <div className={styles.characteristicContainer}>
            <ColorsComponent
              selectedColor={selectedColor}
              colors={product?.colors}
              handleColorClick={handleColorClick}
            />
            <SizesComponent
              selectedColor={selectedColor}
              sizes={sizes}
              selectedSize={selectedSize}
              handleSizeClick={handleSizeClick}
            />
          </div>

          <BasketButtonComponent
            showToast={showToast}
            product={product}
            selectedSize={selectedSize}
            color={selectedColor}
          />

          <PriceUI price={selectedColor?.price} />
        </div>
      </div>
    </div>
  );
};
export { DetailPage };
