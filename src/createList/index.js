import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import './List.css';

import Form from './Form';
import CustomCard from '../common/CustomCard';


const CreateList = () => (
    <div className="page-container">

        <Form />

        <div className="list-item-container">
            <CustomCard
                link="#"
                containerClass="list-item"
            >
                <div>
                    <div className="list-item-header">
                        <Typography variant="subtitle1" component="h2">Café</Typography>
                        <Checkbox />
                    </div>

                    <Typography component="p">1 Unidade</Typography>
                    <Typography component="p">R$ 10,00</Typography>
                </div>

            </CustomCard>
        </div>


    </div>
)

export default CreateList;
