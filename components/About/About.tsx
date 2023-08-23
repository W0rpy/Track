import Image from 'next/image';

import PageContainer from '../PageContainer/PageContainer';
import Anchor from '../Anchor/Anchor';

import illustration_2 from './../../public/images/illustration_2.png';

import styles from './About.module.css';

function About() {
  return (
    <section className={styles.About}>
      <PageContainer>
        <div className={styles.AboutBlock}>
          <div className={styles.AboutImage}>
            <Image src={illustration_2} alt='Women and moon' className={styles.Illustration} />
          </div>
          <div className={styles.AboutContent}>
            <Anchor text='About us' sectionId='aboutus' />
            <h3>Faster, friendlier feedback loops make life easier.</h3>
            <p className={styles.AboutDescription}>
              Add a Viewer to your team so they can see everything you share, or invite people to individual documents.
              Its up to you. Stakeholders can check out designs in their web browser, test prototypes and leave feedback
              for free.
            </p>
            <ul className={styles.AboutList}>
              <li className={styles.AboutItem}>Shared Cloud Libraries, for a single source of truth</li>
              <li className={styles.AboutItem}>Prototype previews for user testing and research</li>
              <li className={styles.AboutItem}>Easy organization with projects</li>
              <li className={styles.AboutItem}>Free developer handoff, right inside the browser</li>
              <li className={styles.AboutItem}>Two-factor authentication and SSO</li>
            </ul>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
export default About;
