import React, { FC } from 'react';
import { ModalProps } from './Modal';
import classes from './Modal.module.css'


export const ModalBody: FC<ModalProps> = ({ children, title, onClose, closeText, text, image }) => (
        <div className={classes.modalContent}>
            {image && <img src={image} alt={title} className={classes.modalImage} />}
            {title && <h2 className={classes.title}>{title}</h2>}
            {text && <p className={classes.description}>{text}</p>}
            {children}
            {closeText && (
                <div className={classes.buttonContainer}>
                    {' '}
                    <button onClick={onClose}>{closeText}</button>
                </div>
            )}
        </div>
);