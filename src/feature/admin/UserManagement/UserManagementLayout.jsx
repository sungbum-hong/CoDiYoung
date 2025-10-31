import { useState } from "react"

import UserManagement from "./UserManagement"
import AddUser from "./AddUser"

export default function UserManagementLayout(){
    const [isOpenAddUser,setIsOpenAddUser] = useState(false)
    const handleAddUserLayout = ()=>{

    }
    return(
        <div>
            {isOpenAddUser ? <AddUser setIsOpenAddUser = {setIsOpenAddUser} /> : <UserManagement setIsOpenAddUser = {setIsOpenAddUser}/>}
            
        </div>
    )
}