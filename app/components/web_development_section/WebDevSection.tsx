import WebSection from "./WebSection";
import styles from "./WebDevSection.module.css";

const WebDevSection = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Web Development</h1>
            <div className={styles.web_sections}>
                <WebSection title={"Early Years"}>
                    <p>In recent years, I&apos;ve not only been a web developer but also an ardent creator, pouring my heart into every line of code and design. Each website I&apos;ve built is a testament to my love for the craft, where UI/UX isn’t just about design, but about storytelling. From wireframing to color theory, every element serves a purpose and tells a part of the tale.</p>
                    <p>My journey into back-end development isn&apos;t just about understanding server functions or databases; it&apos;s about discovering how the magic happens behind the curtain. As I ventured deeper, I stumbled upon the titans of front-end: React, Angular, and Vue. React, in particular, resonated deeply with me, sparking an insatiable curiosity and desire to create.</p>
                </WebSection>
                <WebSection title={"React"}>
                    <p>In 2021, during a class project, I saw an opportunity to not just complete an assignment but to create something mesmerizing. With my newfound knowledge of React, I built a portfolio that left everyone in awe. </p>
                    <p>The dynamism, the captivating effects - they weren’t just to impress; they were expressions of my passion. Using "useEffect" to create typewriter animations or scroll-based movements was a thrilling exploration of what was possible with React, and I was just scratching the surface.</p>
                </WebSection>
                <WebSection title={"NextJS"}>
                    <p>Then came Next.js, a revelation in my web development journey. My initial fascination quickly evolved into a profound passion. This wasn&apos;t just another tool—it was a game-changer. Every feature, from its integrated approach to back and front end development to the innovative server-side components in NextJS 13, became a new playground for me to explore. The boundless creative and technical possibilities it presented fueled my passion even more, compelling me to craft richer, more seamless user experiences.</p>
                </WebSection>
                <WebSection title={"My First Website"}>
                    <p>https://christianauman.com Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius sagittis augue, eu convallis libero dapibus in.</p>
                </WebSection>
            </div>
        </div>
    )
}

export default WebDevSection;
