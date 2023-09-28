import { ChangeEvent, FC, memo } from 'react';

interface IInputProps {
    innerClassName: string;
    name: string;
    innerValue: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    id: string;
}

const Input: FC<IInputProps> = memo(({ innerClassName, name, innerValue, onChange, id, ...rest }) => {
    return <input id={id} value={innerValue} name={name} onChange={onChange} className={innerClassName} {...rest} />;
});

export default Input;
