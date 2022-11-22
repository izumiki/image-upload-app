import { useForm } from 'react-hook-form'
import { AccountProps } from '../../types/account'
import { AccountFormValues } from '../../types/form'
import Form from './AccountForm'

const Account = ({ account }: { account: AccountProps }) => {
  const { register, handleSubmit, formState } = useForm<AccountFormValues>({
    defaultValues: {
      email: account.email,
      username: account.username,
      profile: account.profile,
      avatar_src: account.avatarSrc,
      avatar_image: undefined,
    },
  })

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form
        label='email'
        type='text'
        name='email'
        register={register}
        formState={formState}
        rules={{ disabled: true }}
      />
      <Form
        label='名前'
        type='text'
        name='username'
        register={register}
        formState={formState}
        rules={{ required: true }}
      />
      <Form
        label='プロフィール'
        type='text'
        name='profile'
        register={register}
        formState={formState}
        rules={{ required: true }}
      />
      <Form
        label='アバターSrc'
        type='text'
        name='profile'
        register={register}
        formState={formState}
        rules={{ required: true }}
      />
      <input type='submit' />
    </form>
  )
}

export default Account
