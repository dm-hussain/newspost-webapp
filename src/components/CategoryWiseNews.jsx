import React, { useEffect } from 'react';
import { useFirebaseContext } from '../context/FirebaseContext';
import Loader from './Loader';
import NewsCard from './NewsCard';

function CategoryWiseNews({ category }) {
  const { allNewsByCategory, getNewsByCategory } = useFirebaseContext();
  useEffect(() => {
    getNewsByCategory(category);
  }, []);

  return (
    <>
      <div className=" my-5 container d-flex flex-wrap flex-column flex-md-row justify-content-center justify-content-md-between align-items-center gap-4">
        {allNewsByCategory ? (
          allNewsByCategory.map((news) => {
            return (
              <NewsCard
                urlId={news.id}
                key={news.id}
                headline={news.headline}
                imgLink={news.imgUrl}
              />
            );
          })
        ) : (
          <div className=" container d-flex justify-content-center">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}

export default CategoryWiseNews;
