import React from 'react'
import hammer from '../hammer.jpg'
import Card from './card'


let desc = "Introducing the Mjölnir Home Hammer – the epitome of power disguised as an everyday tool! Crafted with precision and strength fit for the gods, this hammer is more than meets the eye. From hanging picture frames with ease to tackling stubborn nails and even serving as a trusty pry bar, the Mjölnir Home Hammer is your go-to solution for all household tasks. Built to last through the ages with its durable construction and ergonomic design, this hammer brings a touch of Norse mythology to your DIY adventures. Feel like a true superhero as you wield the might of Thor himself in the palm of your hand. Upgrade your toolbox and unleash the thunder with the Mjölnir Home Hammer today!";


const Home = (props) => {
  return (
   <Card image={hammer} title={"Hammer Of Thor"} description={desc}/>
  )
}

export default Home
