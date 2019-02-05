import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as FormAction } from '../store/actions/form';
import CustomCard from '../common/CustomCard';

const NewItem = (props) => (
    <CustomCard
        link="#"
        containerClass="list-item"
    >
        <p className="title">Novo Produto</p>
        <FontAwesomeIcon icon={faPlusCircle} color="#e4e4e4" size="8x" />
    </CustomCard>
)

export default NewItem;
