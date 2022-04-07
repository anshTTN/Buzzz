import UserImage from "../images/user.jpg";
import Header from "./Header.jsx";

function UserList({name}){



return (

  <>
  <Header />
  <div className="row py-4 px-4 searched-users">



  <div className="card col-4">
    <img className="card-img-top" src={UserImage} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">View Profile</a>
    </div>
  </div>



{/*

  <div className="card col-4">
    <img className="card-img-top" src={UserImage} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Ankit Bisht</h5>
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">View Profile</a>
    </div>
  </div>



  <div className="card col-4">
    <img className="card-img-top" src={UserImage} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Ankit Bisht</h5>
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">View Profile</a>
    </div>
  </div>

  */}





  </div>
  </>
);

}

export default UserList;
