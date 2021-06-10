import { FaGithub } from 'react-icons/fa' // instalar o react-icons(uma biblioteca de ícones)
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss'

export function SignInButton() {
    const [session] = useSession()

    return session ? (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <FaGithub color="#04d361" /> { /* ícone do github logado */}
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} /> { /* ícone x do close */ }
        </button>
    ) : (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417" /> { /* ícone do github deslogado */}
            Sign in with Github
        </button>
    );
}