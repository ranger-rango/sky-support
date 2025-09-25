// import type { FormEvent } from "react";
import Button from "./btn";
import { showModal } from "./dojo-sort-filter-context";
import { useForm, type SubmitHandler } from "react-hook-form";

interface CreateProps
{
    btnLabel : string
    fields : any[]
    onCreate : (data : any) => void
}

interface FormValues
{
    [key : string] : string
}

export function DojoCreate({ btnLabel, fields, onCreate } : CreateProps)
{
    const { visibility, toggleVisibility } = showModal();

    // const handleApply = (e : FormEvent<HTMLFormElement>) => 
    // {
    //     e.preventDefault()
    //     const formData = new FormData(e.currentTarget)
    //     onCreate(formData)
    //     toggleVisibility()
    // };
    const { register, handleSubmit, formState : { errors } } = useForm<FormValues>(
        {
            mode : "all"
        }
    )

    const onSubmit : SubmitHandler<FormValues> = (data) => 
    {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => 
        {
            formData.append(key, value);
        });
        onCreate(formData)
        toggleVisibility()
    }

    return (
    <>
        <button onClick={toggleVisibility} className="gen-btn pri-btn"> {btnLabel} </button>

        {
            visibility && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3> {btnLabel} </h3>

                        <form id="togo-create" onSubmit={handleSubmit(onSubmit)} >
                            {
                                fields.map((field) => (
                                    <div key={field}>
                                        <label htmlFor={field}> {field} </label>
                                        <input type="text" id={field} {...register(field, { required : `${field} is required` })} />
                                        { errors[field] && <p className="form-errors"> { errors[field]?.message } </p> }
                                    </div>
                                ))
                            }
                        </form>

                        <div className="">
                            <Button id="dojo-create" label={btnLabel} className="gen-btn pri-btn" type="submit" form="togo-create" />
                            <button className="gen-btn pri-btn" onClick={toggleVisibility}>Cancel</button>
                        </div>
                    </div>
                </div>
            )
        }
    </>
  );
}