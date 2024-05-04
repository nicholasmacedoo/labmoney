import { Button, Avatar } from '@mui/material'
import { Link, Navigate, Outlet } from 'react-router-dom'

import styles from './style.module.css'
import { useAuth } from '../contexts/auth-context';
import { LogOut } from 'lucide-react';

export function Template() {

    const { user, signOut } = useAuth()

    const isUserLogged = !!user; /// user === null ? false : true

    return isUserLogged ? (
        <>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <img src="/logotipo.png" alt="LABmoney - 365" />

                    <div className={styles.contentRight}>
                        <Button variant="contained" size="large">Nova transação</Button>
                        {/* <Divider orientation='vertical' variant="middle" style={{ background: "#AEAEB4"}} /> */}
                        <div className={styles.containerAvatar}>
                            <Link to="/home/profile">
                                <Avatar src="https://github.com/nicholasmacedoo.png" variant="rounded" />
                            </Link>
                            <span>Nicholas Macedo</span>
                            <Button onClick={signOut}><LogOut size={16} /></Button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    ) : <Navigate to="/" />
}


// export function PrivateRoute() {

//     const isUserLogged = false;

//     return isUserLogged ? <Template /> : <Navigate to="/" />
// }