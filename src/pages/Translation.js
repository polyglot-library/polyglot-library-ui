import React from 'react';
import Navbar from '../modules/user/components/Navbar';
import Table from '../components/Table';
import TranslateContent from '../modules/translation/components/TranslateContent'

const Translation = () => {
  return (
    <>
      <Navbar />
      <div>
        <Table />
        <TranslateContent />
      </div>
    </>
  )
};

export default Translation;
