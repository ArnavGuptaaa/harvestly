import React from 'react';

function ItemCard({ imageURL, itemName }) {
	return (
		<div className="m-3 p-8 w-40 h-40 rounded-2xl justify-center shadow-lg border border-black items-center ">
			<img src={imageURL} alt="item" />
			<h3 className="font-medium text-lg">{itemName}</h3>
		</div>
	);
}

export default ItemCard;
