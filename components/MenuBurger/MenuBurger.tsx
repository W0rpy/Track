'use client';

import clsx from 'clsx';

import styles from './MenuBurger.module.css';

interface IMenuBurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
function MenuBurger({open, setOpen}: IMenuBurgerProps) {
  return (
    <button className={clsx(styles.Menu, open && styles.active)} onClick={() => setOpen(!open)}>
      <span></span>
      <span></span>
    </button>
  );
}
export default MenuBurger;
