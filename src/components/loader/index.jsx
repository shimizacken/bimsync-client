import React from 'react';
import logo from '../../assets/Bimsync-icon-blue_rgb.png';
import dialogContent from '../../assets/dialog-content.png';
import styles from './styles.scss';

export const Loader = _ => <img src={logo} width='60' height='70' className={styles.rotating} />;

export const DialogContent = _ => <a target='_blank' href='https://www.openstreetmap.org/?mlat=60.037&mlon=5.328#map=11/60.0311/5.3405'>
                                        <img src={dialogContent} width='90%' />
                                    </a>;