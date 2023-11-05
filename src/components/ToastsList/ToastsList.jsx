import { ToastComponent } from "..";
import styles from "./styles.module.css";

const ToastListComponent = ({ removeToast, data }) => {
  return (
    data.length > 0 && (
      <div className={`${styles.toastList} ${styles.toastListTopRight}`}>
        {data.map((toast) => (
          <ToastComponent
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    )
  );
};

export { ToastListComponent };
