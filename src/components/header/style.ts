import { Box, BoxProps, Flex } from 'rebass'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { space, SpaceProps, themeGet } from 'styled-system'
import { inheritLink } from '../globals'
import { Container } from '../layout'

export const NavbarWrapper = styled(Box)`
  height: 52px;
`

export const Navbar = styled(Flex)`
  height: 52px;
  background: ${themeGet('bg.default')};
  border-bottom: 1px solid ${themeGet('colors.grays.7')};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;
`

export const NavbarContainer = styled(Container)`
position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
`
NavbarContainer.defaultProps = { px: 'lg' }

export const Nav = styled(Flex)`
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`
Nav.defaultProps = { as: 'ul' }

export const NavItem = styled(Box)`
`
NavItem.defaultProps = { as: 'li' }

export const NavLink = styled(Link)<SpaceProps>`
  display: block;
  height: 100%;
  ${inheritLink};
  
  &:hover,
  &:focus {
    ${inheritLink};
    background: ${themeGet('colors.grays.8')};
  }
  
  ${space}
`
NavLink.defaultProps = { p: 'lg' }

export const Logo = styled(NavLink)`
  margin-right: ${themeGet('space.lg')}px;
  font-weight: ${themeGet('fontWeights.normal')};
`

export const NavProfile = styled(NavItem)`
`

export const ProfileDrop = styled(Box)`
  position: relative;
  height: 100%;
`

interface ProfileToggleProps extends BoxProps {
  isActive?: boolean
}

export const ProfileToggle = styled(Box)<ProfileToggleProps>`
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
  cursor: pointer;
  border-left: 1px solid ${themeGet('colors.grays.7')};
  border-right: 1px solid ${themeGet('colors.grays.7')}; 
  justify-content: flex-end;
  
  ${inheritLink};
  
  &:hover,
  &:focus {
    ${inheritLink};
    background-color: ${themeGet('colors.grays.8')};
  }
  
  ${props =>
  props.isActive && css`
    min-width: 192px;
  `}
`
ProfileToggle.defaultProps = { p: 'md' }

