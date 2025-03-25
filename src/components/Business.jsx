import React from 'react';
import { useOutletContext } from 'react-router-dom';

import CategoryWiseNews from './CategoryWiseNews';

function Business() {
  const { toggleNav, setToggleNav } = useOutletContext();

  return (
    <div onClick={() => setToggleNav(!toggleNav)} className="container mgTop">
      <CategoryWiseNews category="business" />
    </div>
  );
}

export default Business;
