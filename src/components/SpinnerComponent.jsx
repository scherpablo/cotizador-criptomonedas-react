import styles from "./Spinner.module.css"

const SpinnerComponent = () => {
  return (
    <>
      <div>
        <div className={styles['sk-chase']}>
          <div className={styles['sk-chase-dot']}></div>
          <div className={styles['sk-chase-dot']}></div>
          <div className={styles['sk-chase-dot']}></div>
          <div className={styles['sk-chase-dot']}></div>
          <div className={styles['sk-chase-dot']}></div>
          <div className={styles['sk-chase-dot']}></div>
        </div>
      </div>
    </>
  );
};

export default SpinnerComponent;
