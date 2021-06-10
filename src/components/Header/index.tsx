import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news"/>
                <nav> { /* Menu de navegação */ }
                    <a className={styles.active}>Home</a> { /* links */}
                    <a>Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    );
}