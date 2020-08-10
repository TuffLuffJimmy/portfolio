import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css'
import { render } from '@testing-library/react'

import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "Jimmy Echternach",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Jimmy Echternach',
        subtitle: 'Web Developer',
        text: 'test home'
      },
      projects: {
        title: 'Projects',
      },
      contact: {
        title: 'Contact Me',
      }
    }
  }


  render() {

    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Jimmy Echternach</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-toggle' className='border-0' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
                <Link className='nav-link' to='/contact'>Contact Me</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
          <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path='/projects' render={() => <ProjectsPage title={this.state.projects.title} />} />


          <Footer />
        </Container>
      </Router>

    )
  }
};

export default App
