

import styles from '@/styles/Layout.module.css'


export default function Header({ heading }){
    return(
        <header className={styles.header}>
            <h1 className={styles.flexCenter}>{heading}</h1>
        </header>
    )
}