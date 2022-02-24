import React, {
  // lazy,
  Suspense,
} from 'react'
import {
  AboutMe,
  RegularWithMargin,
  IntroText,
  FacebookIcon,
  IconText,
  IconContainer,
  Horizontal,
} from './elements'
import { TitleHide } from '../Typography'

const About = () => (
  <Suspense fallback={'Loading...'}>
    <TitleHide>Αρχική</TitleHide>
    <AboutMe>
      <IntroText>
        <RegularWithMargin>
          Σε όλες τις φάσεις της ζωής μας ένα από τα πιο δύσκολα πράγματα που
          έχουμε να αντιμετωπίσουμε είναι η αλλαγή. Κάτι που έρχεται να ταράξει
          την καθημερινότητά μας και τις σχέσεις μας όπως τις γνωρίζουμε, μας
          αποδιοργανώνει και φέρνει ένταση στη ζωή μας. Ερχόμαστε πρόσωπο με
          πρόσωπο με νέα συναισθήματα, με διαφορετικούς ανθρώπους και με
          απροσδόκητες καταστάσεις που χρειάζονται την προσοχή μας. Κλονίζεται η
          σχέση μας με τον κόσμο και υποφέρουμε από την εικόνα του κόσμου όπως
          πιστεύουμε ότι "θα έπρεπε" να είναι και όπως μας παρουσιάζεται. <br />{' '}
          <br />
          Εξίσου δύσκολη με τη βίωση μίας τέτοιας κατάστασης είναι και η απόφαση
          να απευθυνθούμε σε κάποιον που να έχει τις γνώσεις ώστε να μας
          βοηθήσει.
          <br /> <br />
          <Horizontal
            href="https://www.facebook.com/IoannaKolokythaPsychologist"
            target="_blank"
          >
            <IconContainer>
              <FacebookIcon />
            </IconContainer>
            <IconText>
              Ενημερωθείτε για events και ομιλίες στη σελίδα μας στο Facebook
            </IconText>
          </Horizontal>
        </RegularWithMargin>
        <br />
      </IntroText>
    </AboutMe>
    <br />
  </Suspense>
)

export default About
