import React, { createContext, useState } from "react";

export const SelectedIdContext = createContext(null);
export const SelectedIdProvider = ({ children }) => {
    const [selectedId, setSelectedId] = useState(null)
    return (
        <SelectedIdContext.Provider value={{ selectedId, setSelectedId }}>
            {children}
        </SelectedIdContext.Provider>
    );
};