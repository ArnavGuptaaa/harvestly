import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
const HeaderBar = ({ backButton, title, menuButton }) => {
	const navigate = useNavigate();

	return (
		<div className=" fixed w-full flex justify-between bg-[#36A03A] p-2">
			{backButton && (
				<div className="rounded bg-black p-2" onClick={() => navigate(-1)}>
					<MdArrowBack size={40} color="#fff" />
				</div>
			)}
			<h2 className="text-4xl text-white p-2 ml-3 font-extrabold">{title}</h2>
			{menuButton && (
				// onClick={() => navigate(-1)}
				<div className="p-2">
					<HiMenu size={40} color="#000" />
				</div>
			)}
		</div>
	);
};

export default HeaderBar;
