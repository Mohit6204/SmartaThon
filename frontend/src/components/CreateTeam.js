import { useState } from "react";
import { Button } from "react-bootstrap";

function Createteam({ onAdd }) {
     const [team, setTeam] = useState({
          title: "",
          description: "",
          number: 0
     })

     function handlechange(event) {
          const { name, value } = event.target;

          setTeam(pr => {
               return {
                    ...pr,
                    [name]: value
               };
          });
     }

     function submitteam() {
          onAdd(team);
          setTeam({
               title: "",
               description: "",
               number: 0
          });
     }

     return (
          <div className="team-create">
               <div className="rform">
                    <form>
                         <h3>Add Team Details.</h3>
                         <div>
                              <label htmlFor="title">Title</label>
                              <br></br>
                              <input type="text" id="title" onChange={handlechange} name="title" value={team.title}></input>
                         </div>
                         <div>
                              <label htmlFor="discription">Discription</label>
                              <br></br>
                              <textarea id="description" onChange={handlechange} name="description" value={team.description}></textarea>
                         </div>
                         <div>
                              <label htmlFor="req">Number of Requirements</label>
                              <br></br>
                              <input type="number" id="req" onChange={handlechange} name="number" value={team.number}></input>
                         </div>
                         <br></br>
                         <Button variant="primary" onClick={submitteam}>Submit</Button>
                    </form>
               </div>
          </div>
     );
}
export default Createteam;