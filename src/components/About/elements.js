import styled from 'styled-components'
import { Regular } from '../Typography'

export const AboutMe = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  // justify-content: space-evenly;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    margin: 0;
  }
`
export const Photo = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border-radius: 80px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
  @media (max-width: 769px) {
    border-radius: 0;
    background-size: cover;
    margin-top: 50px;
    max-width: 100wv;
    width: 100%;
  }

  @media (max-width: 1000px) {
    border-radius: 0;
  }
`

export const PhotoContainer = styled.div`
  margin-right: 30px;
  width: 90%;
  min-width: 300px;
  min-height: 300px;
  max-width: 700px;
  max-height: 700px;
  margin: 0 60px;
  @media (max-width: 1000px) {
    background-size: cover;
    width: 100%;
  }
`

export const Description = styled(AboutMeBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;

  margin-left: 30px;
`
export const Description2 = styled(Description)`
  width: 86%;
  margin-top: 50px;
`
export const RegularWithMargin = styled(Regular)`
  @media (max-width: 1000px) {
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }
`
