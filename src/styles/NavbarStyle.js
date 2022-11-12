import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "../breakpoints";

export const NavigationContainer = styled.nav`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

export const NavListItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
  }

  li {
    font-size: 24px;
  }

  @media ${devices.smallMobiles} {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  @media (min-width: 1281px) {
    display: none;
  }

  @media ${devices.bigLaptopsAndDesktops} {
    display: none;
  }
  @media ${devices.tabletsAndIpads} {
    display: none;
  }
  @media ${devices.tabletsAndMobiles} {
    display: none;
  }

  @media ${devices.smallMobiles} {
    padding: 10px 10px;
    position: static;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
  }

  .icons {
    height: 40px;
    width: 40px;
    color: white;
  }
`;

export const IconBox = styled.div`
  @media ${devices.smallMobiles} {
    display: flex;
    justify-content: center;
    color: white;
  }
`;

export const ModalBox = styled.div`
  @media ${devices.tabletsAndMobiles} {
    display: none;
  }

  @media ${devices.smallMobiles} {
    align-items: center;
    justify-content: center;
    background-color: black;
    display: flex;
    align-items: center;
    /* width: 100%; */
    gap: 40px;
    flex-direction: column;
    list-style: none;
    padding-top: 20px;
    padding-bottom: 20px;
    border: 1px solid #e50914;
  }
`;
export const UnorderList = styled.ul`
  @media ${devices.tabletsAndMobiles} {
    display: none;
  }
  @media ${devices.smallMobiles} {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    color: white;
    /* background-color: yellow; */
  }
`;
export const MobNavList = styled.li`
  @media ${devices.tabletsAndMobiles} {
    display: none;
  }

  @media ${devices.smallMobiles} {
    font-size: 28px;
    list-style: none;
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: white;
  transition: transform 0.5s;
  font-size: 22px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  @media ${devices.tabletsAndMobiles} {
    font-size: 18px;
  }

  &.active {
    color: #e50914;
  }

  :hover {
    transform: scale(1.2);
    color: #e50914;
  }

  @media ${devices.smallMobiles} {
    color: #e50914;
    font-size: 22px;
  }

  .shareIcon {
    color: #1da1f2;
    height: 35px;
    width: 35px;

    @media ${devices.smallMobiles} {
      height: 30px;
      width: 30px;
    }
  }
`;

export const LogoImage = styled.img`
  height: 60px;
  width: 100px;

  @media ${devices.smallMobiles} {
    height: 40px;
    width: 58px;
  }
`;
