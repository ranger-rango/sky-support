import { createFileRoute, useNavigate } from '@tanstack/react-router'
import useFetchData from '../../../../../components/use-fetch-data'
import Button from '../../../../../components/btn'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import useUpdateDojoRecord from '../../../../../components/update-dojo-record'


export const Route = createFileRoute('/_protected/the-dojo/admin/users/$recordId',)(
{
  component: RouteComponent,
})

function RouteComponent()
{
  const { recordId } = Route.useParams()
  const adminToken : string = import.meta.env.VITE_ADMIN_TOKEN
  const baseUrl : string = import.meta.env.VITE_BASE_URL
  const usersEndpoint : string = import.meta.env.VITE_USERS_ENDPOINT
  const url : string = `${baseUrl}${usersEndpoint}/${recordId}`

  // const { data, loading, error } = useFetchData(url, adminToken)
  const { data, isLoading, error } = useFetchData(url, adminToken)
  const recordData = data?.user

  const [param, setParam] = useState<string | null>(null)
  const [frag, setFrag] = useState<string | null>(null)
  const modParam = (event : ChangeEvent<HTMLSelectElement> ) => 
  {
    const value = event.target.value
    setParam(value)
    setFrag(value)
  }
  const { CUDFunc, data : updateData, loading : updateLoading, error : updateError } = useUpdateDojoRecord(url, adminToken, "PUT", frag)
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
              Dojo User {recordData.id}
          </h3>
          <div>
          </div>
      </div>

      <section className="main-body">
        <div className='record-info-container'>
          <div className='record-prof'>
            <img src={recordData.avatar_url} alt="record-profile-image" />
          </div>
          <div className='record-info-inner-container'>
            <p className='rcd-info'>Id <span className='rcd-value'>{ recordData.id }</span></p>
            <p className='rcd-info'>Email <span className='rcd-value'>{ recordData.email }</span></p>
            <p className='rcd-info'>Name <span className='rcd-value'>{ recordData.name }</span></p>
            <p className='rcd-info'>Google Id <span className='rcd-value'>{ recordData.google_id }</span></p>
            <p className='rcd-info'>Role <span className='rcd-value'>{ recordData.role }</span></p>
            <p className='rcd-info'>Status <span className='rcd-value'>{ recordData.status }</span></p>
            <p className='rcd-info'>Created At <span className='rcd-value'>{ recordData.created_at }</span></p>
            <p className='rcd-info'>Updated At <span className='rcd-value'>{ recordData.updated_at }</span></p>
          </div>
        </div>
        <form id="edit-record-form" onSubmit={handleSubmit} >
          <h3>Update User</h3>
          <div>
            <label htmlFor="parameter">Parameter: </label>
            <select onChange={modParam} name="parameter" id="parameter">
              <option value="role">Role</option>
              <option value="status">Status</option>
            </select>
          </div>

          <div>
            <label htmlFor="parameter_value">Parameter Value: </label>
            <select name="parameter_value" id="parameter_value">
              {
                param === "role" ?
                (
                  <>
                    <option value="admin">Admin</option>
                    <option value="trainee">Trainee</option>
                  </>
                ) : 
                (
                  <>
                    {/* <option value="">Value</option> */}
                  </>
                )
              }

              {
                param === "status" ?
                (
                  <>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                  </>
                ) : 
                (
                  <>
                    {/* <option value="">Value</option> */}
                  </>
                )
              }

            </select>
          </div>

        </form>
      </section>

      <div className="form-footer">
        <Button id="create-btn" className="gen-btn pri-btn" type="submit" label="Update" form="edit-record-form" />
        <Button id="cancel-btn" className="gen-btn sec-btn" type="reset" label="Cancel" form="edit-record-form" />
        <Button id="delete-btn" className="gen-btn sec-btn" type="button" label="Delete Record" onClick={handleDelete} />
      </div>
    </>
  )
}
