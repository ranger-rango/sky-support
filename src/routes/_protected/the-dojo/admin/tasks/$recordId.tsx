import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Button from '../../../../../components/btn'
import useFetchData from '../../../../../components/use-fetch-data'
import type { FormEvent } from 'react'
import useUpdateDojoRecord from '../../../../../components/update-dojo-record'

export const Route = createFileRoute(
  '/_protected/the-dojo/admin/tasks/$recordId',
)({
  component: RouteComponent,
})

function RouteComponent()
{
  const { recordId } = Route.useParams()
  const adminToken : string = import.meta.env.VITE_ADMIN_TOKEN
  const baseUrl : string = import.meta.env.VITE_BASE_URL
  const tasksEndpoint : string = import.meta.env.VITE_TASKS_ENDPOINT
  const url : string = `${baseUrl}${tasksEndpoint}/${recordId}`

  const { data, isLoading, error } = useFetchData(url, adminToken)
  const recordData = data?.task

  const { CUDFunc, data : updateData, loading : updateLoading, error : updateError } = useUpdateDojoRecord(url, adminToken, "PUT", "")
  const handleSubmit = (e : FormEvent<HTMLFormElement>) => 
  {
    e.preventDefault()
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
              Dojo Task {recordData.id}
          </h3>
          <div>
          </div>
      </div>

      <section className="main-body">
        <div className='record-info-container'>
          <div className='record-info-inner-container'>
            <p className='rcd-info'>Id <span className='rcd-value'>{ recordData.id }</span></p>
            <p className='rcd-info'>Subject Id <span className='rcd-value'>{ recordData.subject_id }</span></p>
            <p className='rcd-info'>Title <span className='rcd-value'>{ recordData.title }</span></p>
            <p className='rcd-info'>Description <span className='rcd-value'>{ recordData.description }</span></p>
            <p className='rcd-info'>Requirements <span className='rcd-value'>{ recordData.requirements }</span></p>
            <p className='rcd-info'>Due Date <span className='rcd-value'>{ recordData.due_date }</span></p>
            <p className='rcd-info'>Max Score <span className='rcd-value'>{ recordData.max_score }</span></p>
            <p className='rcd-info'>Created By <span className='rcd-value'>{ recordData.created_by }</span></p>
            <p className='rcd-info'>Created By Name <span className='rcd-value'>{ recordData.created_by_name }</span></p>
            <p className='rcd-info'>Is Active <span className='rcd-value'>{ recordData.is_active }</span></p>
          </div>
        </div>

        <form id="edit-record-form" onSubmit={handleSubmit} >
          <h3>Update User</h3>
          <div>
            <label htmlFor="parameter">Parameter: </label>
            <input type="text" id="parameter" name="parameter" value="subject_id" />
          </div>
          <div>
            <label htmlFor="parameter_value">Parameter Value: </label>
            <input type="number" id="parameter_value" name="parameter_value" defaultValue={recordData.subject_id} />
          </div>

          <div>
            <label htmlFor="parameter">Parameter: </label>
            <input type="text" id="parameter" name="parameter" value="title" />
          </div>
          <div>
            <label htmlFor="parameter_value">Parameter Value: </label>
            <input type="text" id="parameter_value" name="parameter_value" defaultValue={recordData.title} />
          </div>

          <div>
            <label htmlFor="parameter">Parameter: </label>
            <input type="text" id="parameter" name="parameter" value="description" />
          </div>
          <div>
            <label htmlFor="parameter_value">Parameter Value: </label>
            <input type="text" id="parameter_value" name="parameter_value" defaultValue={recordData.description} />
          </div>

          <div>
            <label htmlFor="parameter">Parameter: </label>
            <input type="text" id="parameter" name="parameter" value="requirements" />
          </div>
          <div>
            <label htmlFor="parameter_value">Parameter Value: </label>
            <input type="text" id="parameter_value" name="parameter_value" defaultValue={recordData.requirements} />
          </div>

          <div>
            <label htmlFor="parameter">Parameter: </label>
            <input type="text" id="parameter" name="parameter" value="due_date" />
          </div>
          <div>
            <label htmlFor="parameter_value">Parameter Value: </label>
            <input type="text" id="parameter_value" name="parameter_value" defaultValue={recordData.due_date} />
          </div>

          <div>
            <label htmlFor="parameter">Parameter: </label>
            <input type="text" id="parameter" name="parameter" value="max_score" />
          </div>
          <div>
            <label htmlFor="parameter_value">Parameter Value: </label>
            <input type="number" id="parameter_value" name="parameter_value" defaultValue={recordData.max_score} />
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
