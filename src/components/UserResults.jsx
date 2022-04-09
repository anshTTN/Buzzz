import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import UserImage from "../images/user.jpg";
import Header from "./Header.jsx";

function UserResults(){

const params = useParams();
const name = params.name;

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

     async function searchUsers(name){
      const result = await fetch(`/users/${name}`,{
            method: 'GET'
          });
          const data = await result.json();
          setUsers(data);
          setLoading(false);
    }

useEffect(()=>{
  searchUsers(name);
}, []);

if(loading){
  return(
    <h1> Loading .. </h1>
  )
}else{

  return (

    <>
    <Header />
    <div className="row py-4 px-4 searched-users">

{users.map((user) => (

    <div className="card col-4">
      <img className="card-img-top" src={UserImage} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p>{user.bio}</p>
        <a href="#" class="btn btn-primary">View Profile</a>
      </div>
    </div>

))}

 </div>
 </>
)


}



}

export default UserResults;
