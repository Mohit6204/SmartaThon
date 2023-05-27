import TeamShow from "./teamShow";

function TeamList({ teams }) {
     const renderedList = teams.map((team) => {
          return <TeamShow key={team.id} team={team} />
     });
     return (
          <div>{renderedList}</div>
     );
}

export default TeamList;