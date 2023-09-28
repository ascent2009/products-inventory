import { FC, memo, useState, useEffect, useCallback } from 'react';
import { SButton } from '../../../assets/styles/product-card.styles';

interface IDescriptionProps {
    text: string;
    maxLength: number;
}

const Description: FC<IDescriptionProps> = memo(({ text, maxLength }) => {
    const [showDetails, setShowDetails] = useState(false);

    const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    const [displayText, setDisplayText] = useState(truncatedText);

    const handleShowDetails = useCallback(() => {
        if (truncatedText.length > maxLength) setShowDetails(true);
    }, []);

    const handleShowHiddenText = useCallback(() => {
        const fullText = text.substring(0);
        setDisplayText(fullText);
        if (displayText === fullText) setDisplayText(truncatedText);
    }, [displayText]);

    useEffect(() => handleShowDetails(), []);

    return (
        <>
            <p>{displayText}</p>
            {showDetails ? (
                <SButton type='button' onClick={handleShowHiddenText}>
                    {displayText === truncatedText ? 'show details' : 'hide details'}
                </SButton>
            ) : (
                ''
            )}
        </>
    );
});

export default Description;
