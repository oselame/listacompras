import React from 'react'

import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import CustomCard from '../common/CustomCard';
import ListItemFooter from './ListItemFooter';

const ListItem = ({ item, deleteProduct, toogleProduct, list }) => (
    <CustomCard
        link="#"
        image={ item.img }
        containerClass="list-item"
        footer={ 
            <ListItemFooter 
                item={ item } 
                deleteProduct={deleteProduct}
                list={ list }
            /> 
        }
        action={ () => toogleProduct(item.id) }
    >
    <div>
        <div className="list-item-header">
            <Typography variant="subtitle1" component="h2">{ item.product }</Typography>
            <Checkbox checked={ item.checked } />
        </div>

        <Typography component="p">{ item.quantity }  { item.unit }</Typography>
        <Typography component="p">R$ { item.price }</Typography>
    </div>

</CustomCard>
)

export default ListItem;