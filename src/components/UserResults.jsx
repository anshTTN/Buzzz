import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import UserImage from "../images/user.jpg";
import Header from "./Header.jsx";

function UserResults(){

const params = useParams();
const name = params.name;

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

     async function searchUser(name){
      const result = await fetch(`/users/${name}`,{
            method: 'GET'
          });
          const data = await result.json();
          setUser(data);
          setLoading(false);
    }

useEffect(()=>{
  searchUser(name);
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



    <div className="card col-4">
      <img className="card-img-top" src={UserImage} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">View Profile</a>
      </div>
    </div>

 </div>
 </>
)


}



}

export default UserResults;
