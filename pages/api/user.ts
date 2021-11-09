import { NextApiResponse, NextApiRequest } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const user = '';
  console.log(user);
  if (user) {
    res.json({
      isLoggedIn: true,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
};


export default handler;