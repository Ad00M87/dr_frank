import React from 'react';
import ContactUsComputer from './ContactUsComputer';
import ContactUsMobile from './ContactUsMobile';

class ContactUs extends React.Component {
  state = { width: window.innerWidth }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 1100;

    if (isMobile) {
      return(
        <ContactUsMobile />
      )
    } else {
      return(
        <ContactUsComputer />
      )
    }
  }
}

export default ContactUs;
