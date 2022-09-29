import { BsCartCheck } from 'react-icons/bs';

const Delivered = () => {
	return (
		<div
			className={
				' w-16 h-20 rounded-lg bg-[#2C38A8] flex justify-center items-center'
			}
		>
			<BsCartCheck color="#fff" size={30} />
		</div>
	);
};

export default Delivered;
