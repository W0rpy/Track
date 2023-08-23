import {useEffect, useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

import PageContainer from '../PageContainer/PageContainer';
import MenuBurger from '../MenuBurger/MenuBurger';

import logo from './../../public/images/logo.svg';

import styles from './Header.module.css';

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (open) {
      body?.classList.add('lock');
    } else {
      body?.classList.remove('lock');
    }
  }, [open]);
  return (
    <header className={styles.Header}>
      <PageContainer>
        <div className={styles.HeaderBlock}>
          <div className={styles.HeaderNav}>
            <div className={styles.HeaderLogo}>
              <Image src={logo} alt='Logo' />
            </div>
            <nav className={clsx(styles.Nav, open && styles.active)}>
              <ul className={styles.NavList}>
                <li className={styles.NavItem}>
                  <Link onClick={() => setOpen(false)} href='#aboutus' className={styles.NavLink}>
                    About us
                  </Link>
                </li>
                <li className={styles.NavItem}>
                  <Link onClick={() => setOpen(false)} href='#works' className={styles.NavLink}>
                    How it works
                  </Link>
                </li>
                <li className={styles.NavItem}>
                  <Link onClick={() => setOpen(false)} href='#pricing' className={styles.NavLink}>
                    Pricing
                  </Link>
                </li>
                <li className={styles.NavItem}>
                  <Link onClick={() => setOpen(false)} href='#faqs' className={styles.NavLink}>
                    FAQs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.HeaderSignin}>
            <div className={styles.HeaderLogin}>
              <Link href='#' className={styles.HeaderLoginItem}>
                Login
              </Link>
            </div>
            <div className={styles.HeaderSignup}>
              <Link href='#' className={styles.HeaderSignupLink}>
                Sign Up
              </Link>
            </div>
            <div className={styles.HeaderMenu}>
              <MenuBurger open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
export default Header;
