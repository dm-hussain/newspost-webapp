import React from 'react';
import { useFirebaseContext } from '../context/FirebaseContext';
import NewsCard from './NewsCard';
import Loader from './Loader';
import MiniLoader from '../components/MiniLoader'
function MyProfile() {
  const { loggedInData, loggedInUsersAllNews } = useFirebaseContext();

  return (
    <div className="mb-3  container  text-center text-white" style={{marginTop:'5rem'}}>
      {loggedInData?.displayName ? (
        <h1>Hello {loggedInData?.displayName} </h1>
      ) : (
         <MiniLoader />
      )}

      <div className=" my-5 container d-flex flex-wrap flex-column flex-md-row justify-content-center justify-content-md-between align-items-center gap-4">
        {loggedInUsersAllNews ? (
          loggedInUsersAllNews.map((news) => {
               
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
    </div>
  );
}

export default MyProfile;
