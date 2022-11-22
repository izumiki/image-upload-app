import { useForm } from 'react-hook-form'
import { AccountProps } from '../../types/account'
import { AccountFormValues } from '../../types/form'
import Form from './AccountForm'
import Avatar from './Avatar'
import { updateAccount } from './connectAccountScheme'

const Account = ({ account }: { account: AccountProps }) => {
  const { register, handleSubmit, formState } = useForm<AccountFormValues>({
    defaultValues: {
      email: account.email,
      username: account.username,
      profile: account.profile,
      avatar_src: account.avatarSrc,
    },
  })

  // console.log('defaultvalues', formState.defaultValues)

  return (
    <form onSubmit={handleSubmit(updateAccount)}>
      <Avatar
        avatarSrc={account.avatarSrc}
        avatarSide={250}
        name='avatar_image'
        register={register}
        formState={formState}
        options={{ required: true }}
      />
      <Form
        label='名前'
        type='text'
        name='username'
        register={register}
        formState={formState}
        options={{ required: true }}
      />
      <Form
        label='プロフィール'
        type='text'
        name='profile'
        register={register}
        formState={formState}
        options={{ required: true }}
      />

      <input
        type='submit'
        className='rounded bg-teal-500 py-2 px-4 font-bold text-white hover:bg-teal-700 focus:outline-none'
      />
    </form>
  )
}

export default Account
