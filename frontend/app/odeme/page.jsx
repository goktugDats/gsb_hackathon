'use client'
import React, { useState } from 'react';
import Odeme from '@components/Odeme';

const Home = () => {
    const [tab, setTab] = useState(false);

    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center blue_gradient">
                Yardım et ve Destekle
                <br className="max-md:hidden" />
                <br className="max-md:hidden" />
                <br className="max-md:hidden" />
            </h1>
            <Odeme />
            <br className="max-md:hidden" />
            <br className="max-md:hidden" />
            <br className="max-md:hidden" />
        </section>
    );
};

export default Home;