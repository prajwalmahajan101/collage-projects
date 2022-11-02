import React from 'react';

import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function Item(props) {
    const { item } = props
    return (
        <div className='col-md-3 m-3'>


        <Card
            outline
            style={{
                width: '18rem'
            }}
        >
            <img
                alt="Sample"
                src={item.img}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {item.name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Price : Rs. {item.price}
                </CardSubtitle>
                <button className='btn btn-primary'>
                    Buy
                </button>
            </CardBody>
        </Card>
        </div>
    )
}
