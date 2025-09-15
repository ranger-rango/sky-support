import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

// export const Route = createRootRoute();


// import { createFileRoute } from '@tanstack/react-router'
// import { Outlet } from "@tanstack/react-router";
import SidePanel from '../components/side-panel';
import Footer from '../components/footer';
import "/front-end/react/sky-support/src/index.css"
import { Toaster } from "react-hot-toast"


const RootLayout = () => (
    <>
        <SidePanel />
        <Footer items={
            [
                {
                    htmlEl : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 15.8333H19.1667V17.5H0.833333V15.8333H2.5V3.33333C2.5 3.11232 2.5878 2.90036 2.74408 2.74408C2.90036 2.5878 3.11232 2.5 3.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V15.8333H15.8333V9.16667H14.1667V7.5H16.6667C16.8877 7.5 17.0996 7.5878 17.2559 7.74408C17.4122 7.90036 17.5 8.11232 17.5 8.33333V15.8333ZM4.16667 4.16667V15.8333H10.8333V4.16667H4.16667ZM5.83333 9.16667H9.16667V10.8333H5.83333V9.16667ZM5.83333 5.83333H9.16667V7.5H5.83333V5.83333Z" fill="#144D5A"/></svg>,
                    label : "Sky World Limited"
                },
                {
                    htmlEl : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33333 18.3334C3.33333 16.5653 4.03571 14.8696 5.28595 13.6193C6.53619 12.3691 8.23188 11.6667 9.99999 11.6667C11.7681 11.6667 13.4638 12.3691 14.714 13.6193C15.9643 14.8696 16.6667 16.5653 16.6667 18.3334H15C15 17.0073 14.4732 15.7355 13.5355 14.7978C12.5978 13.8602 11.3261 13.3334 9.99999 13.3334C8.67391 13.3334 7.40214 13.8602 6.46446 14.7978C5.52678 15.7355 4.99999 17.0073 4.99999 18.3334H3.33333ZM9.99999 10.8334C7.23749 10.8334 4.99999 8.59587 4.99999 5.83337C4.99999 3.07087 7.23749 0.833374 9.99999 0.833374C12.7625 0.833374 15 3.07087 15 5.83337C15 8.59587 12.7625 10.8334 9.99999 10.8334ZM9.99999 9.16671C11.8417 9.16671 13.3333 7.67504 13.3333 5.83337C13.3333 3.99171 11.8417 2.50004 9.99999 2.50004C8.15833 2.50004 6.66666 3.99171 6.66666 5.83337C6.66666 7.67504 8.15833 9.16671 9.99999 9.16671Z" fill="#144D5A"/></svg>,
                    label : "Jane Doe"
                }
            ]
        } />
        <Outlet />
        <TanStackRouterDevtools />
        <Toaster position='top-right' />
    </>
)

export const Route = createRootRoute({ component: RootLayout })