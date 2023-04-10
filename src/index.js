const axios = require("axios");

function instagramGetUrl(url_media) {
  return new Promise(async (resolve, reject) => {
    const BASE_URL = "https://www.instagram.com/p/";
    const postId = url_media
      .replace(" ", "")
      .split("/")
      .filter((x) => x.length > 0)[3];
    //New Session = Cookies
    try {
      const resp = await axios(BASE_URL);

      //REQUEST CONFIG
      var config = {
        method: "get",
        url: `${BASE_URL}${postId}/?utm_source=ig_web_copy_link?&__a=1&__d=1`,
        headers: {
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "none",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52",
          // 'Content-Type': 'application/json'
        },
      };

      //REQUEST
      axios(config)
        .then(function (response) {
          const result = response.data.graphql.shortcode_media;
          if (result) {
            if (result.is_video) {
              resolve(result.video_url);
            } else {
              resolve(result.display_url);
            }
          }
        })
        .catch(function (error) {
          reject(error.message);
        });
    } catch (e) {
      reject(e.message);
    }
  });
}

module.exports = instagramGetUrl;
