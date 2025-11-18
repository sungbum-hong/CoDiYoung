import { useState } from "react"

import UserManagement from "./UserManagement"
import AddUser from "./AddUser"
import EditUser from "./EditUser"

export default function UserManagementLayout(){
    const [isOpenAddUser, setIsOpenAddUser] = useState(false)
    const [isOpenEditUser, setIsOpenEditUser] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)

    const handleAddUserLayout = () => {

    }

    return(
        <div>
            {isOpenAddUser ? (
                <AddUser setIsOpenAddUser={setIsOpenAddUser} />
            ) : isOpenEditUser ? (
                <EditUser
                    setIsOpenEditUser={setIsOpenEditUser}
                    selectedUser={selectedUser}
                />
            ) : (
                <UserManagement
                    setIsOpenAddUser={setIsOpenAddUser}
                    setIsOpenEditUser={setIsOpenEditUser}
                    setSelectedUser={setSelectedUser}
                />
            )}
        </div>
    )
}