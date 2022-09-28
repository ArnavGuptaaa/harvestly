import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const HeaderBar = ({ backButton, title }) => {
	const navigate = useNavigate();

	return (
		<div className="w-full flex justify-start items-center bg-[#36A03A] p-3">
			{backButton && (
				<div className="rounded bg-black p-2" onClick={() => navigate(-1)}>
					<IoIosArrowBack size={32} color="#fff" />
				</div>
			)}
			<h2 className="text-4xl text-white p-2 ml-3 font-extrabold">{title}</h2>
		</div>
	);
};

export default HeaderBar;
