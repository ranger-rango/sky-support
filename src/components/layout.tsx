import { Outlet } from "react-router-dom";
import SidePanel from "../components/side-panel";
import Footer from "./footer";

export default function Layout()
{
    return (
        <>
            <SidePanel />
            <Footer coName="Sky World Limited" userName="Jane Doe" />
            <Outlet />
        </>
    );
}