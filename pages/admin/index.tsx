import { useRouter } from 'next/router';
import React from 'react';
import HouseView from "../../src/components/house_view";


const Admin = () => {
    const router = useRouter();
    return (
        <HouseView isAdmin={true} edit={router.query['edit'] as string | undefined} />
    );
}

export default Admin;