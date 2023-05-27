function TeamShow({ team }) {
     return (
          <div className="card" p-3>
               <div className="card-content">
                    <div class="media-content">
                         <p class="title is-4">{team.title}</p>
                         <p class="subtitle is-6">Members Required {team.number}</p>
                    </div>
                    <div class="card-content">
                         <div class="content">
                              {team.description}
                         </div>
                    </div>
               </div>
               <footer class="card-footer">
                    <p class="card-footer-item">
                         <span>
                              <a href="https://twitter.com/codinghorror/status/506010907021828096"><h3>Apply</h3></a>
                         </span>
                    </p>
               </footer>
          </div >
     );
}

export default TeamShow;