import React from 'react';
import Card from './Card';

function CardList({ robots }) {
	return (
		<div>
			{robots.map(({ name, id, email }) => {
				return <Card id={id} name={name} email={email} key={id} />;
			})}
		</div>
	);
}

export default CardList;
