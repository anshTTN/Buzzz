import {createContext, useState} from 'react';

const UsersContext = createContext();

export const UsersProvider = ({children}) => {

const [user, setUser] = useState([]);
const [loading, setLoading] = useState(true);

const searchUser = async (name)=>{
const result = await fetch(`/users/${name}`,{
      method: 'GET'
    });
    const data = await result.json();
    setUser(data);
  }

return <UsersContext.Provider value={{
  user,
  searchUser,
  loading,
}}>

{children}

</UsersContext.Provider>


}

export default UsersContext;
