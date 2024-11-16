import React, { useState } from "react";
import { MyComponentProps } from "../models/card";
import SideNav from "./shared/SideNav";

const MyComponent: React.FC<MyComponentProps> = ({ children }) => {
    const [clickCount, setClickCount] = useState(0);

    // Handle click event for MyComponent
    const handleClick = () => {
        setClickCount((prevCount) => prevCount + 1);
    };

    let isFirstButton = true;

    const modifiedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            const isButton = child.type === "button" || child.props.btnname;
            const clickable = isFirstButton && isButton;
            isFirstButton = false;
    
            return React.cloneElement(child as React.ReactElement, {
                disabled: !clickable,
                onClick: clickable ? handleClick : undefined,
            });
        }
        return child;
    });
    
    return (
        <SideNav>
            <div>
                <p className="mb-4 text-sm text-gray-700">
                    Hey, you have clicked me <strong>{clickCount}</strong> times
                </p>
                {modifiedChildren}
            </div>
        </SideNav>
    );
};

export default MyComponent;
