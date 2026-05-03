import { auth } from '@/lib/auth'
import { updateInfo } from '../Components/UpdateInfo'

const ProfilePage = () => {
    const session =auth.useSession();
  return (
    
    <div>
<h1>Profile</h1>
<h2>
    name: {session?.data?.user?.name} <br />
    email: {session?.data?.user?.email}
    <br>
    </updateInfo />
    
</h2>


    </div>
  )
}

export default ProfilePage