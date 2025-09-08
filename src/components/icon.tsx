import React from "react";

interface Icon
{
    htmlElement : React.ReactNode;
}

export default function Icons({ htmlElement } : Icon)
{

    return <>{htmlElement}</>;
}