import React, { FC } from 'react';
import classes from './Modal.module.css'

export interface ModalWrapperProps {
    onClose: () => void;
}

export const ModalOverlay: FC<ModalWrapperProps> = ({ onClose }) => {
    return( 
    <div className={classes.modalContainer} onClick={onClose}>

    </div>);
}