import Image from 'next/image';
import styles from './HeroSection.module.css';
import crossed_arms_profile from "@/public/profile_picture.webp";
import background_wave from "@/public/bg-1.svg";
import foreground_wave from "@/public/bg-2.svg";

const HeroSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h1 className={styles.title}>I&apos;m Christian Auman</h1>
                <h3 className={styles.subtitle}>20 years old, software engineer, ...</h3>
            </div>
            <Image src={crossed_arms_profile} className={styles.profile_picture} alt="Christian Auman with his arms crossed." />
            <Image src={background_wave} className={styles.background_wave} alt="A dark blue wave in the background." />
            <Image src={foreground_wave} className={styles.foreground_wave} alt="A lighter blue wave in the foreground." />
        </div>
    )
}

export default HeroSection;
