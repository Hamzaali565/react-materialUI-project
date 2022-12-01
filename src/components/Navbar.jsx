import { Mail, Pets, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, styled, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import App from '../App'

const navbar = () => {
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
[theme.breakpoints.up("sm")]:{display: "flex"}
}))
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{display: "none"}
  }))
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
          <Avatar sx={{ width: 30, height: 30 }} src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/188384323_1447601038927019_7887706600818859341_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGCL_hYTwG3k08kQD1LvB8Nsc5T_WLrH_GxzlP9Yusf8UL9sMeXCGVl0UPyrwu9aI_Jxl1QzZohUXqIXpF8s3en&_nc_ohc=7FRlBip4joUAX-tigpc&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAwof37GJPcifAUMMjWyR4bvCvOynHtJ3UWO1Z1k0j0Pw&oe=63B01325" />
        </Icons>
<UserBox>
          <Avatar sx={{ width: 30, height: 30 }} src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/188384323_1447601038927019_7887706600818859341_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGCL_hYTwG3k08kQD1LvB8Nsc5T_WLrH_GxzlP9Yusf8UL9sMeXCGVl0UPyrwu9aI_Jxl1QzZohUXqIXpF8s3en&_nc_ohc=7FRlBip4joUAX-tigpc&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfAwof37GJPcifAUMMjWyR4bvCvOynHtJ3UWO1Z1k0j0Pw&oe=63B01325" />
<Typography variant='span'>Muhammad Hamza Ali</Typography>
</UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default navbar