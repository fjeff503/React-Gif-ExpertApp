import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Naruto', 'Dragon Ball', 'Death Note'];
    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => {
    //(forma 1)     setCategories(['Bleach', ...categories]);
    //(forma 2) setCategories((cats)=>['Bleach', ...categories]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}//esto es lo que enviamos 
                        />
                    ))
                }
            </ol>

        </>
    )
};
