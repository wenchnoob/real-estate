import { getDatabase, ref, get, set, child, connectDatabaseEmulator } from 'firebase/database';
import { HouseProps } from './types';
import app from './firebase';

const table = 'houses/';

export let db = getDatabase(app);
if (process.env.NEXT_PUBLIC_LOCAL)
    try {
        connectDatabaseEmulator(db, "localhost", 9000); 
    } catch (err) {
        console.log('Database connect or reconnect has failed!')
    }

export const getAllHouses = () => {
    return new Promise<HouseProps[]>(
        (resolve, reject) => {
            get(child(ref(db), table)).then((snapshot) => {
                if (snapshot.exists()) {
                    let houses: HouseProps[] = [];
                    let data = snapshot.val();
                    var keys = Object.keys(data);
                    keys.forEach(k => houses.push(data[k]));
                    resolve(houses);
                }
                reject('Failed to load data');
            }).catch((err) => {
                reject('Failed with error ' + err);
            });
        }
    );
}

export const getHouse = (id: string) => {
    return new Promise<HouseProps>(
        (resolve, reject) => {
            get(child(ref(db), table + id)).then((snapshot) => {
                if (snapshot.exists()) {
                    resolve(snapshot.val() as HouseProps);
                }

                reject('Failed to load data');
            }).catch((err) => {
                reject('Failed with error ' + err);
            });
        }
    );
}
