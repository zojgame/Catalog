import styles from "./styles.module.css";

const SizesComponent = ({
  selectedColor,
  sizes,
  selectedSize,
  handleSizeClick,
}) => {
  return (
    <div className={styles.sizesContainer}>
      <div className={styles.title}>Выберите размер</div>
      <div className={styles.sizes}>
        {sizes?.map((size) => {
          const isEnabled = selectedColor?.sizes?.includes(size.id);

          return (
            <div
              className={`${styles.size} ${
                selectedSize?.id === size.id ? styles.selectedSize : ""
              }
            
            ${isEnabled ? "" : styles.disabledSize}`}
              key={size.id}
              onClick={handleSizeClick(size, isEnabled)}
            >
              {size.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { SizesComponent };
