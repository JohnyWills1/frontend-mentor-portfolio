import Head from 'next/head';
import styles from '../styles/profile-card.module.css';

export default function ProfileCard() {
	return (
		<>
			<Head>
				<title>Profile Card</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={styles.container}>
				<main className={styles.main}>
					<div className={styles.backgroundTop} />
					<div className={styles.mainCard}>
						<div className={styles.headerTop} />
						<div className={styles.avatarImg} />
						<div className={styles.centerContent}>
							<div className={styles.nameAge}>
								<div className={styles.name}>Victor Crest</div>
								<div className={styles.age}>26</div>
							</div>
							<div className={styles.location}>London</div>
						</div>
						<div className={styles.bottomContent}>
							<div className={styles.socialBlock}>
								<div className={styles.socialNumbers}>80K</div>
								<div className={styles.socialType}>Followers</div>
							</div>

							<div className={styles.socialBlock}>
								<div className={styles.socialNumbers}>803K</div>
								<div className={styles.socialType}>Likes</div>
							</div>
							<div className={styles.socialBlock}>
								<div className={styles.socialNumbers}>1.4K</div>
								<div className={styles.socialType}>Photos</div>
							</div>
						</div>
					</div>
					<div className={styles.backgroundBottom} />
				</main>
			</div>
		</>
	);
}
