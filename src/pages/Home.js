import HeaderBar from '../components/HeaderBar';
import {
	MdLocationOn,
	MdOutlineKeyboardArrowDown,
	MdSearch,
} from 'react-icons/md';
import ItemCard from '../components/ItemCard';
import FarmerCard from '../components/FarmerCard';
import item1 from '../images/item-1.png';
import item2 from '../images/item-2.png';
import item3 from '../images/item-3.png';
import item4 from '../images/item-4.png';
import item5 from '../images/item-5.png';
const Home = () => {
	return (
		<>
			<HeaderBar backButton={false} title="Harvestly" menuButton={true} />
			<div className="bg-white h-screen py-20 overflow-y-auto">
				<div className="flex">
					<div className="pl-2">
						<MdLocationOn size={40} color="#36A03A" />
					</div>
					<h2 className="text-2xl font-bold ">Deliver To</h2>
					<div className="pl-2">
						<MdOutlineKeyboardArrowDown size={40} color="#36A03A" />
					</div>
				</div>

				<h3 className="pl-12 font-medium text-lg">
					Sam’s Godown, MG road, Near Chandni Chowk, Kothrud, Pune (400 002).
				</h3>

				<div className=" m-3 p-2 rounded-lg bg-[#ECECEC] flex justify-between">
					<h4 className="ml-2 text-xl text-[#828282]">
						Search for Farmer or Category
					</h4>
					<div className="">
						<MdSearch size={40} color="#828282" />
					</div>
				</div>

				<div className="">
					<h3 className="pl-2 font-bold text-3xl">Popular Categories</h3>
					<div className="ml-2 flex overflow-x-auto">
						<ItemCard itemURL={item1} itemName="Cabbage" />
						<ItemCard itemURL={item2} itemName="Carrot" />
						<ItemCard itemURL={item3} itemName="Broccoli" />
						<ItemCard itemURL={item4} itemName="Cauliflower" />
						<ItemCard itemURL={item5} itemName="Milk" />
					</div>
				</div>

				<div className="">
					<h3 className="pl-2 font-bold text-2xl">123 Farmers Around You</h3>
					<div className="flex overflow-x-auto">
						<FarmerCard farmerName="Rakesh Kumar" />
						<FarmerCard farmerName="Rakesh Kumar" />
						<FarmerCard farmerName="Rakesh Kumar" />
						<FarmerCard farmerName="Rakesh Kumar" />
						<FarmerCard farmerName="Rakesh Kumar" />
						<FarmerCard farmerName="Rakesh Kumar" />
						<FarmerCard farmerName="Rakesh Kumar" />
						<FarmerCard farmerName="Rakesh Kumar" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
