'use client'

import React, { useState } from 'react';
import Map from '@components/Map';
import Form from '@components/Form';

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
      <button style={{ marginLeft: 'auto', backgroundColor: 'black' }} onClick={() => setTab(true)} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-black-600">Form yükle</button>
      {tab ? <Form /> : <Map />}
      <br className="max-md:hidden" />
      <br className="max-md:hidden" />
      <br className="max-md:hidden" />
    </section>
  );
};

export default Home;