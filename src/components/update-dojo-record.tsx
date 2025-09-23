import { useState } from "react";
import useMutateData from "./use-mutate-data";

export default function useUpdateDojoRecord(url : string, token : string, method : any, fragment : any)
{
    const [payload, setPayload] = useState<any>(null)
    const [endpoint, setEndpoint] = useState<string | null>(null)

    const { data, loading, error } = useMutateData(endpoint ?? "", token, method, payload)
    const CUDFunc = (formData : FormData | null) => 
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
        setPayload(formObject)
        console.log(formObject)
    }
    return { data, loading, error, CUDFunc }
    
}