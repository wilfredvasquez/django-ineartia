import React, { useState, createContext } from "react";

export const InertiaContext = createContext({
    iComponent: undefined,
    iProps: undefined,
    setValues: () => {},
});

export function InertiaProvider(props) {
    const { children } = props;
    const [iComponent, setIComponent] = useState(undefined);
    const [iProps, setIProps] = useState(undefined);

    const setValues = (inertiaData) => {
        setIComponent(inertiaData.component)
        setIProps(inertiaData.props)
    }

    const valueContext = {
        iComponent,
        iProps,
        setValues
    };

    return(
        <InertiaContext.Provider value={valueContext}>
            { children }
        </InertiaContext.Provider>
    )
}