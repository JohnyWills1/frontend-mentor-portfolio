import Head from 'next/head';
import styles from '../styles/social.module.css';
import { useState } from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function Home() {
	const [theme, setTheme] = useState(true);

	const changeTheme = () => {
		setTheme(!theme);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Social Media Dashboard</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={theme ? styles.mainD : styles.mainL}>
				<div className={theme ? styles.topBarD : styles.topBarL}>
					<div className={styles.titleButtonBar}>
						<div className={styles.titleDesc}>
							<div className={styles.title}>Social Media Dashboard</div>
							<div className={styles.description}>Total Followers: 23,004</div>
						</div>
						<div className={styles.mobileDivider} />
						<div>
							<ThemeSwitcher setTheme={changeTheme} theme={theme} />
						</div>
					</div>
					<div className={styles.tiles}>
						<div className={theme ? styles.tileD : styles.tileL}>
							<div className={styles.fbColorBar} />
							<div className={styles.tileContent}>
								<div className={styles.logoUsername}>
									<div className={styles.fbLogo} />
									<div className={styles.username}>@nathanf</div>
								</div>
								<div className={styles.socialDetails}>
									<div className={styles.socialNumbers}>1987</div>
									<div className={styles.followers}>FOLLOWERS</div>
								</div>
								<div className={styles.socialChange}>
									<div className={styles.upIcon} />
									12 Today
								</div>
							</div>
						</div>
						<div className={theme ? styles.tileD : styles.tileL}>
							<div className={styles.twitColorBar} />
							<div className={styles.tileContent}>
								<div className={styles.logoUsername}>
									<div className={styles.twitLogo} />
									<div className={styles.username}>@nathanf</div>
								</div>
								<div className={styles.socialDetails}>
									<div className={styles.socialNumbers}>1044</div>
									<div className={styles.followers}>FOLLOWERS</div>
								</div>
								<div className={styles.socialChange}>
									<div className={styles.upIcon} />
									99 Today
								</div>
							</div>
						</div>
						<div className={theme ? styles.tileD : styles.tileL}>
							<div className={styles.instaColorBar} />
							<div className={styles.tileContent}>
								<div className={styles.logoUsername}>
									<div className={styles.instaLogo} />
									<div className={styles.username}>@realnathanf</div>
								</div>
								<div className={styles.socialDetails}>
									<div className={styles.socialNumbers}>11k</div>
									<div className={styles.followers}>FOLLOWERS</div>
								</div>
								<div className={styles.socialChange}>
									<div className={styles.upIcon} />
									1099 Today
								</div>
							</div>
						</div>
						<div className={theme ? styles.ytTileD : styles.ytTileL}>
							<div className={styles.ytColorBar} />
							<div className={styles.tileContent}>
								<div className={styles.logoUsername}>
									<div className={styles.ytLogo} />
									<div className={styles.username}>Nathan F.</div>
								</div>
								<div className={styles.socialDetails}>
									<div className={styles.socialNumbers}>8239</div>
									<div className={styles.followers}>SUBSCRIBERS</div>
								</div>
								<div className={styles.socialChangeRed}>
									<div className={styles.downIcon} />
									144 Today
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.bottomSection}>
					<div className={theme ? styles.overviewTitleD : styles.overviewTitleL}>
						Overview - Today
					</div>
					<div className={styles.detailTiles}>
						<div className={theme ? styles.detailTileD : styles.detailTileL}>
							<div className={styles.detTileContent}>
								<div className={styles.titleLogo}>
									<div className={styles.detTitle}>Page Views</div>
									<div className={styles.fbLogo} />
								</div>
								<div className={styles.numberPercent}>
									<div className={styles.number}>87</div>
									<div className={styles.socialChange}>
										<div className={styles.upIcon} />
										3%
									</div>
								</div>
							</div>
						</div>
						<div className={theme ? styles.detailTileD : styles.detailTileL}>
							<div className={styles.detTileContent}>
								<div className={styles.titleLogo}>
									<div className={styles.detTitle}>Likes</div>
									<div className={styles.fbLogo} />
								</div>
								<div className={styles.numberPercent}>
									<div className={styles.number}>52</div>
									<div className={styles.socialChangeRed}>
										<div className={styles.downIcon} />
										2%
									</div>
								</div>
							</div>
						</div>
						<div className={theme ? styles.detailTileD : styles.detailTileL}>
							<div className={styles.detTileContent}>
								<div className={styles.titleLogo}>
									<div className={styles.detTitle}>Likes</div>
									<div className={styles.instaLogo} />
								</div>
								<div className={styles.numberPercent}>
									<div className={styles.number}>5462</div>
									<div className={styles.socialChange}>
										<div className={styles.upIcon} />
										2257%
									</div>
								</div>
							</div>
						</div>
						<div
							className={theme ? styles.detailTileD : styles.detailTileL}
							style={{ marginRight: '0' }}
						>
							<div className={styles.detTileContent}>
								<div className={styles.titleLogo}>
									<div className={styles.detTitle}>Profile Views</div>
									<div className={styles.instaLogo} />
								</div>
								<div className={styles.numberPercent}>
									<div className={styles.number}>52k</div>
									<div className={styles.socialChange}>
										<div className={styles.upIcon} />
										1375%
									</div>
								</div>
							</div>
						</div>
						<div
							className={theme ? styles.detailTileD : styles.detailTileL}
							style={{ marginTop: '25px' }}
						>
							<div className={styles.detTileContent}>
								<div className={styles.titleLogo}>
									<div className={styles.detTitle}>Retweets</div>
									<div className={styles.twitLogo} />
								</div>
								<div className={styles.numberPercent}>
									<div className={styles.number}>117</div>
									<div className={styles.socialChange}>
										<div className={styles.upIcon} />
										303%
									</div>
								</div>
							</div>
						</div>
						<div
							className={theme ? styles.detailTileD : styles.detailTileL}
							style={{ marginTop: '25px' }}
						>
							<div className={styles.detTileContent}>
								<div className={styles.titleLogo}>
									<div className={styles.detTitle}>Likes</div>
									<div className={styles.twitLogo} />
								</div>
								<div className={styles.numberPercent}>
									<div className={styles.number}>507</div>
									<div className={styles.socialChange}>
										<div className={styles.upIcon} />
										553%
									</div>
								</div>
							</div>
						</div>
						<div
							className={theme ? styles.detailTileD : styles.detailTileL}
							style={{ marginTop: '25px' }}
						>
							<div className={styles.detTileContent}>
								<div className={styles.titleLogo}>
									<div className={styles.detTitle}>Likes</div>
									<div className={styles.ytLogo} />
								</div>
								<div className={styles.numberPercent}>
									<div className={styles.number}>107</div>
									<div className={styles.socialChangeRed}>
										<div className={styles.downIcon} />
										19%
									</div>
								</div>
							</div>
						</div>
						<div
							className={theme ? styles.detailTileD : styles.detailTileL}
							style={{ marginTop: '25px', marginRight: '0' }}
						>
							<div className={styles.detTileContent}>
								<div className={styles.titleLogo}>
									<div className={styles.detTitle}>Total Views</div>
									<div className={styles.ytLogo} />
								</div>
								<div className={styles.numberPercent}>
									<div className={styles.number}>1407</div>
									<div className={styles.socialChangeRed}>
										<div className={styles.downIcon} />
										12%
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
