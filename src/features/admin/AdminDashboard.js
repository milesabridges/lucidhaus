import {adminDashboardMenu} from 'config/menus'
import PurchaseHistory      from 'features/user/PurchaseHistory'
import React                from 'react'
import ContentWrapper       from 'shared/Layout/ContentWrapper'
import DashboardWrapper     from 'shared/Layout/Dashboard/DashboardWrapper'

const AdminDashboard = () => {
    return (
        <ContentWrapper>
            <DashboardWrapper menu={adminDashboardMenu}>
                <PurchaseHistory/>
            </DashboardWrapper>
        </ContentWrapper>

    )
}

export default AdminDashboard