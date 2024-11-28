import NavBar from '../components/navBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </>
    )
}

export default Layout