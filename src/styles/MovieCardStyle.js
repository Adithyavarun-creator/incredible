import styled from "styled-components";
import { devices } from "../breakpoints";

export const MovieCardWrapper = styled.div`
  display: grid;
  border: 2px solid green;
  position: relative;
`;

export const ImageContainer = styled.img`
  height: 350px;
  width: 100%;
  object-fit: fill;

  @media ${devices.smallMobiles} {
    height: 250px;
    width: 100%;
    object-fit: fill;
  }
  @media ${devices.tabletsAndIpads} {
    height: 200px;
  }

  @media ${devices.tabletsAndMobiles} {
    height: 200px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  color: red;
  text-decoration: underline;

  @media ${devices.tabletsAndIpads} {
    font-size: 26px;
  }

  @media ${devices.tabletsAndMobiles} {
    font-size: 22px;
  }

  @media ${devices.smallMobiles} {
    color: white;
    font-size: 20px;
    font-weight: bolder;
    text-decoration: underline;
  }
`;

export const Description = styled.h2`
  font-size: 26px;
  text-align: center;

  @media ${devices.tabletsAndIpads} {
    font-size: 20px;
  }

  @media ${devices.tabletsAndMobiles} {
    font-size: 18px;
  }

  @media ${devices.smallMobiles} {
    font-size: 18px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  gap: 15px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media ${devices.tabletsAndIpads} {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media ${devices.tabletsAndMobiles} {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  @media ${devices.smallMobiles} {
    margin-top: 10px;
    margin-bottom: 10px;
    gap: 10px;
  }
`;

export const RatingBox = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;

  .starIcon {
    height: 45px;
    width: 45px;
    color: yellow;

    @media ${devices.tabletsAndIpads} {
      height: 45px;
      width: 45px;
      color: yellow;
    }

    @media ${devices.smallMobiles} {
      height: 35px;
      width: 35px;
    }
  }
`;

export const Rating = styled.span`
  position: absolute;
  right: 12px;
  color: black;
  top: 12px;
  font-weight: bolder;
  font-size: 18px;

  @media ${devices.smallMobiles} {
    right: 10px;
    top: 10px;
    font-weight: bolder;
    font-size: 14px;
  }
`;
