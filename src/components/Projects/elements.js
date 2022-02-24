import styled from 'styled-components'
import { AppointmentButton } from '../Header/elements'
export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 130px;
  @media (max-width: 1000px) {
    margin-bottom: 50px;
  }
`
export const H2 = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 5.2em;
  text-align: center;
  color: #b6ddc8;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  @media (max-width: 1000px) {
    font-size: 2.5em;
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    font-size: 2.5em;
    margin: 20px;
  }
`

export const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  background: rgba(0, 0, 0, 0.2);
  max-height: 800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProjectImage = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-image: ${(props) => `url(./assets/projects/${props.project}.png)`};
  @media (max-width: 1000px) {
    height: 50vh;
    min-height: 280px;
    background-attachment: scroll;
    background-image: ${(props) =>
      `url(./assets/projects/${props.project}.png)`};
  }
`
// `url(./assets/projects/${props.project}-mobile.png)`};

export const AppointmentButtonDown = styled(AppointmentButton)`
  margin-top: -30px;
  align-self: center;
`
export const ProjectText = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 20px;

  @media (max-width: 1000px) {
    margin-bottom: 60px;
  }

  // box-shadow: 1px 1px 18px 13px white;
`
export const ProjectURL = styled.a`
  color: black;
  text-align: center;
  text-decoration: underline;
  font-size: 0.9em;
  margin: 5px;
  @media (max-width: 1000px) {
    margin: 5px;
    font-size: 1.2em;
  }
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`
