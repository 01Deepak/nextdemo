'use client'
import Link from 'next/link'
import React from 'react'

const StudentList = () => {
  const students = ['Deepak','Akash','Shubham','Meet','Danish','Naman']
  return (
    <>
      <ul style={{textAlign:'center', padding:'50px', listStyleType:'none'}}>
        {
          students.map((student) => {
            return (
              <li style={{margin: '10px'}}>
                <Link href={`/students/${student}`}>{student}</Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default StudentList