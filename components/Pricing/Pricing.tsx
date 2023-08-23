import Image from 'next/image';

import PageContainer from '../PageContainer/PageContainer';

import Anchor from '../Anchor/Anchor';
import Card from '../Card/Card';

import {card_1, card_2, card_3} from './../../utils/cardsItems';
import illustration from './../../public/images/illustration_4.png';

import styles from './Pricing.module.css';

function Pricing() {
  return (
    <section className={styles.Pricing}>
      <PageContainer>
        <div className={styles.PricingBlock}>
          <div className={styles.PricingBody}>
            <div className={styles.PricingImage}>
              <Image src={illustration} alt='Illustration' className={styles.Illustration} />
            </div>
            <div className={styles.PricingContent}>
              <Anchor sectionId='pricing' text='Pricing' />
              <h3>Select a membership level the right price for you.</h3>
              <p className={styles.PricingText}>
                Prices listed in USD. Taxes may apply. By using program you agree to our terms and policies.
              </p>
            </div>
          </div>
          <div className={styles.PricingCards}>
            <Card price='49' title='A pay-once license, just for you' items={card_1} />
            <Card price='99' title='Pro account, just for you' items={card_2} />
            <Card price='299' title='A subscription for the whole team' items={card_3} />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
export default Pricing;
