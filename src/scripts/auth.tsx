import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    connectAuthEmulator,
    onAuthStateChanged,
    updateProfile,
    signOut,
    User,
} from 'firebase/auth';
import { getDatabase, ref, get, set, child } from 'firebase/database';
import { db } from './data';
import app from './firebase';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';

export const auth = getAuth(app);
const authContext = createContext({} as any);

if (process.env.NEXT_PUBLIC_LOCAL)
    try {
        connectAuthEmulator(auth, "http://localhost:9099");
    } catch (err) {
        console.log('Authentication connect or reconnect has failed!')
    }

export const signup = (username: string, password: string) => {
    return new Promise<[boolean, any]>((resolve, reject) => {
        createUserWithEmailAndPassword(auth, username, password).then((userCredential) => {
            resolve([true, userCredential.user]);
        })
            .catch((error) => {
                reject([false, error]);
            });
    });
}

export const login = (username: string, password: string) => {
    return new Promise<[boolean, any]>((resolve, reject) => {
        signInWithEmailAndPassword(auth, username, password).then((userCredential) => {
            resolve([true, userCredential.user]);
        })
            .catch((error) => {
                reject([false, error]);
            });
    });
}

export function AuthProvider({ children }: { children: JSX.Element[] }) {
    const auth2 = useProvideAuth();
    return <authContext.Provider value={auth2}>{children}</authContext.Provider>
}

export function useAuth() {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState({});
    const [roles, setRoles] = useState(['user']);

    const signInWithEmail = async (email: string, password: string) => {
        const table = (uid: string) => `users/${uid}/roles`
        const user = (await signInWithEmailAndPassword(auth, email, password)).user;
        const snap = await get(child(ref(db), table(user.uid)));
        setUser(user);
        if (snap.exists()) setRoles(snap.val());
        return user;
    };

    const signout = () => {
        return signOut(auth).then(() => {
            setRoles(['user']);
            setUser({});
        });
    }

    const setPermissions = (uid: string, roles: string[]) => {
        const table = (uid: string) => `users/${uid}/roles`;
        console.log(uid);
        set(ref(db, table(uid)), roles);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userf) => {
            if (userf) {
                if (!user) setUser(user);
            } else {
                setUser({});
            }
        });

        return () => unsubscribe();
    }, [])

    return { user, uid: (user as User).uid, signInWithEmail, signout, setPermissions, roles};
}