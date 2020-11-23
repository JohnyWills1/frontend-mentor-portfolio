import Head from 'next/head';
import styles from '../styles/Home.module.css';
import router from 'next/router';
import { Button, Box } from '@chakra-ui/react';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Projects Portfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					<a href='https://www.frontendmentor.io/challenges'>
						Frontend Mentor Challenges
					</a>{' '}
					Portfolio
				</h1>

				<p className={styles.description}>
					A portfolio of all my completed Frontend Mentor *free* challenges.
				</p>
				<p className={styles.description}>
					Click Projects to view a list of each completed project.
				</p>
				<Box pt={6}>
					<Button
						onClick={() => router.push('/projects')}
						bg='hsla(234, 80%, 88%, 1)'
						_hover={{
							bg: 'hsla(340, 68%, 88%, 1)',
							color: 'white',
						}}
						_active={{
							bg: 'hsla(342, 72%, 85%, 1) ',
						}}
					>
						Click Here to View Projects
					</Button>
				</Box>
			</main>
		</div>
	);
}
