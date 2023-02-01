import Link from 'next/link';
import React from 'react';
import classes from './users.module.css';
export interface User{
    id: number,
    name: string,
    email: string,
    phone?: string;
    address?: {
        street: string;
        city: string;
    }
}
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props:{
            users: data
        }
    }
}
const Users = ({users}: {users: User[]}) => {
    return (
        <div className={classes.main}>
            <h1>USERS</h1>
            <div className={classes.users}>
                {users?.map( (user) => <div className={classes.user} key={user.id}>
                    <span>{user.id}</span>
                    <Link className={classes.userName} href={`/users/${user.id}`}>{user.name}</Link>
                    <span className={classes.userEmail}>{user.email}</span>
                </div>)}
            </div>
        </div>
    );
};

export default Users;
