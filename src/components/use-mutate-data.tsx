import { useState, useEffect } from "react";

export default function useMutateData<T>(url : string, token : string, mtd : "GET" | "POST" | "PUT" | "PATCH" | "DELETE", updateData ?: any)
{
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => 
    {
        const fetchData = async () => 
        {
            setLoading(true)
            setError(null)
            try
            {
                const options : RequestInit = 
                {
                    method : mtd,
                    headers : 
                    {
                        "Content-Type" : "application/json",
                        Authorization : `Bearer ${token}`
                    }
                }

                if(["POST", "PUT", "PATCH"].includes(mtd) && updateData)
                {
                    options.body = JSON.stringify(updateData)
                }
                const response = await fetch(url, options)

                if (!response.ok)
                {
                    throw new Error('Network response was not ok')
                }
                let result : T | null = null
                try
                {
                    result = await response.json()
                }
                catch
                {
                    result = null
                }

                setData(result)
            }
            catch (err : any)
            {
                setError(err instanceof Error ? err : new Error(String(err)))
            }
            finally
            {
                setLoading(false)
            }
        }

        fetchData()
    }, [url, token, mtd, updateData])

    return { data, loading, error }
}