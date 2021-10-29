import { getDatabase, ref, get, set, child, connectDatabaseEmulator } from 'firebase/database';
import { House } from './types';
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

    return new Promise<House[]>(
        (resolve, reject) => {
            get(child(ref(db), table)).then((snapshot) => {
                if (snapshot.exists()) {
                    let houses: House[] = [];
                    let data = snapshot.val();
                    var keys = Object.keys(data);
                    keys.forEach(k => houses.push(data[k]));
                    resolve(houses);
                }

                reject('Failed to load data');
            }).catch((err) => {
                console.log(err);
                reject('Failed with error ' + err);
            });
        }
    );
}

export const getHouse = (id: string) => {
    return new Promise<House>(
        (resolve, reject) => {
            get(child(ref(db), table + id)).then((snapshot) => {
                if (snapshot.exists()) {
                    resolve(snapshot.val() as House);
                }

                reject('Failed to load data');
            }).catch((err) => {
                console.log(err);
                reject('Failed with error ' + err);
            });


        }
    );
}
