import { auth, signOut } from '@/auth'

export default async function SettingsPage() {
  const session = await auth()
  return (
    <>
      <div>{JSON.stringify(session, null, 2)}</div>
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
