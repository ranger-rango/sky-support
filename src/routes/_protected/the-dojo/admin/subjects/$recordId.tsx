import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Button from '../../../../../components/btn'
import useFetchData from '../../../../../components/use-fetch-data'
import type { FormEvent } from 'react'
import useUpdateDojoRecord from '../../../../../components/update-dojo-record'
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form'

export const Route = createFileRoute(
  '/_protected/the-dojo/admin/subjects/$recordId',
)({
  component: RouteComponent,
})

function RouteComponent()
{
  const { recordId } = Route.useParams()
    const adminToken : string = import.meta.env.VITE_ADMIN_TOKEN
    const baseUrl : string = import.meta.env.VITE_BASE_URL
    const subjectsEndpoint : string = import.meta.env.VITE_SUBJECTS_ENDPOINT
    const url : string = `${baseUrl}${subjectsEndpoint}/${recordId}`

  const { data, isLoading, error } = useFetchData(url, adminToken)
  
  const recordData = data?.subject

  const { CUDFunc, data : updateData, loading : updateLoading, error : updateError } = useUpdateDojoRecord(url, adminToken, "PUT", "")

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => 
  {
    e.preventDefault()
    // const formData = new FormData()
    // Object.entries(data).forEach(([key, value]) =>
    // {
    //     formData.append(key, value as string)
    // })
    const formData = new FormData(e.currentTarget)
    CUDFunc(formData) 
    {updateLoading && <p>Updating user...</p>}
    {updateError && <p>Error: {updateError.message}</p>}
    {updateData && <p>Update successful!</p>}

  }
  const { CUDFunc : delFunc, data : deleteData, loading : deleteLoading, error : deleteError } = useUpdateDojoRecord(url, adminToken, "DELETE", "")
  const nav = useNavigate()
  const handleDelete = () => 
  {
    delFunc(null)
    {deleteLoading && <p>Updating user...</p>}
    {deleteError && <p>Error: {deleteError.message}</p>}
    {deleteData && <p>Update successful!</p>}

    nav({to : ".."})
  }

  if (isLoading) return <p>Loading ...</p>
  if (error) return <p>Error: {error.message} </p>

  return (
    <>

      <div className="main-header">
          <h3>
              Dojo Subject {recordData.id}
          </h3>
          <div>
          </div>
      </div>

      <section className="main-body">
        <div className='record-info-container'>

          <div className='record-info-inner-container'>
            <p className='rcd-info'>Id <span className='rcd-value'>{ recordData.id }</span></p>
            <p className='rcd-info'>Name <span className='rcd-value'>{ recordData.name }</span></p>
            <p className='rcd-info'>description <span className='rcd-value'>{ recordData.description }</span></p>
            <p className='rcd-info'>Created By <span className='rcd-value'>{ recordData.created_by }</span></p>
            <p className='rcd-info'>Created By Name <span className='rcd-value'>{ recordData.created_by_name }</span></p>
            <p className='rcd-info'>Is Active <span className='rcd-value'>{ recordData.is_active }</span></p>
          </div>
        </div>
        <form id="edit-record-form" onSubmit={handleSubmit} >
          <h3>Update User</h3>
          <div>
            <label htmlFor="parameter">Parameter: </label>
            <input type="text" id="parameter" name="parameter" value="name" />
          </div>
          <div>
            <label htmlFor="parameter_value">Parameter Value: </label>
            <input type="text" id="parameter_value" name="parameter_value" defaultValue={recordData.name} />
          </div>

          <div>
            <label htmlFor="parameter">Parameter: </label>
            <input type="text" id="parameter" name="parameter" value="description" />
          </div>
          <div>
            <label htmlFor="parameter_value">Parameter Value: </label>
            <input type="text" id="parameter_value" name="parameter_value" defaultValue={recordData.description} />
          </div>

        </form>
      </section>

      <div className="form-footer">
        <Button id="create-btn" className="gen-btn pri-btn" type="submit" label="Edit" form="edit-record-form" />
        <Button id="cancel-btn" className="gen-btn sec-btn" type="reset" label="Cancel" form="edit-record-form" />
        <Button id="delete-btn" className="gen-btn sec-btn" type="button" label="Delete Record" onClick={handleDelete} />
      </div>
    </>
  )
}
