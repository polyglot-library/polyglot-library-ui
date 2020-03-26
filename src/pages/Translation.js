import React from 'react';
import Navbar from '../modules/user/components/Navbar';
import Table from '../components/Table';
import Footer from '../components/Footer';
import TranslateContent from '../modules/translation/components/TranslateContent'
import styles from './Translation.module.css'

const Translation = () => {
  return (
    <>
      <Navbar />
      <div className={styles.outer}>
        <Table className={styles.inner}/>
        <TranslateContent className={styles.inner}/>
      </div>
      <Footer/>
    </>
  )
};

export default Translation;
