import React, {useEffect}       from 'react'
import {
    useDispatch,
    useSelector
}                               from 'react-redux'
import AdminControls            from '../../shared/Admin/AdminControls'
import Div                      from '../../shared/Basic/Div'
import OrderCard                from '../../shared/Cards/OrderCard'
import AdminWrapper             from '../../shared/Layout/AdminWrapper'
import ContentWrapper           from '../../shared/Layout/ContentWrapper'
import {adminOrderWrapperStyle} from './styles'

const ManageOrders = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {orders, updatedOrder} = useSelector(state => state.shop)

    useEffect(() => {
        dispatch({
            type: 'shop/getStatusValues',
            payload: {
                _id: _id,
                token: token
            }
        })
        dispatch({
            type: 'shop/getOrders',
            payload: {
                _id: _id,
                token: token
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'shop/getOrders',
            payload: {
                _id: _id,
                token: token
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatedOrder])

    return (
        <ContentWrapper>
            <AdminWrapper>
                <AdminControls
                    data={orders}
                    title={'Order'}
                    create={'/create/order'}
                />
                <Div theme={adminOrderWrapperStyle}>
                    {orders && orders.map(o =>
                        <OrderCard
                            key={o._id}
                            o={o}
                        />
                    )}
                </Div>
            </AdminWrapper>
        </ContentWrapper>
    )
}

export default ManageOrders
