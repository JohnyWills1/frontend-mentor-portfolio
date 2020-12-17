import React from 'react';
import styles from '../styles/social.module.css';

const ThemeSwitcher = ({ setTheme, theme }) => {
	return (
		<div className={styles.themeSwitch}>
			<p className={styles.themeText}>{theme ? 'Light Mode' : 'Dark Mode'}</p>
			<button className={styles.themeButton} onClick={setTheme}>
				<div className={theme ? styles.switchIconD : styles.switchIconL} />
			</button>
		</div>
	);
};

export default ThemeSwitcher;
