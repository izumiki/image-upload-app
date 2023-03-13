import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Spinner from '../../Sppiner'

type MailFormItemProps = {
  label:string,
  name: string,
  unit?: string,
}
const MailFormItem = (
  props: MailFormItemProps
) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { getValues } = useForm()
  
  // useEffect(() => {
  //   // if (props.key !== undefined) setLoading(false)
  //   console.log('name', getValues(props.name))
  //   // console.log(loading)

  // }, [props])

  if (loading) return <Spinner />

  return (
    <div>
      <label>{props.label}</label>
      <span>{props.name}</span>
    </div>
  )
}

export default MailFormItem
