export interface AccountProps {
  id: string
  email: string
  username: string
  profile: string
  avatarSrc: string
}

export type Accounts = {
  id: string
  email: string
  name: string
  profile: string
  avatarSrc: string
  created_at: Date
  updated_at: Date
}
