import React from 'react';
import styles from './NewsCard.module.css';
import { NavLink } from 'react-router-dom';

function NewsCard({ imgLink, headline, urlId }) {
  return (
    <NavLink
      to={`/news/${urlId}`}
      className={` ${styles.newsCard} card cursor-pointer d-flex `}
    >
      <img src={imgLink} className={`  img-fluid  card-img-top`} alt={`img`} />
      <div className="card-body  ">
        <p className="card-text fw-semibold fw-md-bolder">
          {headline}
          <button type="button" className="btn btn-danger mx-auto ">
            Read more...
          </button>
        </p>
      </div>
    </NavLink>
  );
}

export default NewsCard;
