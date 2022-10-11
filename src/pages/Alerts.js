import ApprovalCard from '../components/ApprovalCard';
import HeaderBar from '../components/HeaderBar';
import NotificationCard from '../components/NotificationCard';

const Alerts = () => {
	return (
		<>
			<HeaderBar backButton={true} title="Alerts" />
			<div className="bg-[#36A03A] h-full py-20 p-3">
				<h3 className="font-bold text-3xl underline text-white">Approvals</h3>
				<div className="flex overflow-x-auto">
					<ApprovalCard />
					{/* <ApprovalCard />
					<ApprovalCard />
					<ApprovalCard /> */}
				</div>
				<h3 className="font-bold text-3xl underline text-white">
					Notifications
				</h3>
				<div className=" ">
					<NotificationCard />
					<NotificationCard />
					<NotificationCard />
					<NotificationCard />
					<NotificationCard />
					<NotificationCard />
					<NotificationCard />
				</div>
			</div>
		</>
	);
};

export default Alerts;
