import React from 'react';
import logo from '../../assets/Bimsync-icon-blue_rgb.png';
import dialogContent from '../../assets/dialog-content.png';
import styles from './styles.scss';

export const Loader = _ => <img src={logo} width='60' height='70' className={styles.rotating} />;

export const DialogContent = _ => <img src={dialogContent} />;