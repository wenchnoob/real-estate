import type { NextApiRequest, NextApiResponse } from 'next'
import { getDatabase, ref, get, set, child } from 'firebase/database';
import app from '../../src/scripts/firebase';


type Data = {
  houses: any[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const table = 'houses/';
    const db = getDatabase(app);

    let houses: any[] = [];

    get(child(ref(db), 'houses/')).then((snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val();
            var keys = Object.keys(data);
            keys.forEach(k => houses.push(data[k]));
            res.status(200).json({houses: houses});
        }
    });
}
