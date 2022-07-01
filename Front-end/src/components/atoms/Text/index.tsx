import { PropsWithChildren } from "react";
import "./index.css";

const Text = ({ children }: PropsWithChildren) => {
    return <p>{children}</p>;
};

export default Text;
