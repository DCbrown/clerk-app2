import ClientDashboard from "./dashboard";
import { auth } from "@clerk/nextjs";

const Dashboard = () => {
  const { userId } = auth();

  return (
    <>
      <ClientDashboard user={userId} />
    </>
  );
};

export default Dashboard;
