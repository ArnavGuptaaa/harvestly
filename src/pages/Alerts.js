import Alert from '../components/Alert';
import HeaderBar from '../components/HeaderBar';

const Alerts = () => {
	return (
		<>
			<HeaderBar backButton={true} title="Alerts" />
			<div className="bg-[#36A03A] h-screen p-3">
				<Alert
					alertType="arrived"
					productName="Onions"
					weight={10}
					status="Arrived at godown."
				/>
				<Alert
					alertType="packed"
					productName="Onions"
					weight={10}
					status="Arrived at godown."
				/>
				<Alert
					alertType="dispatched"
					productName="Onions"
					weight={10}
					status="Arrived at godown."
				/>
				<Alert
					alertType="delivered"
					productName="Onions"
					weight={10}
					status="Arrived at godown."
				/>
			</div>
		</>
	);
};

export default Alerts;
