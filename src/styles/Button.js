import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../breakpoints";

export const MovieButton = styled.button`
  padding: 10px 15px;
  background-color: black;
  color: white;
  border: none;
  offset: none;
  cursor: pointer;
  font-weight: bolder;
  font-size: 20px;
  text-align: center;
  border-radius: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const BackLink = styled(Link)`
  padding: 12px 26px;
  background-color: #e50914;
  color: white;
  border: none;
  offset: none;
  cursor: pointer;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;

  @media ${devices.tabletsAndIpads} {
    padding: 10px 20px;
  }

  @media ${devices.tabletsAndMobiles} {
    gap: 4px;
    padding: 2px 5px;
  }

  @media ${devices.smallMobiles} {
    padding: 10px 18px;
  }

  span {
    font-weight: bolder;
    font-size: 18px;
    text-align: center;

    @media ${devices.smallMobiles} {
      font-size: 15px;
    }

    @media ${devices.tabletsAndMobiles} {
      padding: 10px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 20px;
    }
  }

  :hover {
    color: #e50914;
    background-color: white;
  }
`;
