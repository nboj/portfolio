import NextLink from "next/link"

type LinkProps = Readonly<{
    href: string;
    children?: React.ReactNode;
}>
const NavLink = ({ children, href }: LinkProps) => {
    return (
        <NextLink href={href}>{children}</NextLink>
    )
}

export default NavLink;
