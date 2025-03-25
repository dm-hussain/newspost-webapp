import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CategoryWiseNews from './CategoryWiseNews';

function Entertainment() {
  const { toggleNav, setToggleNav } = useOutletContext();

  return (
    <div onClick={() => setToggleNav(!toggleNav)} className="container mgTop">
      <CategoryWiseNews category="entertainment" />
    </div>
  );
}

export default Entertainment;
