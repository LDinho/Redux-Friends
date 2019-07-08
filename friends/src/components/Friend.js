import React from 'react'

const Friend = ({friend: {name, age, email}}) => {
  return (
    <li>
      <div>
        <h2>Name: {name}</h2>

        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
    </li>
  )
}

export default Friend;
