import { memo, FC } from 'react';
import { SCloseButton, SModalHeader, SModal } from '../assets/styles/modal.styled';
import CloseIcon from '../assets/icons/cross.svg';

const Modal: FC<{ children?: React.ReactNode | any; title: string; onClick: () => void }> = memo(
    ({ children, title, onClick }) => {
        return (
            <SModal>
                <SModalHeader>
                    <h3>{title}</h3>
                    <SCloseButton onClick={onClick} type='button'>
                        <img src={CloseIcon} alt='cross' />
                    </SCloseButton>
                </SModalHeader>
                {children}
            </SModal>
        );
    }
);

export default Modal;
