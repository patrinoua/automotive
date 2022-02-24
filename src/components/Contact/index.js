import React from 'react'
import {
  Title,
  ContactBlock,
  ContactRegular,
  IconsContainer,
  FacebookContainer,
  FacebookIcon,
} from './elements'
import { yellow, red } from '../../App'

const Contact = () => (
  <ContactBlock>
    <Title style={{ color: yellow }}>Επικοινωνία</Title>
    {/* <ContactRegular>kolokythai@gmail.com</ContactRegular> */}
    <h1 style={{ color: red }}>+30 698 512 2233</h1>
    <br />
    <ContactRegular>Μιλτιάδη Καρατζή 171</ContactRegular>
    <ContactRegular>71 601</ContactRegular>
    <ContactRegular>Νέα Αλικαρνασσός, Ηράκλειο</ContactRegular>
    <IconsContainer>
      {/* <FacebookContainer>
        <FacebookIcon
          href='https://www.facebook.com/IoannaKolokythaPsychologist'
          target='_blank'
        />
      </FacebookContainer> */}
    </IconsContainer>
  </ContactBlock>
)

export default Contact
