import React from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class TransactionComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            payment: 0,
            error: false
        }
    }

    payment = (e) => {
        e.preventDefault();
        if(this.state.payment < this.props.amountDue || (((this.props.amountDue - this.state.payment) > this.props.totalCID) && (this.props.amountDue !== this.state.payment))){
            this.setState({
                error: true
            });
        } else {
            this.props.calculateChange(this.state.payment);
            this.setState({
                error: false
            });
        }
        //this.props.amountPaid(this.state.payment);
    }

    handleChange = (e) => {
        this.setState({
            payment: parseFloat(e.target.value)
        });
    }

    render() {
        const {classes} = this.props;
        return(
            <Paper className={classes.transaction}>
                <div className={classes.orderBox}>
                {
                    (this.props.currentOrder.length > 0) ?
                    this.props.currentOrder.map((_items) => {
                        return(
                            <div key={_items[0]}>
                                <h3 className={classes.orderItem}>{_items[0]}: </h3>
                                <p className={classes.orderItem}>{_items[1]}</p>
                            </div>
                        );
                    }) :
                    null
                }
                </div>
                <div className={classes.row}>
                        <h2 className={classes.rowItem}>Amout Due:</h2><TextField className={classes.rowItem} variant='outlined' disabled value={'$' + this.props.amountDue}></TextField>
                </div>
                <form className={classes.transactionForm} onSubmit={(e) => this.payment(e)}>
                    {
                        this.state.error ? 
                        <div className={classes.row}>
                            <h2 className={classes.rowItem} >Amout Paid:</h2><TextField className={classes.rowItem} variant='outlined' onChange={this.handleChange}></TextField>
                            <p className={classes.errorMessage}>Insufficient Funds</p>
                        </div> :
                        <div className={classes.row}>
                            <h2 className={classes.rowItem} >Amout Paid:</h2><TextField className={classes.rowItem} variant='outlined' onChange={this.handleChange}></TextField>
                        </div>
                    }
                    <Button type='submit' className={classes.enterPaymentButton}>Enter Amount Paid</Button>
                </form>
                <div className={classes.row}>
                        <h2 className={classes.rowItem}>Change Due:</h2><TextField className={classes.rowItem} variant='outlined' disabled value={'$' + this.props.changeDue}></TextField>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(TransactionComponent);