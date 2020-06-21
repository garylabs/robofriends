import React from 'react';

const Card = props => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${props.id}`} alt='robot' />
			<div>
				<h2 className='scifi'>{props.name.toUpperCase()}</h2>
				<p className='scifi'>{props.email}</p>
			</div>
		</div>
	);
};

export default Card;
