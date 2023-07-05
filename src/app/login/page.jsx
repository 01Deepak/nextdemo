'use client'
import { Button, Stack } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter();

  return (
    <>
    <Stack spacing={3} direction={'row'} sx={{padding: '40px'}}>
    <Button variant="outlined" onClick={() => router.push('/login/admin_login')}>Admin Login</Button>
    <Button variant="outlined" onClick={() => router.push('/login/user_login')}>User Login</Button>
    <Button variant="outlined" onClick={() => router.push('/login/student_login')}>Student Login</Button>
    </Stack>
    </>
  )
}

export default Login