import styles from "./styles.module.css";
import { CloseOutlined } from "@ant-design/icons";

const ToastComponent = ({ message, onClose }) => {
  return (
    <div className={styles.toast}>
      <div className={styles.toastMessage}>
        <p>{message}</p>
      </div>
      <button className={styles.toastCloseBtn} onClick={onClose}>
        <span className={styles.icon}>
          <CloseOutlined />
        </span>
      </button>
    </div>
  );
};
export { ToastComponent };
