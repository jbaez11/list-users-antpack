
import { useEffect, useState } from 'react';
import { getUsersRequest } from '../api/users.api';

export default function userList() {
   // eslint-disable-next-line react-hooks/rules-of-hooks

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [users, setUsers] = useState([])
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(()=>{
    async function loadUsers(){
      const usersResponse = await getUsersRequest()
      setUsers(usersResponse.data.body)
    }
    loadUsers()
   },[])
  return (
    <div className="">
      <header className='flex justify-between items-center py-4'>
        <h1>Usuarios registrados{users.length}</h1>
    </header>
    <div className="grid grid-cols-3 gap-3">
    {users.map(user => (
        <div class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
        </div>
        <div class="flex flex-col items-center pb-10">
            <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
            <div class="flex mt-4 space-x-3 md:mt-6">
                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900  rounded-lg  ">City</a>
                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900  rounded-lg ">Company</a>
            </div>
            <div class="flex  space-x-3">
                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg">{user.address.city}</a>
                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg ">{user.company.name}</a>
            </div>
        </div>
      </div>
       ))}

    </div>
      

    </div>
  )
}
