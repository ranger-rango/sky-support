function generateUUID(): string {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: string) =>
    (
        Number(c) ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
    ).toString(16)
    );
}

function genID(): string {
    const uuid: string = generateUUID().replace(/-/g, "");
    const bytes: string[] = uuid.match(/.{2}/g)?.map((byte: string) => String.fromCharCode(parseInt(byte, 16))) ?? [];
    return btoa(bytes.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "").substring(0, 16);
}

interface SubmitProps
{
    ticketId ?: string
}


// export default function HandleSubmit(formData : FormData, submitProps : SubmitProps)
export default function HandleSubmit(formData : FormData)
{
    let ticketData : any[] = JSON.parse(localStorage.getItem("ticketData") || "[]")

    const formObject : Record<string, any> = {}
    formObject["ticket_id"] = genID()
    // formObject["ticket_id"] = typeof submitProps.ticketId !== "undefined" ? submitProps.ticketId : genID()

    const promises : Promise<void>[] = []

    for (const [key, value] of  formData.entries())
    {
        if (value instanceof File)
        {
            if (!formObject[key]) formObject[key] = [];
            promises.push(
                new Promise((resolve) => 
                {
                    const reader = new FileReader();
                    reader.onload = () => 
                    {
                        formObject[key].push(
                        {
                            name: value.name,
                            size: value.size,
                            type: value.type,
                            lastModified: value.lastModified,
                            data: reader.result,
                        })
                        resolve()
                    }
                    reader.readAsDataURL(value);
                })
            )
        }
        else
        {
            formObject[key] = value
        }

        
    }

    Promise.all(promises).then(() => 
    {
        ticketData.push(formObject)
        localStorage.setItem("ticketData", JSON.stringify(ticketData))
    })
}