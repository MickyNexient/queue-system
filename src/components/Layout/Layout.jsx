import Dashboard from '../../pages/Dashboard';
import styles from './Layout.module.css';

export default function Layout() {
    return (
        <section className={styles.container}>
            <header className={styles.head}>Header</header>
            <nav className={styles.nav}>Nav</nav>
            <main className={styles.content}>
                <Dashboard />
            </main>
        </section>
    )
}