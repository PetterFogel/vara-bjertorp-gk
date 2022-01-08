import React, { FC } from 'react';
import { ModalProps } from './Modal';
import classes from './Modal.module.css'


export const ModalBody: FC<ModalProps> = ({ children, headline, onClose, closeText, description, image }) => (
        <div className={classes.modalContent}>
            {image && <img src={image} alt={headline} className={classes.modalImage} />}
            {headline && <h2 className={classes.title}>{headline}</h2>}
            {description && <p className={classes.description}>{description}</p>}
            {children}
            {closeText && (
                <div className={classes.buttonContainer}>
                    {' '}
                    <button onClick={onClose}>{closeText}</button>
                </div>
            )}
        </div>
);