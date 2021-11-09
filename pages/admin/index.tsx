import { useRouter } from 'next/router';
import React from 'react';
import HouseView from "../../src/components/house_view";
import { useAuth } from "../../src/scripts/auth";


const Admin = () => {
    const router = useRouter();
    const { user, roles } = useAuth();
    const isAdmin = roles.includes('admin');

    if (!user.uid || !isAdmin) return <span>Not Authorized</span>;;
    return (
        <HouseView isAdmin={isAdmin} edit={router.query['edit'] as string | undefined} />
    );
    
}

export default Admin;