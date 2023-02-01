import React from 'react';
import {User} from "@/pages/users";
import Link from "next/link";
export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    const paths = data.map( (user: User) => {
        return {
            params: {id: user.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: {user: data}
    }
}
const UserDetails = ({user}: {user: User}) => {
    return (
        <div>
            <h1>User Info</h1>
            <div style={{marginBottom: '10px'}}>
                <span>{user?.id}</span>
                <h3>{user?.name}</h3>
                <p>{user?.email}</p>
                <p>{user?.phone}</p>
                <p>{user?.address?.city}</p>
                <p>{user?.address?.street}</p>
            </div>
            <Link href={`/users/${user.id}/albums`} style={{textDecoration: 'underline'}}>Check user's albums</Link>
        </div>
    );
};

export default UserDetails;
