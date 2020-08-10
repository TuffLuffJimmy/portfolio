import React from 'react'
import Hero from '../components/Hero'


const HomePage = (props) => {

  return(
    <div>
    <Hero title={props.title} subtitle={props.subtitle} text={props.text}/>
    <p>Home is working</p>
    </div>
  )
}

export default HomePage