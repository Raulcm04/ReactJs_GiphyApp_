import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
	const [ state, setstate ] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {
		// let randomTime= Math.random()*1000/2*5
		// setTimeout(() => {
			getGifs(category).then((gifs) => {
				setstate({
					data: gifs,
					loading: false
				});
			});
		// }, 1000);
	}, [category]);

	return state;
};
