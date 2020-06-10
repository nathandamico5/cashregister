import React from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class CashInDrawerComponent extends React.Component {

    addCID =(value) => {
        this.props.addCIDFn(value);
    }

    minusCID =(value) => {
        this.props.minusCIDFn(value);
    }

    getIndex = (name) => {
        for(let i = 0; i < this.props.cashBack.length; i++) {
            if(this.props.cashBack[i][0] === name){
                return i;
            }
        }
    }

    resetOrder = () => {
        this.props.resetOrder();
    }

    render() {
        const {classes} = this.props;
        return(
            <div className={this.props.theClass}>
                <Button className={classes.closeDrawerButton} onClick={this.props.toggleDrawer}>Close Register</Button>
                <Grid container spacing={2} className={classes.registerBox}>
                    {
                        this.props.error ?
                        <h2 className={classes.insufficient}>INSUFFICIENT FUNDS</h2> :
                        null
                    }
                    {
                        this.props.cid.map((_currency) => {
                            return(
                                <Grid item xs={2} sm={2} className={classes.currencyBox} key={_currency.name}>
                                    {
                                        (!this.props.cashBack) ?
                                            <div>
                                            <Paper className={classes.currency}>
                                                <div className={classes.addCIDbutton} onClick={(value) => this.addCID(_currency.value)}>+</div>
                                                <div className={classes.minusCIDbutton} onClick={(value) => this.minusCID(_currency.value)}>-</div>
                                                <h4>${_currency.value}</h4>
                                            </Paper>
                                            <p className={classes.howMuchIn}>${_currency.quantity}</p>
                                            </div> :
                                            this.props.cashBack.some(_row => _row.includes(_currency.name)) ?
                                            <div>
                                            <Paper className={classes.currencyChange}>
                                                <div className={classes.addCIDbutton} onClick={(value) => this.addCID(_currency.value)}>+</div>
                                                <div className={classes.minusCIDbutton} onClick={(value) => this.minusCID(_currency.value)}>-</div>
                                                <h4>${_currency.value}</h4>
                                            </Paper>
                                            <p className={classes.howMuchIn}>${_currency.quantity}</p>
                                            <p className={classes.howMuchBack}>${this.props.cashBack[this.getIndex(_currency.name)][1]}</p>
                                            </div> :
                                            <div>
                                            <Paper className={classes.currency}>
                                                <div className={classes.addCIDbutton} onClick={(value) => this.addCID(_currency.value)}>+</div>
                                                <div className={classes.minusCIDbutton} onClick={(value) => this.minusCID(_currency.value)}>-</div>
                                                <h4>${_currency.value}</h4>
                                            </Paper>
                                            <p className={classes.howMuchIn}>${_currency.quantity}</p>
                                            </div> 
                                    }
                                </Grid>
                            );
                        })
                    }
                </Grid>
                <div className={classes.changeDue}>
                        <h2 className={classes.change}>Change Due:</h2><div className={classes.change}>{'$' + this.props.changeDue}</div>
                </div>
                <Button onClick={this.resetOrder} className={classes.submitTransactionButton} fullWidth>Transaction Complete</Button>
            </div>
        );
    }
}

export default withStyles(styles)(CashInDrawerComponent);