import styled from 'styled-components'
import { Regular } from '../Typography'

export const AboutMe = styled.div`
  display: flex;
  width: 100%;
  // height: 100%;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  position: relative;
`
export const AboutMeBox = styled.div`
  width: 50%;
  height: 50%;
  min-width: 300px;
  min-height: 300px;
  max-width: 700px;
  max-height: 700px;
  margin: 0 60px;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 80%;
    min-height: 220px;
    max-height: fit-content;
    margin: 0;
  }
`

export const Description = styled(AboutMeBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;

  margin-left: 30px;
  @media (max-width: 1000px) {
    // margin: 0 40px;
  }
`
export const IntroText = styled(Description)`
  width: 86%;
  // margin-top: 50px;
`
export const RegularWithMargin = styled(Regular)`
  @media (max-width: 1000px) {
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }
`
export const IconText = styled.span`
  font-weight: 600;
  @media (max-width: 769px) {
    text-align: center;
  }
`

export const IconContainer = styled.span`
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
export const Horizontal = styled.a`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: 140px;

    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`
export const FacebookIcon = styled.div`
  margin: 2px;
  width: 60px;
  height: 60px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('./assets/facebook.png');
`
