import React from 'react'
import SideNav from '../components/admin/SideNav'
import TopNav from '../components/admin/TopNav'

const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <TopNav />
        <SideNav />
        {children}
        
    </div>
  )
}

export default AdminLayout