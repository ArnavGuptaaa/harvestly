import React from 'react';
// import item-1 from '../images/item-1.png';
function FarmerCard({ farmerName }) {
	return (
		<div className="m-3 p-20 w-60 h-80 rounded-2xl justify-center  items-center bg-slate-300">
			<img src={'../images/item-1.png'} alt="farmer-1" />
			<h3 className="font-medium text-lg">{farmerName}</h3>
		</div>
	);
}

export default FarmerCard;
