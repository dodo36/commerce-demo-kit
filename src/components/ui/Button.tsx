import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    fullWidth?: boolean;
    isLoading?: boolean;
}

export function Button({
    children,
    variant = 'primary',
    fullWidth,
    isLoading,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    const rootClass = `btn ${styles[variant]} ${fullWidth ? styles.full : ''} ${isLoading ? styles.loading : ''} ${className}`;

    return (
        <button className={rootClass} disabled={disabled || isLoading} {...props}>
            {isLoading ? "..." : children}
        </button>
    );
}
