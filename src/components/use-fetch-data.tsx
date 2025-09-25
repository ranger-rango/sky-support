// import { useState, useEffect } from "react";
import axios from "axios"
import { useQuery } from "@tanstack/react-query"

async function fetchData(url : string, token : string)
{
    const { data } = await axios.get(url, 
        {
            headers : 
            {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${token}` 
            },
        }
    );
    return data;
}

export default function useFetchData(url : string, token : string)
{
    return useQuery(
        {
            queryKey : ["fetchData", url, token],
            queryFn : () => fetchData(url, token),
            enabled : !!url && !!token
        }
    );
}

// export default function useFetchData(url : string, token : string)
// {
//     const [data, setData] = useState<any>(null)
//     const [loading, setLoading] = useState<boolean>(true)
//     const [error, setError] = useState<Error | null>(null)

//     useEffect(() => 
//     {
//         const fetchData = async () => 
//         {
//             try
//             {
//                 const response = await fetch(url, 
//                     {
//                         method : "GET",
//                         headers : 
//                         {
//                             "Content-Type" : "application/json",
//                             Authorization : `Bearer ${token}`
//                         }
//                     }
//                 )
//                 if (!response.ok)
//                 {
//                     throw new Error('Network response was not ok')
//                 }
//                 const result = await response.json();
//                 setData(result)
//             }
//             catch (err : any)
//             {
//                 setError(err instanceof Error ? err : new Error(String(err)))
//             }
//             finally
//             {
//                 setLoading(false)
//             }
//         }

//         fetchData()
//     }, [url, token])

//     return { data, loading, error }
// }