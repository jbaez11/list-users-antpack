
import {useSelector} from 'react-redux'

export default function userList() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const users = useSelector(state=>state.users)
   console.log(users);
  return (
    <div className="w-4/6">
      <header className='flex justify-between items-center py-4'>
        <h1>Usuarios registrados{users.length}</h1>
      </header>
    <div className="grid grid-cols-3 gap-3">
        
        {users.map(user => (
            <div className="bg-neutral-800 p-4 rounded-md" key={user.id}>
                <h3 className="text-lg font-bold">{user.name}</h3>
                <h3>{user.email}</h3>
                <h3>{user.address.city}</h3>
                <h3>{user.company.name}</h3>
            </div>
        ))}
    </div>
    </div>
  )
}
