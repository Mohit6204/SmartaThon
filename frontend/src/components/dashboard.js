import TeamList from "./teamList";

function Dashboard({ teams }) {
     return (
          <h1>Dashboard</h1>
          <TeamList teams={teams} />
     );
}
export default Dashboard;