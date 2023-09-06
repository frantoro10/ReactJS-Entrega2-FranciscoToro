import React from 'react'
// 2 horas regenando de porque no me mostraba la carta y era porque no la habia importado la card de bootsrap.
import Card from 'react-bootstrap/Card';

import { useParams } from 'react-router-dom'
import { ProductsData } from '../../json/ProductsData'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const productFiltered = ProductsData.filter((item) => item.id === parseInt(productId));
    console.log(productFiltered)

    return (
        <div>
        {productFiltered.map((item) => (
            <Card style={{ width: '18rem' }} key={item.id}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.description}
                        <h5>{item.price}</h5>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))}
        </div>      
    );
}

export default ItemDetailContainer  