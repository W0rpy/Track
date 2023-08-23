import styles from './PageContainer.module.css';

interface IPageContainerProps {
  children: React.ReactNode;
}

function PageContainer({children}: IPageContainerProps) {
  return <div className={styles.Container}>{children}</div>;
}
export default PageContainer;
