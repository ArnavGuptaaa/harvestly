import Arrived from './AlertThumbs/Arrived';
import Packed from './AlertThumbs/Packed';
import Dispatched from './AlertThumbs/Dispatched';
import Delivered from './AlertThumbs/Delivered';

const Alert = ({ alertType, productName, weight, status }) => {
	return (
		<div className="w-full bg-white p-3 flex rounded-xl mb-4">
			{alertType === 'arrived' && <Arrived />}
			{alertType === 'packed' && <Packed />}
			{alertType === 'dispatched' && <Dispatched />}
			{alertType === 'delivered' && <Delivered />}
			<div className="ml-5">
				<p className="text-lg">
					<b>Product Name:</b> {productName}
				</p>
				<p className="text-lg">
					<b>Weight:</b> {weight} Kgs
				</p>
				<p className="text-lg">
					<b>Status:</b> {status}
				</p>
			</div>
		</div>
	);
};

export default Alert;
