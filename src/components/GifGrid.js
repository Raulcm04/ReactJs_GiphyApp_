import React, { Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import Loader from './Loader';

const GifGrid = ({ category }) => {
	const { data, loading } = useFetchGifs(category);
	return (
		<Fragment>
			<h2> {category} </h2>
			{loading && <Loader />}
			<div className="card-grid">{data.map((img) => <GifGridItem key={img.id} gif={img} />)}</div>
		</Fragment>
	);
};

export default GifGrid;
