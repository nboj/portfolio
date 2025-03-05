'use client'
import * as React from "react";
import { HeroUIProvider } from "@heroui/react";

type ProvidersProps = Readonly<{
    children: React.ReactNode;
}>
const Providers = ({ children }: ProvidersProps) => {
    return (
        <HeroUIProvider>
            {children}
        </HeroUIProvider>
    )
}
export default Providers;
