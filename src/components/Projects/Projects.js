import React, {
  // lazy,
  Suspense,
} from 'react'

import { Title, RegularCenter } from '../Typography'
import {
  H2,
  ProjectContainer,
  ProjectImage,
  ProjectText,
  AppointmentButtonDown,
  Overlay,
} from './elements'

const Projects = () => {
  const projects = [
    '10_atomiki',
    '20_omadiki',
    '30_efivwn',
    '40_zeugous',
    '50_online',
    '60_family',
  ]
  const listOfProjects = []

  projects.forEach((project) => {
    const currentProject = require(`./projectsData/${project}/project.json`)
    listOfProjects.push(currentProject)
  })

  return (
    <Suspense fallback={'Loading Projects...'}>
      <Title>Υπηρεσίες</Title>
      {listOfProjects.map(({ displayName, description, project }) => (
        <ProjectContainer>
          <ProjectImage
            // href={heroku_url}
            target="_blank"
            project={project}
          >
            <Overlay>
              <H2>{displayName}</H2>
            </Overlay>
          </ProjectImage>

          <ProjectText>
            <RegularCenter>{description}</RegularCenter>
          </ProjectText>
        </ProjectContainer>
      ))}
      <AppointmentButtonDown
        href="https://calendly.com/kolokythaioannapsychologist/60min"
        target="_blank"
      >
        Κλείστε Ραντεβού
      </AppointmentButtonDown>
    </Suspense>
  )
}

export default Projects
