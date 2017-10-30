import React from 'react';
import { Header, Segment, Image, Grid, Divider } from 'semantic-ui-react';
import graveyard from '../images/graveyard.jpg';
import europe from '../images/europe.jpg';
import castle from '../images/castle.jpg';
import profile from '../images/profile.jpg';
import Organs from './Organs';

class HomeMobile extends React.Component {

  render() {
    return(
      <div style={styles.pageFormat}>
        <Header
          as='h1'
          textAlign='center'
          style={styles.pageHeader}
        >IT'S ALIVE!</Header>
        <div style={styles.topBottomClear}>
          <Header
            as='h1'
            textAlign='center'
            style={styles.whiteText}
          >Dr. Victor Frankenstein</Header>
          <Image
            src={profile}
            size='medium'
            style={{borderRadius: '50%'}}
            centered
          />
          <Segment textAlign='center' style={styles.introduction}>
            <p style={styles.doubleSize}>Born in Naples, Italy</p>
            <p style={styles.doubleSize}>As a young scientist he invented an unorthodox scientific
            experiment using chemistry that gave life to non living tissue.
            With this new technique Dr. Frankenstein set out to create a humanoid creature.
            There was considerable effort to get all of the pieces
            for this creature. They all came from the graveyard and morgue!
            </p>
          </Segment>
        </div>
        <div style={styles.graveyard}></div>
        <div style={styles.topBottomClear}>
          <Header
            as='h1'
            textAlign='center'
            style={styles.whiteText}
          >How the Doctor did it...</Header>
          <Header
            as='h2'
            style={styles.bodyFacts}
            textAlign='center'
          >
            18 Total Bodies
            <Header.Subheader style={styles.orangeText}>
              dug up for the monster
            </Header.Subheader>
          </Header>
          <Header
            as='h2'
            style={styles.bodyFacts}
            textAlign='center'
          >
            8 Total Bodies
            <Header.Subheader style={styles.orangeText}>
              used for the head
            </Header.Subheader>
          </Header>
          <Header
            as='h2'
            style={styles.bodyFacts}
            textAlign='center'
          >
            5 Total Bodies
            <Header.Subheader style={styles.orangeText}>
              for arms and torso
            </Header.Subheader>
          </Header>
          <Header
            as='h2'
            style={styles.bodyFacts}
            textAlign='center'
          >
            5 Total Bodies
            <Header.Subheader style={styles.orangeText}>
              for legs
            </Header.Subheader>
          </Header>
          <Divider hidden />
          <Organs />
        </div>
        <div style={styles.castle}></div>
        <div style={styles.mapText}>
          <Segment textAlign='center' basic>
            <p
              style={styles.monsterDescription}
              className='handwritting'
            >
              "...upon looking at my creation I cannot think but to call it
              "creature", "fiend", "spectre", "the demon", "wretch", "devil",
              "thing", "being", and "ogre"...."</p>
          </Segment>
          <Divider />
          <Segment textAlign='center' basic>
            <p
              style={styles.finalDescription}
            >The creature and Dr. Frankenstein chased eachother across all of
            Europe. Their encounters over the years only ended in tragedy to all
            the people who were around them. The final chase took them up to the
            Arctic Circle where Dr. Frankenstein nearly died from exposure, and
            the monster was never seen again.</p>
          </Segment>
        </div>
        <div style={styles.europe}></div>
        <div style={styles.bottomClear}></div>
      </div>
    )
  }
}

const styles = {
  pageFormat: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 5px',
  },
  pageHeader: {
    fontFamily: '"Contrail One", cursive',
    fontSize: '5rem',
    color: 'green'
  },
  whiteText: {
    color: '#fff',
  },
  introduction: {
    backgroundColor: '#000',
    marginTop: '10px',
  },
  doubleSize: {
    fontSize: '2rem',
  },
  graveyard: {
    background: `url(${graveyard}) no-repeat center`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '500px',
  },
  bodyFacts: {
    margin: '20px 5px',
    borderLeft: '3px solid green',
    color: 'orange'
  },
  orangeText: {
    color: 'orange',
  },
  castle: {
    background: `url(${castle}) no-repeat center`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '500px',
  },
  mapText: {
    margin: '20px 5px',
  },
  monsterDescription: {
    fontSize: '2rem',
    padding: '5px',
  },
  finalDescription: {
    fontSize: '2rem',
  },
  europe: {
    background: `url(${europe}) no-repeat center`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '700px',
  },
  bottomClear: {
    height: '40px',
  },
}

export default HomeMobile;
