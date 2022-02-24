import React, {
  // lazy,
  Suspense,
} from 'react'
import {
  AboutMe,
  Photo,
  PhotoContainer,
  RegularWithMargin,
  Description2,
} from './elements'
import { TitleHide } from '../Typography'

const About = () => (
  <Suspense fallback={'Loading...'}>
    <TitleHide>Σχετικά</TitleHide>
    <PhotoContainer>
      <Photo src="assets/ioanna.png" />
    </PhotoContainer>
    <AboutMe>
      <Description2>
        <RegularWithMargin>
          Η Ιωάννα Κολοκυθά είναι Ψυχολόγος και Συστημική Οικογενειακή
          Ψυχοθεραπεύτρια. Έχει αποφοιτήσει από το Τμήμα Ψυχολογίας του Παντείου
          Πανεπιστημίου Αθηνών και έχει ειδικευτεί στην Οικογενειακή Θεραπεία
          παρακολουθώντας το τετραετές σεμινάριο εκπαίδευσης στην Συστημική
          Θεραπεία στο Ηράκλειο της Κρήτης, σε διακεκριμένο εργαστήριο που
          αποτελεί κομμάτι της Ευρωπαϊκής Ένωσης Οικογενειακών Θεραπευτών
          (European Family Therapy Association).
        </RegularWithMargin>
        <br />
        {/* <RegularHide>My CV</RegularHide> */}
      </Description2>
    </AboutMe>

    <Description2>
      <RegularWithMargin>
        Έχει εργαστεί εθελοντικά σε δομές που τη βοήθησαν να αναπτυχθεί στο
        δημιουργικό και στο επικοινωνιακό κομμάτι, μέσα από την οργάνωση δράσεων
        και σεμιναρίων στα πλαίσια ημερίδων ενημέρωσης και πρόληψης του γενικού
        πληθυσμού. Η εργασία της στο Ελληνικό Κέντρο Ψυχικής Υγιεινής και
        Ερευνών βοήθησε στην περαιτέρω ανάπτυξη των επικοινωνιακών της
        δεξιοτήτων, τόσο σε κοινωνικό επίπεδο, μέσα στη κοινότητα, όσο και σε
        διαπροσωπικό, μέσω της συνδιαλλαγής με παιδιά και εφήβους αλλά και τους
        γονείς τους.
      </RegularWithMargin>
      <br />
      {/* <RegularHide>My CV</RegularHide> */}
    </Description2>
  </Suspense>
)

export default About
