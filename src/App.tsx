import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'
import { Container, AppBar, Toolbar, IconButton, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import React, { useState } from 'react'

export default function App () {
  const [open, setOpen] = useState(false)

  function openMenu () {
    setOpen(true)
  }

  function closeMenu () {
    setOpen(false)
  }

  return (
    <Container>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton color='inherit' onClick={openMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <h6>Ficus Tech</h6>
      </AppBar>
      <Drawer variant='persistent' anchor='left' open={open}>
        
      </Drawer>
    </Container>
  )
}
