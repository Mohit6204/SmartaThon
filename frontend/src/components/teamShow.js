function TeamShow({ team }) {
     return (
          <div className="team-show">
               <div className="card" p-3>
                    <div className="card-content">
                         <div class="media-content">
                              <p class="title is-4">{team.title}</p>
                              <p class="subtitle is-6">Members Required {team.number}</p>
                         </div>
                         <div class="content">
                              {team.description}
                         </div>
                         <span>
                              <a href="https://twitter.com/codinghorror/status/506010907021828096"><h3>Apply</h3></a>
                         </span>
                         <div className="actions">
                              <button className="edit">Edit</button>
                              <button className="delete">Delete</button>
                         </div>
                    </div>
               </div >
          </div>
     );
}

export default TeamShow;