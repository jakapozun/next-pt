import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const Nav = () => {
    const router = useRouter();
    return (
        <nav style={{borderBottom: '1px solid white'}}>
         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '12px'}}>
             <Link href={'/'}>Home</Link>
             <Link href={'/about'}>About</Link>
             <Link href={'/users'}>Users</Link>
             {router.pathname !== '/' && <button style={{padding: '4px'}} onClick={() => router.back()}>GO BACK</button>}
         </div>
        </nav>
    );
};

export default Nav;
