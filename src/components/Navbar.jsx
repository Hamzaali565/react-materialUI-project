import { Mail, Pets, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography, } from '@mui/material'
import { Box, } from '@mui/system'
import React, { useState } from 'react'
import App from '../App'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))
const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "flex" }
}))
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "none" }
}))
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>SOURCE</Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search> <InputBase placeholder='Search' /> </Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }}
            src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/188384323_1447601038927019_7887706600818859341_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGCL_hYTwG3k08kQD1LvB8Nsc5T_WLrH_GxzlP9Yusf8UL9sMeXCGVl0UPyrwu9aI_Jxl1QzZohUXqIXpF8s3en&_nc_ohc=7FRlBip4joUAX-tigpc&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAwof37GJPcifAUMMjWyR4bvCvOynHtJ3UWO1Z1k0j0Pw&oe=63B01325"
            onClick = {(e) => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }}
           src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/188384323_1447601038927019_7887706600818859341_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGCL_hYTwG3k08kQD1LvB8Nsc5T_WLrH_GxzlP9Yusf8UL9sMeXCGVl0UPyrwu9aI_Jxl1QzZohUXqIXpF8s3en&_nc_ohc=7FRlBip4joUAX-tigpc&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAwof37GJPcifAUMMjWyR4bvCvOynHtJ3UWO1Z1k0j0Pw&oe=63B01325"
           onClick = {(e) => setOpen(true)}
           />
          <Typography variant='span'>Muhammad<br></br>Hamza Ali</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose = {(e)=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick = {(e) => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick = {(e) => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick = {(e) => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar