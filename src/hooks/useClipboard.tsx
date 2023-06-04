import { useCallback, useEffect, useState } from 'react';

export const useClipboard = (text: string) => {
    const [isCopied, setIsCopied] = useState(false);

    const copy = useCallback(() => {
        navigator.clipboard.writeText(text);

        setIsCopied(true);
    }, [text]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isCopied) {
            timeout = setTimeout(() => setIsCopied(false), 1000);
        }

        return () => clearTimeout(timeout);
    }, [isCopied]);

    return { copy, isCopied };
}