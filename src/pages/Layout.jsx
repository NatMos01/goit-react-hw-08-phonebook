import LogOut from "components/LogOut/LogOut"
import { useSelector } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { getAuthUser } from "store/selectors"
import styled from "styled-components"

const Layout = () => {

    const isAuth = useSelector(getAuthUser)


    return (<>
        <header >
            <nav>
                <StyledUl >
                    {isAuth && <LogOut email={isAuth.email} />}
                    {isAuth === null && <StyledNavLink to={'registration'}>Register</StyledNavLink>}
                    {isAuth === null && <StyledNavLink to={'login'}>Login</StyledNavLink>}
                </StyledUl>
            </nav>
        </header>
        <Outlet />
    </>
    )
}

export default Layout

const StyledNavLink = styled(NavLink)`
color: brown;
text-decoration: none;

&&.active{
    color: red;
}
`

const StyledUl = styled.ul`
                    display: flex;
                    flex-direction: row;
                    gap: 15px;
                    padding:  15px 0 15px 0;
                    margin: 0;
                    justify-content: center;
                    background-color: #CFE2F2;
                    align-items: center;
                    list-style: none;`