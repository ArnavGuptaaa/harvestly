import React from 'react';
import item1 from '../images/item-1.png';
function FarmerCard({ farmerName, amount }) {
	return (
		<div className="m-3 p-20 w-60 h-80 rounded-2xl justify-center  items-center bg-slate-300">
			<img src={item1} alt="farmer-1" />
			<h3 className="font-medium text-lg">{farmerName}</h3>
			{/* <p>Ships {amount} tons</p> */}
		</div>
	);
}

export default FarmerCard;
