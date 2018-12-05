import React from 'react';
import logo from '../../assets/Bimsync-icon-blue_rgb.png';
import styles from './styles.scss';

export const Loader = _ => <img src={logo} width='60' height='70' className={styles.rotating} />;