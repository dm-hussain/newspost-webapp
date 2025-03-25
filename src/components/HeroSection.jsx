import React, { useEffect } from 'react';
import NewsCard from './NewsCard';
import styles from './Hero.module.css';
import { useOutletContext } from 'react-router-dom';
import { useFirebaseContext } from '../context/FirebaseContext';
import Loader from './Loader';

function HeroSection() {
  const { toggleNav, setToggleNav } = useOutletContext();
  const { getAllNewsData, allUsersNews } = useFirebaseContext();

  useEffect(() => {
    getAllNewsData();
  }, []);

  return (
    <div
      onClick={() => setToggleNav(false)}
      className={`mb-5 container ${styles.container} p-2 d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-md-between flex-column flex-md-row`}
    >
      {allUsersNews ? (
        allUsersNews.map((news) => {
          return (
            <NewsCard
            urlId={ news.id}
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
  );
}

export default HeroSection;
