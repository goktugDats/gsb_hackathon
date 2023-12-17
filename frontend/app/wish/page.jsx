'use client'
import React, { useState } from 'react';
import Form from '@components/Form';
import Wish from '@components/Wish';

const Home = () => {
    const [tab, setTab] = useState(false);

    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center blue_gradient">
                Desteğini Talep Et!
                <br className="max-md:hidden" />
                <br className="max-md:hidden" />
                <br className="max-md:hidden" />
            </h1>
            <Form />
            <Wish />
            <br className="max-md:hidden" />
            <br className="max-md:hidden" />
            <br className="max-md:hidden" />
        </section>
    );
};

export default Home;