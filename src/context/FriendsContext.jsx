import {createContext, useState} from 'react';

const FriendsContext = createContext();

export const FriendsProvider = ({children}) => {

const [friends, setFriends] = useState([]);
const [loading, setLoading] = useState(true);

const searchFriends = async ()=>{
const result = await fetch("/friends",{
      method: 'GET'
    });
    const data = await result.json();
    setFriends(data);
    setLoading(false);
  }

return <FriendsContext.Provider value={{
  friends,
  searchFriends,
  loading,
}}>

{children}

</FriendsContext.Provider>


}

export default FriendsContext;
