// import { FiHome, FiAlertCircle } from 'react-icons/fi';
import { BsPersonFill } from 'react-icons/bs';
// import { BiCartAlt } from 'react-icons/bi';
import { MdHome } from 'react-icons/md';
import { HiBell, HiShoppingBag } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
	const location = useLocation();
	return (
		<div className="w-full flex justify-around items-center rounded-t-3xl fixed bottom-0 border border-gray-400 bg-white">
			<div className="p-3">
				<Link to="/" className="focus:bg-transparent active:bg-transparent">
					{/* <FiHome
						size={32}
						color={location.pathname === '/' ? '#36A03A' : '#000'}
					/> */}
					<MdHome
						size={32}
						color={location.pathname === '/' ? '#36A03A' : '#000'}
					/>
				</Link>
			</div>
			<div className="p-3">
				<Link to="/orders">
					{/* <BiCartAlt
						size={32}
						color={location.pathname === '/orders' ? '#36A03A' : '#000'}
					/> */}
					<HiShoppingBag
						size={32}
						color={location.pathname === '/orders' ? '#36A03A' : '#000'}
					/>
				</Link>
			</div>
			<div className="p-3">
				<Link to="/alerts">
					{/* <FiAlertCircle
						size={32}
						color={location.pathname === '/alerts' ? '#36A03A' : '#000'}
					/> */}
					<HiBell
						size={32}
						color={location.pathname === '/alerts' ? '#36A03A' : '#000'}
					/>
				</Link>
			</div>

			<div className="p-3">
				<Link to="/profile">
					<BsPersonFill
						size={32}
						color={location.pathname === '/profile' ? '#36A03A' : '#000'}
					/>
				</Link>
			</div>
		</div>
	);
};

export default BottomNav;
