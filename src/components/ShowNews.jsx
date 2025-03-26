import React, { useEffect } from 'react';
import { useFirebaseContext } from '../context/FirebaseContext';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

function ShowNews( ) {
  const id = useParams();
  const { getNewsData, showNews } = useFirebaseContext();
 
  useEffect(() => {
    getNewsData(id);
  }, []);

  return (
    <div className="mgTop d-flex min-vh-100 justify-content-center align-items-start text-center">
      {!showNews ? (
        <Loader marginTop={{marginTop: '5rem'}} />
      ) : (
        <div className="mgTop container text-white">
           
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-4 border border-gray-200">
      {/* News Image */}
      {showNews.imgUrl && (
        <img
          src={showNews.imgUrl}
          alt={showNews.headline}
          className="  object-cover rounded-lg " style={{maxWidth:'500px',  width: '80vw'}}
        />
      )}

      {/* News Content */}
      <div className="my-4 w-75 mx-auto">
        <h2 className="text-black ">{showNews.headline}</h2>
        <p className=" text-secondary  text-justify">{showNews.body}</p>
      </div>

      {/* Hashtags */}
      {showNews?.hashtags?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {showNews?.hashtags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full cursor-pointer hover:bg-blue-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
        </div>
      )}
    </div>
  );
}

export default ShowNews;




// import React, { useEffect } from "react";
// import { Container, Card, Button, Row, Col } from "react-bootstrap";
// import { useFirebaseContext } from "../context/FirebaseContext";
// import { useParams } from 'react-router-dom';

// const ShowNews = () => {
//   // const newsUrl = `${window.location.origin}/news/${newsId}`;

//   const id = useParams();
//   const { getNewsData, showNews } = useFirebaseContext();
 
//   useEffect(() => {
//     getNewsData(id);
//     console.log(showNews);
    
//   }, []);

//   const socialShare = (platform) => {
 
//     const shareUrls = {
//       whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(newsUrl)}`,
//       twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(newsUrl)}`,
//       facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(newsUrl)}`,
//     };
//     window.open(shareUrls[platform], "_blank");
//   };

//   return (
//     <Container className="mt-4" style={{marginBottom: '5rem'}}>
//       <Card className="shadow-lg">
//         <Card.Img variant="top" src={showNews?.imgUrl} alt="News Image" className="img-fluid mx-auto " style={{maxWidth: '30vw' }} />
//         <Card.Body>
//           <h2 className="text-primary">{showNews?.headline}</h2>
//           <p className="text-muted">{showNews?.body}</p>
          
//           {/* Share Buttons */}
//           <Row className="mt-3">
//             <Col className="d-flex gap-2">
//               <Button variant="success" onClick={() => socialShare("whatsapp")}>
//                 📲 Share on WhatsApp
//               </Button>
//               <Button variant="info" onClick={() => socialShare("twitter")}>
//                 🐦 Share on Twitter
//               </Button>
//               <Button variant="primary" onClick={() => socialShare("facebook")}>
//                 📘 Share on Facebook
//               </Button>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default ShowNews;

 

 
 

