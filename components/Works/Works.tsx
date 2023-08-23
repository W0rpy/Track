import Image from 'next/image';

import PageContainer from '../PageContainer/PageContainer';
import Anchor from '../Anchor/Anchor';
import Column from '../Column/Column';

import illustration_3 from './../../public/images/illustration_3.png';
import puzzle from './../../public/images/puzzle.svg';
import box from './../../public/images/box.svg';
import rocket from './../../public/images/rocket.svg';
import sheme from './../../public/images/sheme.svg';

import styles from './Works.module.css';

function Works() {
  return (
    <section className={styles.Works}>
      <PageContainer>
        <div className={styles.WorksBlock}>
          <div className={styles.WorksContent}>
            <Anchor text='How it works' sectionId='works' />
            <h3>Building the best space for collaboration.</h3>
            <div className={styles.WorksColumns}>
              <Column
                src={puzzle}
                title='Shared Cloud Libraries'
                subtitle='Navigate to the Your work panel in the left sidebar. Select the library you want to share. Select the Share icon in the upper right to share the library.'
              />
              <Column
                src={sheme}
                title='Free developer handoff, right inside'
                subtitle='Cloud Inspector makes it easy for developers to get the information they need to turn pixels into code — all in the browser and, most importantly, for free.'
              />
              <Column
                src={rocket}
                title='Real-time collaborative editing'
                subtitle='Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.'
              />
              <Column
                src={box}
                title='Integrations with the Cloud API'
                subtitle='Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration.'
              />
            </div>
          </div>
          <div className={styles.WorksImage}>
            <Image src={illustration_3} className={styles.Illustration} alt='woman and wrench' />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
export default Works;
