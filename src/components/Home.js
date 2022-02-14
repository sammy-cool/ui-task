import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";
// import { userData } from "./../userData";

const Container = styled.div`
  padding: 30px;
  margin: 9rem 9rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome Users</h1>
      <Container>
        {users.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </Container>
    </>
  );
}

export default Home;
