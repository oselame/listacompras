import React, { Component } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import Button  from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as FormAction } from '../store/actions/form';

const unitys = ['Quilos', 'Litros', 'Unidades'];

class Form extends Component {

    state = {
        list: '',
        product: '',
        quantity: '',
        unit: '',
        price: '',
        showErros: false
    };

    componentDidUpdate(prevProps) {
        if (this.props.form.action === 'update' && prevProps.form.productToUpdate !== this.props.form.productToUpdate) {
            const { product, quantity, unit, price } = this.props.form.productToUpdate;
            this.setState({
                product,
                quantity,
                unit,
                price,
                showErros: false
            })
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = () => {
        const { list, product, quantity, unit, price } = this.state;
        if (!list || !product || !quantity || !unit) {
            this.setState({ showErros: true });
        } else {
            this.props.addProduct({ product, quantity, unit, price }, list);
            this.setState({
                product: '',
                quantity: '',
                unit: '',
                price: '',
                showErros: false
            });        
        }
    }

    render() {
        return (
            <form className="form-container">
                <div className="form-row">
                    <TextField
                        label="Lista"
                        name="list"
                        value={ this.state.list }
                        onChange={ this.handleChange }
                        required
                        error={ !this.state.list && this.state.showErros }
                    />
        
                    <Button variant="outlined" color="secondary" onClick={this.handleSubmit}>Adicionar</Button>
                </div>
                <div className="form-row">
                    <TextField
                        label="Produto"
                        name="product"
                        value={ this.state.product }
                        onChange={ this.handleChange }
                        required
                        error={ !this.state.product && this.state.showErros }
                    />
                    <TextField
                        label="Quantidade"
                        name="quantity"
                        value={ this.state.quantity }
                        onChange={ this.handleChange }
                        required
                        error={ !this.state.quantity && this.state.showErros }
                    />
                    <TextField
                        select
                        label="Unidade"
                        name="unit"
                        value={ this.state.unit }
                        onChange={ this.handleChange }
                        required
                        error={ !this.state.unit && this.state.showErros }
                    >
                        { 
                            unitys.map(option => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))
                        }
                    </TextField>
                    <TextField
                        label="Preço"
                        name="price"
                        value={ this.state.price }
                        onChange={ this.handleChange }
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>
                        }}
                    />            
                </div>
            </form>
        )
    }
} 

const mapStateToProps = (state) => ({
  form: state.form,
});

const mapDispatchToProps = dispatch => bindActionCreators(FormAction, dispatch);

export default connect( mapStateToProps, mapDispatchToProps )(Form);
