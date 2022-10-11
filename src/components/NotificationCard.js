import React from 'react';
import item1 from '../images/item-1.png';
function NotificationCard() {
	return (
		<div className="m-3 w-100 h-50 bg-white rounded-2xl">
			<div className=" p-3 flex justify-center">
				<img
					className="rounded-full w-20 h-20"
					src={item1}
					alt="Farmer Image"
				/>
				<p className="text-md  ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
				</p>
			</div>
			<p className="p-1 mr-3 text-right text-sm text-[#969595] font-medium">
				3 Sep 2021,11.30am
			</p>
		</div>
	);
}

export default NotificationCard;
