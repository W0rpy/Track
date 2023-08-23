'use client';

import {useState} from 'react';

import {useForm, SubmitHandler} from 'react-hook-form';

import clsx from 'clsx';

import ky from 'ky';

import styles from './Form.module.css';

type Input = {
  email: string;
};

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<Input>();

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState('');

  const regExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9_-]+)/;

  async function sendEmail(email: string) {
    const res: any = await ky.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/email`, {json: email}).json();
    try {
      setSubmitted(true);
      setSubmitting(false);
      if (!res.message) {
        setText('Your mail was sent successfully');
        reset();
      } else {
        setText(res.message);
      }
      setTimeout(() => setSubmitted(false), 5000);
    } catch (e) {
      console.log(e);
      setSubmitting(false);
    }
  }

  const onSubmit: SubmitHandler<Input> = (data) => {
    setSubmitting(true);
    sendEmail(data.email);
  };

  return (
    <>
      {submitted && (
        <div className={styles.FormAlert}>
          <div>{text}</div>
          <button onClick={() => setSubmitted(false)} className={styles.CloseButton}>
            <span></span>
          </button>
        </div>
      )}
      <div className={styles.FormWrapper}>
        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.FormInput}
            placeholder='Enter your email'
            {...register('email', {required: true, pattern: regExp, maxLength: 25})}
          />
          <button type='submit' disabled={submitting} className={clsx(styles.FormButton, submitting && styles.Disable)}>
            Get started
          </button>
        </form>
        {errors.email && <div className={styles.FormError}>Empty field or invalid email</div>}
      </div>
    </>
  );
}
export default Form;
