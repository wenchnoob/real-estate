import type { NextApiRequest, NextApiResponse } from 'next'
import { getDatabase, ref, get, set, child } from 'firebase/database';
import app from '../../../src/scripts/firebase';
import { useRouter } from "next/router";

type Data = {
  house: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const table = 'houses/';
    const db = getDatabase(app);


    get(child(ref(db), 'houses/'+ req.query['id'])).then((snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val();
            res.status(200).json({house: data});
        }
    });
}
