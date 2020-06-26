import React, { Fragment as div } from 'react';
import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
// import { getGifs } from './helpers/GetGifs';

const GifExpertApp = () => {

const arr=['Hola']

const [categories, setCategories] = useState(arr)

	return (
		<div className="container">
			<h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
			<hr />
            <div>
                {categories.map(category=>(
                    <GifGrid key={category} category={category}>{category}</GifGrid>
                ))}
            </div>
		</div>
	);
};

export default GifExpertApp;
