import React from 'react';
import { MdCancel, MdCheckCircle } from 'react-icons/md';
function ApprovalCard() {
	return (
		<div className="m-2 w-80 h-50 bg-white rounded-2xl">
			<div className=" p-3 flex justify-center">
				<img
					className="rounded-full"
					src={'../images/item-1.png'}
					alt="Farmer Image"
				/>
				<p className="text-md  ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
				</p>
			</div>
			<div className=" p-3 flex justify-between">
				<div className="">
					<p>
						<strong>Item Name : </strong> Onions
					</p>
					<p>
						<strong>Weight : </strong> 10kgs
					</p>
					<p>
						<strong>Location : </strong> Lonavla
					</p>
				</div>
				<div className="flex">
					<div className="p-2">
						<MdCancel size={40} color="#FF0000" />
						<h3>Decline</h3>
					</div>
					<div className="p-2">
						<MdCheckCircle size={40} color="#04C50C" />
						<h3>Accept</h3>
					</div>
				</div>
			</div>
			<p className="p-1 mr-3 text-right text-sm text-[#969595] font-medium">
				3 Sep 2021,11.30am
			</p>
		</div>
	);
}

export default ApprovalCard;
