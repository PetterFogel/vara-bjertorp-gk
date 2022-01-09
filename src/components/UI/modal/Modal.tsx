import React, { FC } from 'react';
import { ModalBody } from './ModalBody';
import { ModalOverlay } from './ModalOverlay';

export interface ModalProps {
    headline?: string;
    isOpen?: boolean;
    onClose: () => void;
    closeText?: string;
    description?: string;
    image?: string;
}

export const Modal: FC<ModalProps> = ({ isOpen, children, headline, onClose, closeText, description, image }) => {
    if (isOpen) {
        return (
            <>
                <ModalOverlay onClose={onClose} />
                <ModalBody headline={headline} onClose={onClose} closeText={closeText} description={description} image={image}>
                    {children}
                </ModalBody>
            </>
        );
    }

    return null;
}