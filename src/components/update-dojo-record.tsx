import { useState } from "react";
import useMutateData from "./use-mutate-data";

export default function useUpdateDojoRecord(url : string, token : string, method : any, fragment : any)
{
    // const [payload, setPayload] = useState<any>(null)
    const [endpoint, setEndpoint] = useState<string | null>(null)

    // const { data, loading, error } = useMutateData(endpoint ?? "", token, method, payload)
    const mutation = useMutateData(endpoint ?? "", token, method)
    const CUDFunc = (formData : FormData | null | {}) => 
    {
        if (formData instanceof FormData)
        {
            const formObject : Record<string, any> = {}
            let currKey : string = ""
            let currVal : any = ""
            if (formData)
            {
                for (const [key, value] of  formData.entries())
                {
                    if (key === "parameter")
                    {
                        currKey = value.toString()
                    }
                    if (key === "parameter_value")
                    {
                        const num = Number(value)
                        formObject[currKey] = isNaN(num) ? value.toString() : num
                        currKey = ""
                        currVal = ""
                    }
                    
                }
            }
        

            setEndpoint(`${url}/${fragment}`)
            // setPayload(formObject)
            mutation.mutate(formObject)
        }
        else
        {
            setEndpoint(`${url}`)
            console.log("Endpoint: " + endpoint)
            mutation.mutate(formData)
            console.log(formData)
        }
    }
    return { data : mutation.data, loading : mutation.isPending, error : mutation.error, CUDFunc }
    
}