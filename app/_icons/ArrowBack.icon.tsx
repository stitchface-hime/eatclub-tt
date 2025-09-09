import { SVGProps } from 'react';

interface Props extends Omit<SVGProps<SVGSVGElement>, 'children'> {
    className?: string;
    size?: number;
    fill?: string;
}

export default function ArrowBack({ size, ...rest }: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width={size}
            height={size}
            {...rest}
        >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
    );
}
