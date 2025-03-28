import React from "react";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon } from "react-share";
import { Helmet } from "react-helmet-async";
import logoVite from '../../public/vite.svg'

const NewsArticle = ({ article, id }) => {
  if (!article) return <p>Loading...</p>;

  const shareUrl = `https://postcardnews.netlify.app/news/${id}`;
  const title = article.headline || 'News';
  const description = article.body?.split(" ").slice(0, 10).join(" ") || 'Breaking News';
  const imageUrl = article.imgUrl ||  logoVite;
console.log('imgUrl', imageUrl);

  return (
    <div>

<Helmet>
        <title>{title} - PostCard News</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} key={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} key={`secure-${imageUrl}`}  />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:site_name" content="PostCard News" />
 

        {/* <meta property="og:type" content="article" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl}  key={`twitter-${imageUrl}`} />
      </Helmet>


      <div className="d-flex gap-4 mt-4 justify-content-center mb-3 ">
        <FacebookShareButton url={shareUrl} quote={title} hashtag="#news">
          <FacebookIcon size={40} round />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>

        <LinkedinShareButton url={shareUrl} title={title} summary={description} source={shareUrl}>
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default NewsArticle;
