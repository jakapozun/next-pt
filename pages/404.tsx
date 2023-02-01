import React, {useEffect} from 'react';
import classes from '@/styles/Home.module.css'
import {useRouter} from "next/router";
const NotFound = () => {
    const router = useRouter();
    useEffect( () => {
        setTimeout( () =>{
            router.push('/' );
        }, 3000)
    })
    return (
        <div className={classes.main}>
            <h2>custom 404</h2>
            <h3>NOT FOUND</h3>
        </div>
    );
};

export default NotFound;
