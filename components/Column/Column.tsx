import Image from 'next/image';

import styles from './Column.module.css';

interface IColumnProps {
  src: string;
  title: string;
  subtitle: string;
}

function Column({src, title, subtitle}: IColumnProps) {
  return (
    <div className={styles.Column}>
      <div className={styles.ColumnImage}>
        <Image src={src} alt='Column image' className={styles.Icon} />
      </div>
      <div className={styles.ColumnBody}>
        <h4 className={styles.ColumnTitle}>{title}</h4>
        <p className={styles.ColumnText}>{subtitle}</p>
      </div>
    </div>
  );
}
export default Column;
