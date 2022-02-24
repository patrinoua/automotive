import React from 'react'
import {
  Background,
  BackgroundCut,
  NavigationBar,
  NavItem,
  Name,
  MenuItem,
  Logo,

  // SeparatingLine,
  AppointmentButton,
  HeaderContent,
  Title,
  Subtitle
} from './elements'

const Header = () => (
  <Background>
    <NavigationBar>
      <NavItem>
        <Logo />
      </NavItem>
      <NavItem>
        <MenuItem to="about" spy={true} smooth={true} duration={500}>
          Σχετικά
        </MenuItem>
        <MenuItem to="projects" spy={true} smooth={true} duration={800}>
          Υπηρεσίες
        </MenuItem>
        <MenuItem to="contact" spy={true} smooth={true} duration={1000}>
          Επικοινωνία
        </MenuItem>
        {/* <MenuItem>Languages</MenuItem>  */}
      </NavItem>
    </NavigationBar>
    <HeaderContent>
      <Name>Ιωαννα Κολοκυθα</Name>
      <Title>Ψυχολoγος, Ψυχοθεραπευτρια</Title>
      <Subtitle>Δέχεται κατόπιν ραντεβού</Subtitle>
      <AppointmentButton
        href="https://calendly.com/kolokythaioannapsychologist/60min"
        target="_blank"
      >
        Κλείστε Συνεδρία
      </AppointmentButton>
    </HeaderContent>
    <BackgroundCut />
  </Background>
)

export default Header
