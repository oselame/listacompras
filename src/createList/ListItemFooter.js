import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormAction } from '../store/actions/form';

const ListItemFooter = (props) => (
    <div className="list-card-footer">
        <div className="list-card-footer-actions">
            <FontAwesomeIcon 
                icon={faPen}
                color="#00b0ff"
                size="1x"
                onClick={() => props.startUpdate(props.item)}
            />
            <FontAwesomeIcon 
                onClick={() => props.deleteProduct(props.item.id)}
                icon={faTrash}
                color="#e91e63"
                size="1x"
            />
        </div>
        <div>Total: R$ { props.item.total }</div>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators(FormAction, dispatch);

export default connect(null, mapDispatchToProps)(ListItemFooter);