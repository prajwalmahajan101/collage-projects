import React from 'react'

export default function Student(props) {
    const { data } = props
  return (
    <div className="Student">
        <div>Registration No. : {data.regNo}</div>
        <div>Name : {data.name}</div>
        <div>Department : {data.dept}</div>
    </div>
  )
}
