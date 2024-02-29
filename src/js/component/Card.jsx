import React from 'react'

export default function Card(porps) {

  const { content } = porps

  return (
    <div className="card col bg-secondary">
      <div style={{ fontFamily: "serif", textAlign: "center", fontSize: "100px" }} className={`card-body`}>
        {!content ? 0 : content}
      </div>
    </div>
  )
}
