import React, { useEffect, useState } from 'react'
import categories from '../data/db'

export default function Categories() {

  const [mouseOver, setMouseOver] = useState(false)
  const [current, setCurrent] = useState(null)

  const cats = categories
  console.log(cats)

  return (
    <div className='category-list'>
      {cats && cats.map((cat) => {
        return (
          <div key={cat.id} className="category" onMouseOver={(e) => {setMouseOver(true); setCurrent(cat.id);}} onMouseLeave={(e) => {setMouseOver(false); setCurrent(null);}}>
            <img src={cat.image} />
            {current !== cat.id && <h2>{cat.title}</h2>}
            <div className="category-text">
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
              <button>BUY NOW</button>
            </div>
          </div>
        )
      }) }
    </div>
  )
}
