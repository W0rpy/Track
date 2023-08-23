'use client';

import {useState} from 'react';

import Image from 'next/image';

import Anchor from '../Anchor/Anchor';
import PageContainer from '../PageContainer/PageContainer';
import Question from '../Question/Question';

import illustration from '././../../public/images/illustration_5.png';

import styles from './Questions.module.css';

function Questions() {
  const [openQuestion, setOpenQuestion] = useState(1);
  const toggleQuestion = (id: number) => () => {
    if (id === openQuestion) {
      return setOpenQuestion(0);
    }
    setOpenQuestion(id);
  };

  return (
    <section className={styles.Questions}>
      <PageContainer>
        <div className={styles.QuestionsBlock}>
          <div className={styles.QuestionsContent}>
            <Anchor sectionId='faqs' text='Faqs' />
            <h3>Common Questions.</h3>
            <p className={styles.QuestionsSubtitle}>
              The online form also provides links to a set of frequently asked questions, other information materials
              related to the financial disclosure programme.
            </p>
            <div className={styles.QuestionsFaqs}>
              <Question
                isOpen={openQuestion === 1}
                onOpen={toggleQuestion(1)}
                title='How much does a Teams subscription cost?'
                description='Contributors are members of your team who need access to use 
                  the Mac app to create and edit Sketch documents. These prices dont include sales 
                  tax, which may still apply. Head over to our pricing page to get full details.'
              />
              <Question
                isOpen={openQuestion === 2}
                onOpen={toggleQuestion(2)}
                title='Do I still need to purchase licenses for the Mac app?'
                description='Contributors are members of your team who need access to use 
                  the Mac app to create and edit Sketch documents. These prices dont include sales 
                  tax, which may still apply. Head over to our pricing page to get full details.'
              />
              <Question
                isOpen={openQuestion === 3}
                onOpen={toggleQuestion(3)}
                title='What are the differences between Contributors and Viewers?'
                description='Contributors are members of your team who need access to use 
                  the Mac app to create and edit Sketch documents. These prices dont include sales 
                  tax, which may still apply. Head over to our pricing page to get full details.'
              />
              <Question
                isOpen={openQuestion === 4}
                onOpen={toggleQuestion(4)}
                title='How long does the free Teams subscription trial last?'
                description='Contributors are members of your team who need access to use 
                  the Mac app to create and edit Sketch documents. These prices dont include sales 
                  tax, which may still apply. Head over to our pricing page to get full details.'
              />
              <Question
                isOpen={openQuestion === 5}
                onOpen={toggleQuestion(5)}
                title='Will program for Teams replace volume licensing?'
                description='Contributors are members of your team who need access to use 
                  the Mac app to create and edit Sketch documents. These prices dont include sales 
                  tax, which may still apply. Head over to our pricing page to get full details.'
              />
            </div>
          </div>
          <div className={styles.QuestionsImage}>
            <Image src={illustration} className={styles.Image} alt='Man and Giraffe' />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
export default Questions;
