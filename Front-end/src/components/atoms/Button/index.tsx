import { PropsWithChildren } from "react";
import "./index.css";

type Props = PropsWithChildren<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
>;

export function Button({ children, ...props }: Props) {
    return <button {...props}>{children}</button>;
}
