'use client'
import React, { useEffect, useState } from 'react'
import { List,ListItem,ListItemAvatar,ListItemText,Avatar,Typography,Divider } from '@mui/material'

const Users = () => {
const [users,setUsers] = useState([])

  useEffect(  () => {
    async function fetchData() {
      const query = await fetch('https://dummyjson.com/users');
      const response = await query.json();
      console.log("response= ",response);
      setUsers(response.users)
    }
    fetchData()
  },[])

  return (
   <>
  <h1 style={{textAlign:'center'}}>user page</h1>
  {
    users.map((user) => {
      return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={user?.image} />
          </ListItemAvatar>
          <ListItemText
            primary={user?.firstName + ' ' + user?.lastName}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                 Email: 
                </Typography>
                {user.email}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        
      </List>
      )
    })
  }
 
   </>
  )
}

export default Users