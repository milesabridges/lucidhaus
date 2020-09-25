import Div from "../../Basic/Div";
import H3 from "../../Basic/H3";
import moment from "moment";
import React from "react";
import PropTypes from "prop-types";

const UserPurchaseHistory = ({purchaseHistory, error}) => {

    return (
        <Div>
            {error && (
                <Div>
                    {error}
                </Div>
            )}
            <H3>
                {purchaseHistory.map((h, i) => (
                    h.products.map((p, i) => {
                        return (
                            <Div key={i}>
                                <H3>{p.name}</H3>
                                <h6>Product price: ${p.price}</h6>
                                <h6>
                                    Purchased date:{' '}
                                    {moment(p.createdAt).fromNow()}
                                </h6>
                            </Div>
                        )
                    })
                ))
                }
            </H3>
        </Div>
    )
}

UserPurchaseHistory.propTypes = {
    purchaseHistory: PropTypes.array,
}


export default UserPurchaseHistory