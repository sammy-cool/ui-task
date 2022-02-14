import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  border-radius: 10px;
  flex-wrap: wrap;
  margin: 71px 5px;
  min-width: 300px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: relative;
  transition: transform 450ms;
  &:hover {
    box-shadow: 0 0px 20px rgba(116, 141, 255);
    transform: scale(1.1);
    overflow: hidden;
    z-index: 1;
  }
`;

const Image = styled.img`
  background-size: cover;
  z-index: 2;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  position: absolute;
  margin-bottom: 11rem;
`;

const Name = styled.h1`
  margin-top: 14rem;
  font-size: 23px;
  color: #2a2a50;
`;

const Info = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Description = styled.p`
  color: gray;
  font-weight: 500;
  font-size: 19px;
`;

const Button = styled.button`
  padding: 10px;
  width: 11rem;
  height: 3rem;
  border-radius: 5px;
  color: gray;
  border: 1px solid grey;
  background-color: #ffffff;
  font-weight: bold;
  &:hover {
    border: none;
    color: white;
    background-color: #748dff;
    box-shadow: 0px 10px 20px rgba(116, 141, 255);
  }
`;

export default function Card({ user }) {
  return (
    <Container>
      <Image src="https://images.pexels.com/photos/9956077/pexels-photo-9956077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Info>
        <Name>{user.name}</Name>
        <Description>{user.company.name}</Description>
        <Button>Connect</Button>
      </Info>
    </Container>
  );
}
