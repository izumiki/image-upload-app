import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Spinner from '../../Spinner'

type ConfirmItemProps = {
  label: string
  name: string
  unit?: string
}
const ConfirmItem = (props: ConfirmItemProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { getValues } = useForm()

  // useEffect(() => {
  //   // if (props.key !== undefined) setLoading(false)
  //   console.log('name', getValues(props.name))
  //   // console.log(loading)

  // }, [props])

  if (loading) return <Spinner />

  return (
    <div className='flex w-full flex-row'>
      <div className='flex w-24  px-2'>
        <label className='text-right text-lg font-bold'>{props.label}</label>
        <label className='grow text-right text-right text-lg font-bold'>
          :
        </label>
      </div>

      <div className='flex w-5/6 px-2 '>
        <div className='text-lg'>{props.name}</div>
        <div className='ml-2 text-right text-lg'>
          {props.name ? props.unit : ''}
        </div>
      </div>
    </div>
  )
}

export default ConfirmItem
