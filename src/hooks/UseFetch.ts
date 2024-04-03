import { useState, useEffect } from "react"
//My Types
type ObjOrNull = [] | null;
type BoolOrStr = boolean;
type StrOrNull = string | null;

export function UseFetch(url: string) {
    const [data, setData] = useState<ObjOrNull>(null);
    const [isPending, setIsPending] = useState<BoolOrStr>(false)
    const [error, setError] = useState<StrOrNull>(null)
    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true)
            try {
                const req = await fetch(url)
                if (!req.ok) {
                    throw new Error("Something went wrong")
                }
                const data = await req.json();
                setData(data)
                setError(null)
                setIsPending(false)
            } catch (error: any) {
                console.log("error.massage");
                setError(error.massage)
                setIsPending(false)

            }
        };

        fetchData()
    }, [url])

    return { data, isPending, error }
}