import { SOverlay } from '../assets/styles/modal.styled';

const Overlay = ({ onClick }: { onClick: () => void }) => {
    return <SOverlay onClick={onClick} />;
};

export default Overlay;
