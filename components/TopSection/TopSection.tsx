import Image from 'next/image';

import PageContainer from '../PageContainer/PageContainer';
import Form from '../Form/Form';

import illustration from './../../public/images/illustration_1.png';
import mc from './../../public/images/mc.svg';
import paypal from './../../public/images/paypal.svg';
import visa from './../../public/images/visa.svg';

import styles from './TopSection.module.css';

function TopSection() {
  return (
    <section className={styles.TopSection}>
      <PageContainer>
        <div className={styles.TopSectionBlock}>
          <div className={styles.TopSectionTrack}>
            <h2 className={styles.TopSectionTitle}>Always Track & Analyze Your Business Statistics To Succeed.</h2>
            <p className={styles.TopSectionSubtitle}>
              A better way to manage your sales, team, clients & marketing — on a single platform. Powerful, affordable
              & easy.
            </p>
            <div className={styles.TopSectionForm}>
              <Form />
            </div>
            <div className={styles.TopSectionPictures}>
              <Image src={visa} alt='Visa' />
              <Image src={mc} alt='Mastercard' />
              <Image src={paypal} alt='PayPal' />
            </div>
          </div>
          <div className={styles.TopSectionImage}>
            <Image src={illustration} alt='Illustration' className={styles.Illustration} />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
export default TopSection;
