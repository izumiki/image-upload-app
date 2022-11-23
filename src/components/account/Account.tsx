import { useForm } from 'react-hook-form'
import { AccountProps } from '../../types/account'
import { AccountFormValues } from '../../types/form'
import Form from './AccountForm'
import LargeForm from './AccountLargeForm'
import Avatar from './Avatar'
import { updateAccount } from './connectAccountScheme'

const Account = ({ account }: { account: AccountProps }) => {
  const { register, handleSubmit, formState } = useForm<AccountFormValues>({
    defaultValues: {
      email: account.email,
      username: account.username,
      profile: account.profile,
    },
  })

  return (
    <form onSubmit={handleSubmit((e) => console.log(e))}>
      <h1 className='mb-12 text-3xl font-bold '>Admin Page</h1>

      <div className='flex flex-row gap-24'>
        <div className='flex-auto'>
          <Avatar
            avatarSrc={account.avatarSrc}
            avatarSide={250}
            name='avatar_image'
            register={register}
            formState={formState}
            options={{ required: true }}
          />
        </div>
        <div className='flex flex-auto flex-col items-end justify-center gap-4'>
          <Form
            label='名前'
            type='text'
            name='username'
            register={register}
            formState={formState}
            options={{ required: true }}
          />
          <LargeForm
            label='プロフィール'
            type='text'
            name='profile'
            register={register}
            formState={formState}
            options={{ required: true }}
          />
          <button
            type='submit'
            className='w-1/3 rounded bg-teal-500 py-2 px-4 font-bold text-white
              hover:bg-teal-700 focus:outline-none'
          >
            更新
          </button>
        </div>
      </div>
    </form>
  )
}

export default Account
