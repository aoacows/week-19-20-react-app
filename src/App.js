import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      < FriendCard 
      name={friends[0].name} 
      image={friends[0].image} 
      occupation={friends[0].occupation}
      location={friends[0].location}/>
      < FriendCard 
      name={friends[0].name} 
      image={friends[0].image} 
      occupation={friends[0].occupation}
      location={friends[0].location}/>
      < FriendCard 
      name={friends[0].name} 
      image={friends[0].image} 
      occupation={friends[0].occupation}
      location={friends[0].location}/>
    </Wrapper>
  );
}

export default App;
