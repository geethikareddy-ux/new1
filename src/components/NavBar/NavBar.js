import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { useState, useEffect } from "react";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background: #000000;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  text-align: center;
  z-index: 9999;
`;

const Signature = styled.div`
  font-family: 'Brush Script MT', cursive;
  font-size: 28px;
  color: #4a9eff;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const LocationTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #cccccc;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Location = styled.div`
  font-weight: 300;
`;

const Time = styled.div`
  font-weight: 400;
  color: #4a9eff;
`;
const Navbar = () => {
const GreenDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #00ff00;
  border-radius: 50%;
  margin-bottom: 4px;
`;

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };
  return (
    <Nav data-aos="fade-down">
      <Signature>Gowtham</Signature>
      <LocationTime>
        <GreenDot />
        <Location>Ananthapur, Andhra Pradesh</Location>
        <Time>{formatTime(currentTime)}</Time>
      </LocationTime>
      <Burger />
    </Nav>
  );
};

export default Navbar;
