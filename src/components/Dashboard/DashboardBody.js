import React from 'react';

import Average from './Average';
import Customers from './Customers';

const DashboardBody = () => {
    return (
        <div className="dashboard-body">
            <div className="dashboard-body-main-container">
                <div className="dashboard-body-inner-contaien">
                    <Average /><hr/>
                    <Customers />
                </div>
            </div>
        </div>
    )
}

export default DashboardBody;
