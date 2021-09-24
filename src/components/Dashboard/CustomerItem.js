import React from 'react'

const CustomerItem = (props) => {
    return (
        <div className="single-customer" key={props.id} style={props.order % 2 == 0 ? {backgroundColor: '#ecedf3'} : {backgroundColor: '#fff'}}>
            <div className="text-container single-container">{props.id}</div>
            <div className="text-container single-container">{props.firstname} {props.lastname}</div>
            <div className="text-container single-container">{props.email}</div>      
            <div className="text-container single-container">{props.phone}</div>      
            <div className="text-container single-container">{props.location}</div>      
        </div>
    )
}

export default CustomerItem;
