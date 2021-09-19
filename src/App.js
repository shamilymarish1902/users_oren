import React,{useEffect,useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  const [users, setUsers] = useState(null);
  const avatars=["https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg",
  "https://avatars.dicebear.com/v2/avataaars/%1Bkusernamem%7D.svg","https://avatars.dicebear.com/v2/avataaars/%7Bkusernamem%7D.svg",
  "https://avatars.dicebear.com/v2/avataaars/-%7Busername%7D%7D.svg","https://avatars.dicebear.com/v2/avataaars/m%7Busername%7D%7D.svg",
  "https://avatars.dicebear.com/v2/avataaars/%3D%7Busername%7D%7D.svg","https://avatars.dicebear.com/v2/avataaars/v%7Busername%7D%7D.svg",
  "https://avatars.dicebear.com/v2/avataaars/%7F%7Busername%7D%7D.svg","https://avatars.dicebear.com/v2/avataaars/%2F%7Busername%7D%7D.svg",
  "https://avatars.dicebear.com/v2/avataaars/%3F%7Busername%7D%7D.svg"
]

  useEffect(() => {
    getData();

    async function getData() {
      try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data) ;
      }
      catch (err) {
        console.error(err);
    }
    }
  }, []);

  return (
    <div>
      {users && (
        <div className="userContainer">
          {users.map((user, index) => (
            <div className="user" key={index}>
              <div className="userimg"><img className="usimg" src={avatars[index]} alt="avatar"></img></div>
              <div className="details">
              <h2>{user.name}</h2>
              <div><i className="far fa-envelope"><span>{user.email}</span></i> </div>         
              <div><i className="fa fa-phone"><span>{user.phone}</span></i></div>
              <div><i className="fa fa-globe"><span>{user.website}</span></i></div>
              </div>
              <div  className="idetails">
              <div><i className="far fa-heart center redheart"></i></div>
              <div><i className="fa fa-edit center"></i></div>
              <div><i className="fas fa-trash center"></i></div>
              </div>
            </div>
          ))}
  
        </div>
      )}
    </div>
  )
          }  

export default App;