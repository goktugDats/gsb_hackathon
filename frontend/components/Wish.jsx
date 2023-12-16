'use client'
import React from 'react'

const Wish = () => {

    const transaction = () => {
        alert(document.getElementById('mirasci').value + document.getElementById('mesaj').value);
    };


    return (

        <>
            <br />

            <form class="max-w-sm mx-auto">
                <div>
                    <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Miracçı Ekleme</label>
                    <input type="text" id="mirasci" style={{width:'500px'}} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <br />
                <div class="mb-5">
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Mesaj</label>
                    <input type="text" id="mesaj" style={{ width: '500px' }} class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button onClick={transaction} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">Submit</button>
            </form>

        </>

    )
}

export default Wish