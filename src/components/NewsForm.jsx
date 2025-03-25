import React, { useEffect, useState } from 'react';
import { useFirebaseContext } from '../context/FirebaseContext';
import GoogleLogin from './GoogleLogin';
import ShareBtn from './ShareBtn';
const NewsForm = () => {
  // const newsData= useState({})
  const [headline, setHeadLine] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [smartHeadline, setSmartHeadLine] = useState('');
  const [smartBody, setSmartBody] = useState('');
  const [aiResponse, setAiResponse] = useState({});
  const { putData, handleNewsSubmit } = useFirebaseContext();
  useEffect(() => {
    setBody(smartBody);
    setHeadLine(smartHeadline);
  }, [smartBody, smartHeadline]);

  const handleSmartNews = async () => {
    if (!headline || !body) {
      alert('Please enter a headline and body text.');
      return;
    }

    const fetchGeminiAI = async () => {
      try {
        const response = await fetch(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAqavpFTT0ZaIm4PYC1lyN2tqiGN5TQ41A',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `The following news is written in a specific language. 
                          
                          **Please detect the language of this news and **ensure that the rewritten news is in the same language**. 
                           **Headline:** ${headline}  
                           **Body:** ${body}  
        
                           **Rewrite this news in the same language with a professional and engaging tone.**
                           **Keep it lively and journalistic, ensuring it sounds like a human wrote it.**
                           **Also Generate upto 5 hashtag**
                           **Also generate a slug in english only**
        
                          **Output format:**  
                          {
                            "headline": "Rewritten headline in the same language",
                            "body": "Rewritten news body in the same language",
                            "hashtag" : [upto 5 hashtag with coma in english only ],
                            "slug" : 'slug in english'
                          }
                          `,
                    },
                  ],
                },
              ],
            }),
          }
        );

        const data = await response.json();
        console.log(data);

        let responseData =
          data.candidates[0].content.parts[0].text
            .replace(/```json|```/g, '')
            .trim() || '{}';
        console.log(responseData);

        console.log(JSON.parse(responseData));
        setAiResponse(JSON.parse(responseData));

        try {
          console.log(aiResponse.headline);

          setSmartHeadLine(aiResponse.headline);
          setSmartBody(aiResponse.body);
        } catch (error) {
          console.log('JSON parsing error: ', error);
        }
      } catch (error) {
        console.error('Error fetching AI response:', error);
      }
    };

    // Function Call
    fetchGeminiAI();
  };

  const handleImages = (e) => {
    console.dir(e.target.files[0]);
  };

  const [imgUrl, setImgUrl] = useState('');
  const handleImgUrl = (e) => {
    setImgUrl(e.target.value);
  };

  const handlePostNews = () => {
    if (!headline || !body || !category)
      return alert('Plz enter headline, body and category of news properly');
    putData('users/' + crypto.randomUUID(), {
      headline,
      body,
      imgUrl,
      category,
    });
    handleNewsSubmit(headline, body, imgUrl, category);
    setBody('');
    setHeadLine('');
    setImgUrl('');
  };

  const { loggedInData, formSubmitted } = useFirebaseContext();

  return (
    <div className="min-vh-100 mgTop d-flex justify-content-center align-items-center">
      {!loggedInData ? (
        <div className=" min-vh-100 mgTop d-flex justify-content-center align-items-center">
          <GoogleLogin />
        </div>
      ) : formSubmitted ? (
        <ShareBtn newsUrl={imgUrl} headline={headline} />
      ) : (
        <div className=" container mgTop px-4   ">
          <form
            className=" mx-auto p-3 rounded-3 w-100  w-md-75 border border-primary  "
            action=""
          >
            <div className="w-100 mb-2">
              <label className="text-white" htmlFor="title">
                Headline
              </label>
              <input
                onChange={(e) => setHeadLine(e.target.value)}
                value={headline}
                className="w-100 py-1 form-control "
                type="text"
                id="title"
                placeholder="Enter news headline..."
              />
            </div>

            <div className="w-100 mb-2">
              <label className="text-white" htmlFor="body">
                Body
              </label>
              <textarea
                onChange={(e) => setBody(e.target.value)}
                value={body}
                rows="5"
                className="form-control"
                id="body"
                placeholder="Enter news content..."
              ></textarea>
            </div>

            <select
              onChange={(e) => setCategory(e.target.value)}
              required
              className="form-select my-1 "
              aria-label="Default select example"
            >
              <option hidden value="">
                Category
              </option>
              <option value="local">Local</option>
              <option value="politics">Politics</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
            </select>

            <div className="w-100 mb-4">
              <label className="text-white" htmlFor="userImg">
                Add Photos
              </label>
              <input
                className="w-100 py-1 form-control "
                type="file"
                multiple
                accept="image/*"
                id="userImg"
                onChange={handleImages}
              />
            </div>

            <div className="w-100 mb-4">
              <label className="text-white" htmlFor="imgUrl">
                Paste Image URL
              </label>
              <input
                className="w-100 py-1 form-control "
                type="text"
                multiple
                accept="image/*"
                id="imgUrl"
                onChange={handleImgUrl}
              />
            </div>

            <div className="d-flex gap-4 justify-content-between justify-content-md-start  ">
              <button
                onClick={(e) => handleSmartNews()}
                type="button"
                className="btn  btn-warning    "
              >
                Smart News
              </button>
              <button
                onClick={(e) => handlePostNews()}
                type="button"
                className="btn     btn-primary    "
              >
                Post News
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewsForm;
