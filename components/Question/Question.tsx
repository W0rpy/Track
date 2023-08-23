'use client';

import {useEffect, useRef} from 'react';

import clsx from 'clsx';

import styles from './Question.module.css';

interface IQuestionProps {
  title: string;
  description: string;
  isOpen: boolean;
  onOpen(): void;
}

function Question({title, description, onOpen, isOpen}: IQuestionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !descriptionRef.current) {
      return;
    }
    if (isOpen) {
      const descriptionHeight = descriptionRef.current.getBoundingClientRect().height;
      wrapperRef.current.style.height = `${descriptionHeight}px`;
      return;
    }
    wrapperRef.current.style.height = `0px`;
  }, [isOpen]);

  return (
    <div className={styles.QuestionWrapper}>
      <div className={styles.Question} onClick={onOpen}>
        <h5 className={styles.QuestionTitle}>{title}</h5>
        <button className={clsx(styles.QuestionButton, isOpen && styles.Active)}></button>
      </div>
      <div className={styles.QuestionTextWrapper} ref={wrapperRef}>
        <p className={styles.QuestionText} ref={descriptionRef}>
          {description}
        </p>
      </div>
    </div>
  );
}
export default Question;
