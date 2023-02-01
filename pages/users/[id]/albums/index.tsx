import React from 'react';

interface Album{
    id: number;
    title: string
}
export const getServerSideProps = async ({params}: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/albums`);
    const data = await res.json();

    return {
        props: {
            albums: data
        }
    }
}
const Albums = ({albums}: {albums: Album[]}) => {
    return (
        <div style={{padding: '10px'}}>
            {albums?.map( (album: Album) => <div key={album.id} style={{marginBottom: '8px',borderBottom: '1px solid white'}}>
                <p>Album #: {album?.id}</p>
                <p>Album Title: {album?.title}</p>
            </div>)}
        </div>
    );
};

export default Albums;
