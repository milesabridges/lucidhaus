import {adminDashboardMenu} from 'config/menus/adminDashboard'
import React                from 'react'
import {useSelector}        from 'react-redux'
import ContentWrapper   from 'shared/Layout/ContentWrapper'
import DashboardInfo    from 'shared/Layout/dashboard/DashboardInfo'
import DashboardWrapper from 'shared/Layout/dashboard/DashboardWrapper'

const AdminDashboard = () => {
    const {name, email} = useSelector(state => state.user)

    return (
        <ContentWrapper>
            <DashboardWrapper menu={adminDashboardMenu}>
                <DashboardInfo
                    heading={`Hey, ${name}`}
                    description={`${email}`}
                />
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default AdminDashboard