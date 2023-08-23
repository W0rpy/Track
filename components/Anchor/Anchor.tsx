import styles from './Anchor.module.css';

interface IAnchorProps {
  sectionId: string;
  text: string;
}

function Anchor({sectionId, text}: IAnchorProps) {
  return (
    <div id={sectionId} className={styles.Anchor}>
      {text}
    </div>
  );
}
export default Anchor;
