import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Ul = styled.ul`
  list-style: none;
  display: none;
  
  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 30px;
  }
  
  li {
    position: relative;
    padding: 5px 10px;
    cursor: pointer;
    
    @media (min-width: 769px) {
      padding: 10px 15px;
    }
  }
  
  li a{
    text-decoration: none;
    color: #ffffff;
    font-weight: 400;
    font-size: 14px;
    transition: color 0.3s ease;
    
    &:hover {
      color: #4a9eff;
    }
  }
  
  li:before,
  li:after {
    position: absolute;
    opacity: 0;
    width: 0%;
    height: 1px;
    content: "";
    background: #4a9eff;
    transition: all 0.3s;
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  li:before {
    left: 0px;
    top: 0px;
  }
  li:after {
    right: 0px;
    bottom: 0px;
  }
  li:hover:before,
  li:hover:after {
    opacity: 1;
    width: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 80px;
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
    
    li {
      color: #fff;
      margin: 10px 0;
      padding: 15px 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
      &:hover {
        background: rgba(74, 158, 255, 0.1);
      }
      
      a {
        font-size: 16px;
        font-weight: 300;
        letter-spacing: 1px;
      }
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  const handleLinkClick = () => {
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <Ul open={open}>
      <li>
        <Link 
          to="landing" 
          spy={true} 
          smooth={true} 
          offset={0} 
          duration={500}
          onClick={handleLinkClick}
        >
          HOME
        </Link>
      </li>
      <li>
        <Link 
          to="about" 
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500}
          onClick={handleLinkClick}
        >
          ABOUT
        </Link>
      </li>
      <li>
        <Link 
          to="skills" 
          spy={true} 
          smooth={true} 
          offset={-30} 
          duration={500}
          onClick={handleLinkClick}
        >
          SKILLS
        </Link>
      </li>
      <li>
        <Link 
          to="project" 
          spy={true} 
          smooth={true} 
          offset={-30} 
          duration={500}
          onClick={handleLinkClick}
        >
          PROJECTS
        </Link>
      </li>
      <li>
        <Link 
          to="contact" 
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500}
          onClick={handleLinkClick}
        >
          CONTACT
        </Link>
      </li>
      <li>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          RESUME
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
