import React from "react"
import "./Card.css"

const Card = ({ title, text, image }) => (
  <div className="Card">
    <img src={image} />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)

export default Card
