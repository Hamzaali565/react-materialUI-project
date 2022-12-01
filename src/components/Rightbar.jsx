import { NoEncryption } from '@mui/icons-material'
import { Avatar, AvatarGroup, Box, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2}
      sx={{ display: { xs: 'none', sm: "block" } }}>
      <Box position="fixed">
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LJaTp0HFRT2GHznf3n7iSAzu-z7och7Vc0GsJkTHWEk67OjQ0t0o6piSTpTv9sr7UI&usqp=CAU" />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAbM4Eyxjjk6DBI0yKDJktem8Pwugf7uLuci9Aa9tlcOGQbfm--4D7mAoDcaZxsLo-3s&usqp=CAU" />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1V3C3qx89X6hSQZUNhi0QDhNWki6gD6B7Qg&usqp=CAU" />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBSMhxhY6n02QNZBu83v1WAhoXP2CMUlG4A&usqp=CAU" />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFacn0pb12vsSRTPKRUDnxFrP8sj7st13r8A&usqp=CAU" />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFacn0pb12vsSRTPKRUDnxFrP8sj7st13r8A&usqp=CAU" />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFacn0pb12vsSRTPKRUDnxFrP8sj7st13r8A&usqp=CAU" />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFacn0pb12vsSRTPKRUDnxFrP8sj7st13r8A&usqp=CAU" />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFacn0pb12vsSRTPKRUDnxFrP8sj7st13r8A&usqp=CAU" />
        </AvatarGroup>


        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageListItem>
          <img
            src=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src=''
          />
        </ImageListItem>

      </Box>


    </Box>
  )
}

export default Rightbar