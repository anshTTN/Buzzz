import {useContext} from 'react';
import UsersContext from '../context/UsersContext.jsx';
import UserList from './UserList.jsx';

function UserResults(){

  const {user} = useContext(UsersContext);

  return (

  <>

 <UserList name={user.name} />

  </>
)

}

export default UserResults;
