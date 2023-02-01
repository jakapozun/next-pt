import React from 'react';
import Image from "next/image";

const About = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>About</h1>
            <h3>Something about me...</h3>
            {/*we can also try adding priority and quality here*/}
            <Image src={'/4k-bg.jpg'} alt={'img'} width={1600} height={800} />
        </div>
    );
};

export default About;
