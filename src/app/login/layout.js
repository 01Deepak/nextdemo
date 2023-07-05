'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const LoginLayout = ({children}) => {
  const pathName = usePathname();
  const exclusionArray = ['/login/student_login']

  let isLoginLayoutVisible = exclusionArray.indexOf(pathName) < 0;
  console.log("pathname == ",pathName);
  return (
    <>
    {
      isLoginLayoutVisible && 
      <div style={{textAlign:'center'}}>
      <h2>hello, I am login layout</h2>
      </div>
    }
   
      {children}
    </>
  )
}

export default LoginLayout


