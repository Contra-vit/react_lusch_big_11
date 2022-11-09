//!!!! презенттационный компонент он только показывает!!!!


import React from 'react'

export default function List(data) {
  console.log('====================')
  console.log(data)
  console.log('====================')

 
  // console.log('information '+data)
  return (
    <div>
      <ul>
        {data.user.map((item)=> <li key={item.age*13}>{item.name}</li>)}
      </ul>
      </div>
  )
}
