'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const LoginLayout = ({children}) => {
  const pathName = usePathname();
  console.log("pathname == ",pathName);
  return (
    <>
    {
      pathName !== '/login/student_login' && 
      <div style={{textAlign:'center'}}>
      <h2>hello, I am login layout</h2>
      </div>
    }
   
      {children}
    </>
  )
}

export default LoginLayout


