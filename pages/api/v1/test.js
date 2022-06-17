// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const axios = require("axios").default;

  axios({
    url: "https://www.classroom.csglearn.com/login/token.php",
    method: "POST",
    params: {
      service: "webapp",
      username: "frontend_user",
      password: "###J1en4ov3",
    },
  }).then(function (response) {
    console.log(response);
    res.status(200).json(response.data);
  });
}
