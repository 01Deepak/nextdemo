import React from 'react'

const StudentDetails = ({params}) => {
  return (
    <>
      <div>
        <p>Student Details</p>
        <p>Name : {params.student}</p>
      </div>
    </>
  )
}

export default StudentDetails