import React, { useEffect } from 'react'
import './App.css'
// import Intro from './components/Intro'
// import About from './components/About'
// import Projects from './components/Projects/Projects'
import Contact from './components/Contact'
import { Element } from 'react-scroll'
import { H1, Regular } from './components/Typography'
import ReactGa from 'react-ga'
import styled from 'styled-components'

const black = '#120f0c'
export const yellow = '#f5d802'
export const red = '#e92354'
// const gray = '#242c36'
const gray = '#343d4a'
const darkGray = '#201c1c'

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${black};
`
const AppContent = styled.div`
  max-width: 940;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;
  background: ${darkGray};
`

const Block = styled.div`
  height: 100px;
  width: 100%;
  /* background: ${black}; */
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

export const Title = styled(H1)`
  text-shadow: -3px 2px 4px rgba(0, 0, 0, 0.3);
`
function App() {
  useEffect(() => {
    ReactGa.initialize('UA-145732904-1')
    ReactGa.pageview('/')
  }, [])

  return (
    <AppContainer className='appWrapper'>
      <AppContent className='appContainer'>
        <Block />
        <PhotoContainer>
          <Photo src='assets/automotive.png' />
        </PhotoContainer>

        <Title style={{ color: red }}>ΜΠΑΡΙΤΑΚΗΣ</Title>
        <Title style={{ color: 'white' }}>ΗΛΕΚΤΡΟΛΟΓΙΚΕΣ ΕΡΓΑΣΙΕΣ</Title>
        <Title style={{ color: 'white' }}>
          SERVICE ΚΛΙΜΑΤΙΣΤΙΚΩΝ ΑΥΤΟΚΙΝΗΤΩΝ
        </Title>
        <Title style={{ color: 'white' }}>ΑΞΕΣΟΥΑΡ</Title>
        <Title style={{ color: 'white' }}>ΦΙΜΕ/CARBON</Title>
        <Title style={{ color: 'white' }}>ΗΧΟΣΥΣΤΗΜΑΤΑ</Title>
        <Title style={{ color: 'white' }}>ΒΕΛΤΙΩΣΕΙΣ ΜΕΤΑΤΡΟΠΕΣ</Title>

        <Element name='contact' className='element'>
          <Contact />
        </Element>
        <div id='footer'>
          {' '}
          <a
            href='https://angelapatrinou.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Regular style={{ fontFamily: 'Open Sans', fontSize: '1.2em' }}>
              {' '}
              Web design & development by{' '}
              <span
                style={{
                  // color: 'blue',
                  textDecoration: 'underline',
                  fontFamily: 'Open Sans',
                }}
              >
                Angela Patrinou
              </span>{' '}
              © {new Date().getFullYear()}
            </Regular>
          </a>
        </div>
      </AppContent>
    </AppContainer>
  )
}

export default App
