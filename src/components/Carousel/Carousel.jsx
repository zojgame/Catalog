import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { ITEM_WIDTH } from "../../const";
import styles from "./styles.module.css";

const CarouselComponent = ({ images, name }) => {
  const [offset, setOffset] = useState(0);
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      if (currentOffset > (images.length - 1) * ITEM_WIDTH * -1) {
        const updatedOffset = currentOffset - ITEM_WIDTH;
        return updatedOffset;
      } else {
        return currentOffset;
      }
    });
  };
  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      if (currentOffset < 0) {
        const updatedOffset = currentOffset + ITEM_WIDTH;
        return updatedOffset;
      } else {
        return currentOffset;
      }
    });
  };

  return (
    <div className={styles.container}>
      <LeftOutlined className={styles.arrow} onClick={handleLeftArrowClick} />
      <div className={styles.window}>
        <div
          className={styles.itemsContainer}
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {images?.map((image) => {

            return (
              <div className={styles.imageContainer} key={image}>
                <img className={styles.image} src={image} alt={name} />
              </div>
            );
          })}
        </div>
      </div>
      <RightOutlined className={styles.arrow} onClick={handleRightArrowClick} />
    </div>
  );
};
export { CarouselComponent };
