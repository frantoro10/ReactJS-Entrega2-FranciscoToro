// bootstrap

import Card from 'react-bootstrap/Card';
// styles
import styles from "./ItemListContainer.module.scss"
// import link
import { Link } from 'react-router-dom';

const ItemListContainer = ({ productsData }) => {

    return (
        productsData.map((item) => {
            return (
                <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                            <h5>{item.price}</h5>
                        </Card.Text>
                        <Link to={`/item/${item.id}`}>Mas detalles.</Link>
                    </Card.Body>
                </Card>
            )
        }
        )
    )
}



export default ItemListContainer;