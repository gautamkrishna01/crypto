import React from 'react'
import {Button, Stack, Typography} from "@mui/material"
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <Stack>
       <Box sx={{height:"10vh",display:"flex",}}>
        <Button >
          <Link to="/" >Home</Link>
          </Button>
          <Button >
          <Link to="/exchange">Exchange</Link>
          </Button>
          <Button >
          <Link to="/coins">Coins</Link>
          </Button>
       </Box>
      
    </Stack>
    </>
  )
}

export default Header