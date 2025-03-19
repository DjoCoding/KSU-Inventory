import { useEffect } from "react";

type onMessageEventHandler = (message: string) => void;

const useBroadcaster = (name: string, onMessage: onMessageEventHandler) => {
    useEffect(() => {
        const channel = new BroadcastChannel(name);
        
        channel.onmessage = (e: MessageEvent) => {
            return onMessage(e.data);
        }

        return () => {
            channel.close();
        }
    }, [name, onMessage]);

    const sendMessage = (message: string) => {
        const channel = new BroadcastChannel(name);
        return channel.postMessage(message);
    }

    return sendMessage;
}

export default useBroadcaster;