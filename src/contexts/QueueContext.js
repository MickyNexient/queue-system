import { createContext, useContext } from "react";

const QueueContext = createContext({});

export function useQueueContext() {
    return useContext(QueueContext)
}

export default QueueContext;