import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Background = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  // text-shadow: -3px 2px 4px rgba(0, 0, 0, 0.8);
  // @media (max-width: 1000px) {
  //   height: 50vh;
  //   background-attachment: fixed;
  //   background-position: top;
  // }
`

export const BackgroundCut = styled.div`
  background-image: url('assets/header-frame.svg');
  background-size: contain;
  background-repeat: no-repeat;
  bottom: -30px;
  z-index: 1;
  width: 101%;
  height: 10vw;
  max-height: 100px;
  position: absolute;
  @media (max-width: 1000px) {
    display: none;
    margin-bottom: 30px;
  }
`
export const NavigationBar = styled.div`
  // background: black;
  // height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
  height: 15vh;
  max-height: 130px;
  @media (max-width: 768px) {
    // margin: 0 5vw;
    // height: 20vh;
    display: none;
  }
`

export const NavigationBarLine = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderContent = styled.div`
  height: 50vh;
  min-height: 460px;
  width: 100%;
  display: flex;

  align-content: flex-end;
  flex-direction: column;
  // color: white;
  background-image: url('assets/background.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`
const HeaderMargins = styled.div`
  font-family: 'Montserrat', Helvetica, Arial, Lucida, sans-serif;
  margin-right: 70px;
  @media (max-width: 768px) {
    margin-right: 30px;
  }
`
export const Name = styled(HeaderMargins)`
  font-size: 3em;
  margin-top: 70px;
  margin-bottom: 40px;
  color: white;
  text-align: right;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'Robot Slab';
  // @media (max-width: 1000px) {
  //   font-size: 3em;
  //   line-height: 1.6;
  // }
  @media (max-width: 768px) {
    font-size: 1.4em;
    font-weight: 500;
    width: 90%;
  }
`

export const Title = styled(HeaderMargins)`
  font-weight: 300;
  font-size: 1.2em;
  text-align: right;
  color: white;
  align-items: center;
  margin-right: 70px;
  line-height: 2;
  font-family: 'Montserrat', Helvetica, Arial, Lucida, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.5em;

  // @media (max-width: 1000px) {
  //   font-size: 7em;
  //   line-height: 1.6;
  // }
  @media (max-width: 768px) {
    //   font-size: 3em;
    //   margin-left: 5vw;
    //   height: 80vh;
    width: 90%;
  }
`

export const Subtitle = styled(HeaderMargins)`
  // font-family: Open Sans, Arial, sans-serif;
  font-size: 1.2em;
  color: black;
  text-align: right;
  margin: 10px 70px;
  color: #fff;
  line-height: 1.7em;
  font-weight: 500;
  font-style: italic;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0;
  }
`
export const AppointmentButton = styled.a`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 300px;
  height: 70px;
  border-radius: 40px;
  align-self: flex-end;
  margin: 70px;
  margin-top: 40px;
  font-size: 1.3em;
  box-shadow: 0px 10px 20px 0px rgba(21, 195, 154, 0.1);
  font-family: 'Montserrat', Helvetica, Arial, Lucida, sans-serif;
  &:hover {
    cursor: pointer;
    // background: #2f76b0;
    background: #b6ddc8;
  }
  @media (max-width: 768px) {
    align-self: center;
  }
`
export const MenuItem = styled(Link)`
  // font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 8px;
  margin-right: 25px;
  font-size: 1.5em;
  // font-weight: 500;
  @media (max-width: 1000px) {
    // font-size: 2em;
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export const MenuIconContainer = styled.div`
  width: 25px;
  height: 25px;
  margin: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  @media (max-width: 1000px) {
    width: 50px;
    height: 50px;
    margin: 15px;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin: 0px;
  }
`
export const Logo = styled(MenuIconContainer)`
  width: 100px;
  height: 100px;
  background-image: url('assets/logo-big.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    position: absolute;
    top: 20px;
  }
`
export const LinkedinContainer = styled(MenuIconContainer)`
  margin-left: 0;
  &:hover {
    background: #2f76b0;
  }
`
export const MenuIcon = styled.a`
  margin: 2px;
  width: 16px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  // @media (max-width: 1000px) {
  //   width: 40px;
  //   height: 40px;
  //   margin: 5px;
  // }
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 5px;
  }
`
