import { signOut } from '@/auth'

export default function SettingsPage() {
  return (
    <>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </>
  )
}