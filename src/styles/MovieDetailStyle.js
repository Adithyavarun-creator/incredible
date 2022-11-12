import styled from "styled-components";
import { devices } from "../breakpoints";

export const MoviePageContainer = styled.div`
  position: relative;
  user-select: contain;

  .coverAllImage {
    position: absolute;
    opacity: 0.3;
    object-fit: contain;
    width: 100%;
    z-index: -1;
  }

  .genresBox {
    display: flex;
    gap: 15px;
    justify-content: center;

    @media ${devices.tabletsAndMobiles} {
      gap: 10px;
    }

    @media ${devices.smallMobiles} {
      gap: 10px;
    }
  }

  .genresButton {
    text-align: center;
    background-color: yellow;
    color: black;
    padding: 10px 18px;
    outline: none;
    border: none;
    font-weight: bold;
    font-size: 20px;
    border-radius: 15px;
    cursor: pointer;

    @media ${devices.tabletsAndMobiles} {
      padding: 8px 10px;
    }

    @media ${devices.smallMobiles} {
      padding: 6px 8px;
      font-size: 15px;
    }

    :hover {
      background-color: lightyellow;
    }
  }

  .desc {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;

    @media ${devices.smallMobiles} {
      gap: 20px;
    }

    @media ${devices.tabletsAndMobiles} {
      gap: 30px;
    }

    @media ${devices.tabletsAndIpads} {
      gap: 38px;
    }
  }

  .movieRuntime {
    margin-top: 10px;
    color: white;
  }

  .titleBox {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .movieIcon {
    height: 40px;
    width: 40px;
    color: yellow;
  }

  .nameshare {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .movieName {
    margin-top: 20px;
    font-size: 40px;
    font-weight: bolder;
    color: red;

    @media ${devices.smallMobiles} {
      font-size: 30px;
    }

    @media ${devices.tabletsAndMobiles} {
      font-size: 36px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 32px;
    }
  }

  .movieYear {
    font-size: 33px;
    font-weight: bolder;
    color: white;

    @media ${devices.smallMobiles} {
      font-size: 22px;
    }

    @media ${devices.tabletsAndMobiles} {
      font-size: 25px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 30px;
    }
  }

  .releaseBox {
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media ${devices.smallMobiles} {
      gap: 5px;
    }

    h1 {
      font-size: 33px;
      font-weight: bolder;
      color: white;

      @media ${devices.smallMobiles} {
        font-size: 28px;
      }
    }

    span {
      color: red;
      font-size: 33px;
      font-weight: bold;

      @media ${devices.smallMobiles} {
        font-size: 28px;
      }
    }

    .voteCount {
      color: red;
      font-size: 33px;
      font-weight: bold;
    }

    .likeIcon {
      height: 40px;
      width: 40px;
      color: #7cfc00;
      cursor: pointer;
    }
  }

  .releaseDate {
    font-size: 33px;
    font-weight: bolder;
    color: white;
    text-align: center;

    @media ${devices.smallMobiles} {
      font-size: 28px;
    }
  }

  .redColor {
    color: red;
  }

  .viewShare {
    display: flex;
    gap: 50px;
    justify-content: center;

    @media ${devices.smallMobiles} {
      gap: 20px;
      padding: 5px 5px;
      flex-direction: column;
      align-items: center;
    }
  }

  .viewBox {
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    text-align: center;
    @media ${devices.smallMobiles} {
      gap: 5px;
      align-items: center;
      justify-self: center;
    }

    h2 {
      font-size: 33px;
      font-weight: bolder;
      color: red;
    }
    span {
      color: white;
      font-size: 28px;
    }
  }

  .videoPlayer {
    /* height: 800px; */
    width: 100%;
  }

  .movieDes {
    font-size: 32px;
    font-weight: bold;
    text-align: justify;
    color: white;
    @media ${devices.smallMobiles} {
      font-size: 19px;
    }

    @media ${devices.tabletsAndMobiles} {
      font-size: 23px;
    }

    @media ${devices.tabletsAndIpads} {
      font-size: 28px;
    }
  }

  .tagBox {
    display: flex;
    gap: 3px;
    justify-content: center;

    @media ${devices.smallMobiles} {
      gap: 5px;
    }
  }
  .tagIcon {
    color: greenyellow;
    height: 25px;
    width: 25px;

    @media ${devices.smallMobiles} {
      height: 20px;
      width: 20px;
    }
  }

  .movieTag {
    font-size: 30px;
    font-weight: bold;
    color: red;

    @media ${devices.smallMobiles} {
      font-size: 20px;
    }
  }

  .shareBox {
    text-decoration: none;
    color: white;
    transition: transform 0.5s;
    font-size: 22px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    &.active {
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
  }
`;

export const ShareLinkBox = styled.div`
  text-decoration: none;
  color: white;
  transition: transform 0.5s;
  font-size: 22px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  &.active {
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
