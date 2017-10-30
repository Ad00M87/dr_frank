import React from 'react';
import { Header, Segment, Image, Grid, Divider } from 'semantic-ui-react';
import graveyard from '../images/graveyard.jpg';
import europe from '../images/europe.jpg';
import castle from '../images/castle.jpg';
import profile from '../images/profile.jpg';
import Organs from './Organs';

class HomeComputer extends React.Component {

  render() {
    return(
     <div style={styles.pageFormat}>
        <Header
          as='h1'
          textAlign="center"
          style={styles.pageHeader}
        >
          IT'S ALIVE!
        </Header>
        <div style={styles.topBottomClear}>
          <Header as='h1' textAlign='center' style={styles.whiteText}>Dr. Victor Frankenstein</Header>
          <Grid columns={2}>
            <Grid.Column width={5}>
              <Image src={profile} size='medium' style={{borderRadius: '50%'}} />
            </Grid.Column>
            <Grid.Column width={11}>
              <Segment textAlign='center' style={styles.introduction}>
                <p style={styles.doubleSize}>Born in Naples, Italy</p>
                <p style={styles.doubleSize}>As a young scientist he invented an unorthodox scientific
                experiment using chemistry that gave life to non living tissue.
                With this new technique Dr. Frankenstein set out to create a humanoid creature.
                There was considerable effort to get all of the pieces
                for this creature. They all came from the graveyard and morgue!
                </p>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
        <div style={styles.graveyard}></div>
        <div style={styles.topBottomClear}>
          <Header as='h1' textAlign='center' style={styles.whiteText}>How the Doctor did it...</Header>
          <Grid columns={4}>
            <Grid.Column>
                <Header
                  as='h2'
                  style={styles.bodyFacts}
                >
                  18 Total Bodies
                  <Header.Subheader style={styles.orangeText}>
                    dug up for the monster
                  </Header.Subheader>
                </Header>
            </Grid.Column>
            <Grid.Column>
              <Header
                as='h2'
                style={styles.bodyFacts}
              >
                8 Total Bodies
                <Header.Subheader style={styles.orangeText}>
                  used for the head
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header
                as='h2'
                style={styles.bodyFacts}
              >
                5 Total Bodies
                <Header.Subheader style={styles.orangeText}>
                  for arms and torso
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header
                as='h2'
                style={styles.bodyFacts}
              >
                5 Total Bodies
                <Header.Subheader style={styles.orangeText}>
                  for legs
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid>
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
  bodyFacts: {
    margin: '50px 10px',
    borderLeft: '3px solid green',
    padding: '5px',
    color: 'orange',
  },
  pageFormat: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 200px',
  },
  pageHeader: {
    fontFamily: '"Contrail One", cursive',
    fontSize: '5rem',
    color: 'green'
  },
  topBottomClear: {
     margin: '40px 0',
  },
  bottomClear: {
    height: '40px',
  },
  introduction: {
    backgroundColor: '#000',
    marginTop: '50px',
  },
  doubleSize: {
    fontSize: '2rem',
  },
  mapText: {
    margin: '20px 80px',
  },
  monsterDescription: {
    fontSize: '4rem',
    padding: '10px',
  },
  finalDescription: {
    fontSize: '3rem',
  },
  whiteText: {
    color: '#fff',
  },
  orangeText: {
    color: 'orange',
  },
  graveyard: {
    background: `url(${graveyard}) no-repeat center`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '500px',
  },
  europe: {
    background: `url(${europe}) no-repeat center`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '700px',
  },
  castle: {
    background: `url(${castle}) no-repeat center`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '500px',
  }
}

export default HomeComputer;
