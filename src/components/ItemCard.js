import React from 'react';
// import item-1 from '../images/item-1.png';
function ItemCard({ itemName }) {
	return (
		<div className="m-3 p-8 w-40 h-40 rounded-2xl justify-center  items-center bg-slate-300">
			<img src={'../images/item-1.png'} alt="item-1" />
			<h3 className="font-medium text-lg">{itemName}</h3>
		</div>
	);
}

export default ItemCard;
