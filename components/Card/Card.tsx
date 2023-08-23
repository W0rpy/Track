import styles from './Card.module.css';

export type CardItem = {
  id: number;
  text: string;
};

interface ICardProps {
  price: string;
  title: string;
  items: CardItem[];
}

function Card({price, title, items}: ICardProps) {
  return (
    <div className={styles.Card}>
      <div className={styles.CardBody}>
        <div className={styles.CardPrice}>
          <div className={styles.Dollar}>$</div>
          <div className={styles.Number}>{price}</div>
          <div className={styles.PerMonth}>
            <div className={styles.PerMonthDesktop}>per month</div>
            <div className={styles.PerMonthHidden}>/mo</div>
          </div>
        </div>
        <h5 className={styles.CardTitle}>{title}</h5>
        <div className={styles.CardListContent}>
          <ul className={styles.CardList}>
            {items.map((item: CardItem) => (
              <li className={styles.CardItem} key={item.id}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.CardButton}>
        <button className={styles.ButtonJoin}>Join</button>
      </div>
    </div>
  );
}
export default Card;
