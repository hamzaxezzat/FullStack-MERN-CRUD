import { Button } from '@pankod/refine-mui'
// CustomButtonProps Know everything we has as a Props
import { CustomButtonProps } from 'interfaces/common'
import React from 'react'

const CustomButton = ({type,title,backgroundColor,color,fullWidth,icon,handleClick}:CustomButtonProps) => {
  return (
    <Button
    sx={{
      flex:fullWidth ? 1: 'unset',
      padding:'10px 15px',
      width:fullWidth ? '100%' : "fit-content",
      minWidth: 130,
      backgroundColor,
      color,
      fontSize: 16,
      fontWeight: 600,
      gap: '10px',
      textTransform: "capitalize",
      '&:hover':{
        opacity: '0.9',
        backgroundColor 
      }
    }}
    onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  )
}

export default CustomButton