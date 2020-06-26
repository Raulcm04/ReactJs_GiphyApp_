import React from 'react';

const GifGridItem = ({gif}) => {
    // console.log(gif);
    
	return (
		<div  className="card animate__animated animate__backInUp">
			<img src={gif.url} alt="" />
			<p>{(gif.title) || 'Without title---'}</p>
		</div>
	);
};

export default GifGridItem;
