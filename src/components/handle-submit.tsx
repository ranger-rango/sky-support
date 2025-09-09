
export default function HandleSubmit(formData : FormData)
{
    let ticketData : any[] = JSON.parse(localStorage.getItem("ticketData") || "[]")

    const formObject : Record<string, any> = {}

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