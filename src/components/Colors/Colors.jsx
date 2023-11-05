import styles from "./styles.module.css";

const ColorsComponent = ({ selectedColor, colors, handleColorClick }) => {
  return (
    <div className={styles.colorsContainer}>
      <div className={styles.title}>Выберите цвет</div>
      <div className={styles.colors}>
        {colors?.map((color) => (
          <div
            className={`${styles.color} ${
              selectedColor?.id === color.id ? styles.selectedColor : ""
            }`}
            key={color.id}
            onClick={handleColorClick(color)}
          >
            {color.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export { ColorsComponent };
