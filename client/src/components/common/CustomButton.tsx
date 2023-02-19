import { Button } from '@pankod/refine-mui'
// CustomButtonProps Know everything we has as a Props
import { CustomButtonProps } from 'interfaces/common'
import React from 'react'

const CustomButton = ({type,title,backgroundColor,color,fullWidth,icon, handleClick, disabled}:CustomButtonProps) => {
  return (
    <Button
    disabled = {disabled}
    type={type === 'submit' ? 'submit': 'button'}
    sx={{
      flex:fullWidth ? 1: 'unset',
      padding:'10px 15px',
      width:fullWidth ? '100%' : "fit-content",
      gap: '10px',
      fontWeight: 600,
      minWidth: 130,
      fontSize: 16,
      backgroundColor,
      color,
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