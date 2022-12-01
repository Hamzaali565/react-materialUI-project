import { Box } from '@mui/material';
import React from 'react'

export const Sidebar = () => {
  return (
    <Box bgcolor="red" flex={1} p={2}
    sx={{display: {xs:'none', sm:"block"}}}>Sidebar</Box>
  )
}
export default Sidebar;