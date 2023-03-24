import Image from 'next/image'
import { AccountProps } from '../../types/account'

const Profile = ({ profile }: { profile: AccountProps }) => {
  const side: number = 384
  return (
    <div className='flex flex-col flex-nowrap p-8'>
      <h1 className='justify-start py-8 text-5xl font-bold'>Profile</h1>
      <div className='flex flex-auto flex-row gap-12'>
        <div className='flex h-96 w-96 flex-auto flex-col gap-12'>
          {profile.avatarSrc ? (
            <Image
              src={profile.avatarSrc}
              alt='avatar'
              width={side}
              height={side}
              className='h-full w-full rounded-full'
            />
          ) : (
            <div className='h-full w-full rounded-full' />
          )}
        </div>
        <div className='flex h-96 w-auto flex-col flex-wrap gap-6'>
          <div className='text-2xl'>{profile.username}</div>
          <div className='whitespace-pre text-lg'>{profile.profile}</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
