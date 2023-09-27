import { FC, memo } from 'react';
import { SCreateButton } from '../../assets/styles/createButton.styles';

const CreateButton: FC<{ onClick: () => void }> = memo(({ onClick }) => {
    return (
        <SCreateButton type='button' onClick={onClick}>
            +
        </SCreateButton>
    );
});

export default CreateButton;
