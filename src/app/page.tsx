'use client'
import {useEffect} from "react";
import styles from './page.module.scss'


export default function Home(): JSX.Element {

    useEffect(() => {
        fetch('https://api.music-hub.ru/portfolio',
            {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "omit"

            })
            .then((response) => {
                console.log('bla')
                return response.json();
            })
            .then((data) => {
                console.log('bla2')
                console.log(data);
            });
    }, [])
    return (
        <main className={styles['main']}>
            hello world
        </main>
    )
}
