import styled from 'styled-components'

export const H1 = styled.h1`
  margin: 50px;
  font-weight: 500;
  font-size: 2.6em;
  @media (max-width: 1000px) {
    font-size: 4em;
  }
  @media (max-width: 768px) {
    font-size: 3em;
  }
`
export const Title = styled(H1)`
  margin-top: 80px;
  margin-bottom: 60px;
`
export const TitleHide = styled(Title)`
  @media (max-width: 1000px) {
    // display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const Regular = styled.div`
  color: black;
  font-size: 1.4em;
  line-height: 1.88;
  @media (max-width: 1000px) {
    // font-size: 1.5em;
  }
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`
export const RegularCenter = styled(Regular)`
  display: flex;
  justify-content: center;
  margin: 0 30px;
  text-align: center;
`
export const RegularHide = styled(Regular)`
  @media (max-width: 1000px) {
    display: none;
  }
`
