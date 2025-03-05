import styles from "./WebSection.module.css";

type WebSectionProps = Readonly<{
    title: string;
    children: React.ReactNode;

}>
const WebSection = ({ title, children }: WebSectionProps) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.paragraphs_container}>
                {children}
            </div>
        </div>
    )
}

export default WebSection;
