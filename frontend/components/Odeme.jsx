'use client'
import React from 'react'

const Odeme = () => {
    const transaction = () => {
        alert(document.getElementById('mirasci').value + document.getElementById('mesaj').value);
    };
    return (

        <>
            <br />

            <form class="max-w-sm mx-auto">
                <div>
                    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Public Key</label>
                    <input type="text" id="mirasci" style={{ width: '500px' }} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <br />
                <div>
                    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Ödeme Miktarı</label>
                    <input type="text" id="mirasci" style={{ width: '500px' }} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <br />
                <button onClick={transaction} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">Onayla</button>
            </form>

        </>

    )
}

export default Odeme