import React, { PropsWithChildren, useMemo } from "react";
import "./index.css";

type Heading = PropsWithChildren<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    > & {
        level?: string | number;
    }
>;

const Title = ({ level = "1", children, ...props }: Heading) => {
    const Heading = useMemo(() => `h${level}`, []);

    return <Heading {...props}>{children}</Heading>;
};

export default Title;
