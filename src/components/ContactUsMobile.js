import React from 'react'
import { Header, Form, Card, Icon, Segment } from 'semantic-ui-react';

class ContactUsMobile extends React.Component {
  state = {}

  render() {
    const { value } = this.state;
    return(
      <div style={styles.pageFormat}>
        <Header
          as='h1'
          textAlign='center'
          style={styles.whiteText}
        >Contact Us</Header>
        <Form style={styles.formStyle}>
          <Form.Input label='First name' placeholder='First name' />
          <Form.Input label='Last name' placeholder='Last name' />
          <Form.Input label='Phone' placeholder='Phone' />
          <Form.Input label='Email' placeholder='Email' />
          <Form.Group inline>
            <label>Preferred Method of Contact</label>
            <Form.Radio label='Phone' value='ph' checked={value === 'ph'} onChange={this.handleChange} />
            <Form.Radio label='Email' value='em' checked={value === 'em'} onChange={this.handleChange} />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Form.Button><Icon name='mail' />Submit</Form.Button>
        </Form>
        <Header
          as='h1'
          textAlign='center'
          style={styles.whiteText}
        >Announcements</Header>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              Need A Body Part?
            </Card.Header>
            <Card.Description>
              We have a wide variety of options to fit your needs.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='book' />
              Click here to see Listings
            </a>
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              Looking for a Doctor?
            </Card.Header>
            <Card.Description>
              Dr. Frankenstein is accepting new patients.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='doctor' />
              Click here to schedule
            </a>
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              Open positions for clinical trial
            </Card.Header>
            <Card.Description>
              Need some extra money?
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='lab' />
              Click here for details
            </a>
          </Card.Content>
        </Card>
        <Segment style={styles.dividerStyle}></Segment>
      </div>
    )
  }
}

const styles = {
  pageFormat: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '0 5px',
  },
  whiteText: {
    color: '#fff'
  },
  formStyle: {
    backgroundColor: 'green',
    padding: '10px',
    borderRadius: '10px',
  },
  dividerStyle: {
    backgroundColor: '#000',
    height: '20px',
    margin: '0',
  },
}

export default ContactUsMobile;
