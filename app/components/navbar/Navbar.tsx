import styles from "./Navbar.module.css";
import NavLink from "./components/NavLink";
import { HiMenuAlt3 } from "react-icons/hi";

type LinkType = Readonly<{
    url: string;
    name: string;
}>

const links: LinkType[] = [
    {
        url: "/contact",
        name: "Contact Me",
    },
    {
        url: "/education",
        name: "Education"
    },
    {
        url: "resume",
        name: "Resume"
    }
]


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.section}>
                <NavLink href="/">
                    <span className={styles.link}>CA</span>
                </NavLink>
            </div>
            <div className={styles.section}>
                <NavLink href="/">
                    <h1 className={styles.name_title}><span className={styles.first_name}>Christian</span> <span className={styles.last_name}>Auman</span></h1>
                </NavLink>
            </div>
            <div className={styles.section}>
                {
                    links.map((link: LinkType, index: number) => {
                        return (
                            <NavLink href={link.url} key={`${link.url}-${index}`}>
                                <span className={styles.link}>{link.name}</span>
                            </NavLink>
                        )
                    })
                }
            </div>
            <div className={styles.section}>
                <HiMenuAlt3 className={styles.menu_icon} />
            </div>
        </nav>
    )
}

export default Navbar;
