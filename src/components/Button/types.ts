export interface IButtonProps {
    title: string;
    type: string;
    disabled: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}