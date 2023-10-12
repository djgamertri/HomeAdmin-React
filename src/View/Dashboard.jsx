import TopBar from "../Component/topbar/topbar";
import CardDashboard from "../Component/cardsDashboard/cardDashboard";
import TableResidentDashboard from "../Component/tableResidentsDashboard/tableResidentsDashboard";
import TableUserDashboard from "../Component/tableUsersDashboard/tableUserDashboard";
import "../Main.css";

function Dashboard() {
  return (
    <>
      <TopBar />
      <CardDashboard />
      <div className="details">
        <TableResidentDashboard />
        <TableUserDashboard />
      </div>
    </>
  );
}

export default Dashboard;
