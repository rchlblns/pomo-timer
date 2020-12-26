import React from "react";
import styled from "styled-components";

const StyledNav = styled.ul`
margin: 0;
padding: 0;
display: flex;
background-color: #282c34;
`

const StyledNavItem = styled.li`
list-style-type: none;
margin: 0 auto;
font-size: 3vh;
padding-top: 1.5vh;
padding-bottom: 1.5vh;
`

const StyledLink = styled.a`
text-decoration: none;
color: #FFFFFF;
`

const Nav = () => {
    return (
        <StyledNav>
            <StyledNavItem>
                <StyledLink a href="#">
                    Pomo Timer
                </StyledLink>
            </StyledNavItem>
            {/* <StyledNavItem>
                <StyledLink a href="#">
                    Login
                </StyledLink>
            </StyledNavItem> */}
        </StyledNav>
    )
}

export default Nav;