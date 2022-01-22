import React, { FC } from 'react';
import { ModalBody } from './ModalBody';
import { ModalOverlay } from './ModalOverlay';

export interface ModalProps {
    title?: string;
    isOpen?: boolean;
    onClose: () => void;
    closeText?: string;
    text?: string;
    image?: string;
}

export const Modal: FC<ModalProps> = ({ isOpen, children, title, onClose, closeText, text, image }) => {
    if (isOpen) {
        return (
            <>
                <ModalOverlay onClose={onClose} />
                <ModalBody title={title} onClose={onClose} closeText={closeText} text={text} image={image}>
                    {children}
                </ModalBody>
            </>
        );
    }

    return null;
}