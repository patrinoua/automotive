import styled from 'styled-components'
import { H1, Regular } from '../Typography'

export const ContactRegular = styled(Regular)`
  color: white;
`

export const Title = styled(H1)`
  text-shadow: -3px 2px 4px rgba(0, 0, 0, 0.3);
`

export const ContactBlock = styled.div`
  margin-top: 50px;
  // background: #100d13;
  background-image: url('assets/background.png');
  background-position: bottom;
  background: #201c1c;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-shadow: -3px 2px 4px rgba(0, 0, 0, 0.8);
`

export const IconsContainer = styled.div`
  width: 100%;
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MenuIconContainer = styled.div`
  width: 62px;
  height: 62px;
  margin: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
    margin: 5px;
  }
`
export const FacebookContainer = styled(MenuIconContainer)`
  &:hover {
    // background: white;
  }
`
export const LinkedinContainer = styled(MenuIconContainer)`
  &:hover {
    background: #2f76b0;
  }
`
export const MenuIcon = styled.a`
  margin: 2px;
  width: 60px;
  height: 60px;
  background-size: contain;
  background-repeat: no-repeat;
`
export const FacebookIcon = styled(MenuIcon)`
  background-image: url('assets/facebook.png');
`
export const LinkedinIcon = styled(MenuIcon)`
  background-image: url('assets/linkedin.png');
`
