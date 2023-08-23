'use client';

import {useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {useForm, SubmitHandler} from 'react-hook-form';

import clsx from 'clsx';

import ky from 'ky';

import PageContainer from '../PageContainer/PageContainer';

import logo from './../../public/images/footer_logo.svg';
import tw from './../../public/images/tw.svg';
import google from './../../public/images/google.svg';
import ln from './../../public/images/ln.svg';
import fb from './../../public/images/fb.svg';
import ut from './../../public/images/ut.svg';

import styles from './Footer.module.css';

type Input = {
  email: string;
};

function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<Input>();

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState('');

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
    <footer className={styles.Footer}>
      <PageContainer>
        {submitted && (
          <div className={styles.FormAlert}>
            <div>{text}</div>
            <button onClick={() => setSubmitted(false)} className={styles.CloseButton}>
              <span></span>
            </button>
          </div>
        )}
        <div className={styles.FooterBlock}>
          <div className={styles.FooterText}>
            <div className={styles.FooterLogo}>
              <Image alt='Logo' src={logo} />
              <div className={styles.EmailSupport}>
                <div className={styles.EmailTitle}>Email</div>
                <Link href='#' className={styles.EmailLink}>
                  info@the18.design
                </Link>
              </div>
            </div>
            <div className={styles.FooterMedia}>
              <div className={styles.SocialNetwork}>
                <Link className={styles.SocialNetworkLink} href='#'>
                  <Image src={fb} alt='Social Network' />
                </Link>
              </div>
              <div className={styles.SocialNetwork}>
                <Link className={styles.SocialNetworkLink} href='#'>
                  <Image src={tw} alt='Social Network' />
                </Link>
              </div>
              <div className={styles.SocialNetwork}>
                <Link className={styles.SocialNetworkLink} href='#'>
                  <Image src={google} alt='Social Network' />
                </Link>
              </div>
              <div className={styles.SocialNetwork}>
                <Link className={styles.SocialNetworkLink} href='#'>
                  <Image src={ln} alt='Social Network' />
                </Link>
              </div>
              <div className={styles.SocialNetwork}>
                <Link className={styles.SocialNetworkLink} href='#'>
                  <Image src={ut} alt='Social Network' />
                </Link>
              </div>
            </div>
            <div className={styles.FooterMobileColumns}>
              <div className={styles.FooterCompany}>
                <div className={styles.ColumnEmail}>
                  <div className={styles.EmailTitle}>Email</div>
                  <Link href='#' className={styles.EmailLink}>
                    info@the18.design
                  </Link>
                </div>
                <div className={styles.ColumnSections}>
                  <ul className={styles.SectionsList}>
                    <li className={styles.ColumnItem}>
                      <Link href='#aboutus' className={styles.ColumnLink}>
                        About us
                      </Link>
                    </li>
                    <li className={styles.ColumnItem}>
                      <Link href='#works' className={styles.ColumnLink}>
                        How it works
                      </Link>
                    </li>
                    <li className={styles.ColumnItem}>
                      <Link href='#pricing' className={styles.ColumnLink}>
                        Pricing
                      </Link>
                    </li>
                    <li className={styles.ColumnItem}>
                      <Link href='#faqs' className={styles.ColumnLink}>
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.ColumnAdditionally}>
                <ul className={styles.SectionsList}>
                  <li className={styles.ColumnItem}>
                    <Link href='#' className={styles.ColumnLink}>
                      Lead generation
                    </Link>
                  </li>
                  <li className={styles.ColumnItem}>
                    <Link href='#' className={styles.ColumnLink}>
                      Customer engagement
                    </Link>
                  </li>
                  <li className={styles.ColumnItem}>
                    <Link href='#' className={styles.ColumnLink}>
                      Customer support
                    </Link>
                  </li>
                  <li className={styles.ColumnItem}>
                    <Link href='#' className={styles.ColumnLink}>
                      Help Center Articles
                    </Link>
                  </li>
                  <li className={styles.ColumnItem}>
                    <Link href='#' className={styles.ColumnLink}>
                      Outbound Messages
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.FooterForm}>
              <h6 className={styles.FormTitle}>Want to recieve our awesome stories?</h6>
              <div className={styles.FormWrapper}>
                <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className={styles.FormEmail}
                    type='text'
                    placeholder='Enter your email'
                    {...register('email', {required: true, maxLength: 25})}
                  />
                  <button
                    type='submit'
                    disabled={submitting}
                    className={clsx(styles.FormButton, submitting && styles.Disable)}
                  >
                    Subcribe
                  </button>
                </form>
                {errors.email && <div className={styles.FormError}>Empty field or invalid email</div>}
              </div>
            </div>
            <div className={styles.FormDesign}>© 18 Design, all rights reserved.</div>
          </div>
          <div className={styles.FooterNav}>
            <div className={styles.FooterColumns}>
              <div className={styles.FooterCompany}>
                <div className={styles.ColumnEmail}>
                  <div className={styles.EmailTitle}>Email</div>
                  <Link href='#' className={styles.EmailLink}>
                    info@the18.design
                  </Link>
                </div>
                <div className={styles.ColumnSections}>
                  <ul className={styles.SectionsList}>
                    <li className={styles.ColumnItem}>
                      <Link href='#aboutus' className={styles.ColumnLink}>
                        About us
                      </Link>
                    </li>
                    <li className={styles.ColumnItem}>
                      <Link href='#works' className={styles.ColumnLink}>
                        How it works
                      </Link>
                    </li>
                    <li className={styles.ColumnItem}>
                      <Link href='#pricing' className={styles.ColumnLink}>
                        Pricing
                      </Link>
                    </li>
                    <li className={styles.ColumnItem}>
                      <Link href='#faqs' className={styles.ColumnLink}>
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.ColumnAdditionally}>
                <ul className={styles.SectionsList}>
                  <li className={styles.ColumnItem}>
                    <Link href='#' className={styles.ColumnLink}>
                      Lead generation
                    </Link>
                  </li>
                  <li className={styles.ColumnItem}>
                    <Link href='#' className={styles.ColumnLink}>
                      Customer engagement
                    </Link>
                  </li>
                  <li className={styles.ColumnItem}>
                    <Link href='#' className={styles.ColumnLink}>
                      Customer support
                    </Link>
                  </li>
                  <li className={styles.ColumnItem}>
                    <Link href='#' className={styles.ColumnLink}>
                      Help Center Articles
                    </Link>
                  </li>
                  <li className={styles.ColumnItem}>
                    <Link href='#' className={styles.ColumnLink}>
                      Outbound Messages
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
export default Footer;
