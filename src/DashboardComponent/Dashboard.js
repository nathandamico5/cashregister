import React from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TransactionComponent from '../TransactionComponent/TransactionComponent';
import AddItemsComponent from '../AddItemsComponent/AddItemsComponent';
import CashInDrawerComponent from '../CashInDrawerComponent/CashInDrawerComponent';
import Backdrop from '../BackDropCoponent/Backdrop';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            cid: [
                {name: "ONE HUNDRED", value: 100.00, quantity: 0},
                {name: "FIFTY", value: 50.00, quantity: 0},
                {name: "TWENTY", value: 20.00, quantity: 0},
                {name: "TEN", value: 10.00, quantity: 0},
                {name: "FIVE", value: 5.00, quantity: 0},
                {name: "ONE", value: 1.00, quantity: 0},
                {name: "QUARTER", value: .25, quantity: 0},
                {name: "DIME", value: .10, quantity: 0},
                {name: "NICKLE", value: .05, quantity: 0},
                {name: "PENNY", value: .01, quantity: 0}
            ],
            totalCID: 0,
            amountDue: 0,
            amountPaid: 0,
            changeDue: '',
            viewCid: false,
            order: [],
            cashBack: '',
            error: false
        }
    }

    addItem = (name, price) => {
        let newItem = true;
        let index;
        if(this.state.order.length > 0){
            for (let i = 0; i < this.state.order.length; i++){
                if(this.state.order[i][0] === name){
                    newItem = false;
                    index = i;
                }
            }
        }
        if (newItem){
            let order = this.state.order.slice();
            this.setState({
                amountDue: (Math.round((this.state.amountDue + price)* 100) / 100),
                order: order.concat([[name, 1]])
            });
        } else {
            let order = this.state.order.slice();
            order[index] = [name, order[index][1] += 1];
            this.setState({
                amountDue: (Math.round((this.state.amountDue + price)* 100) / 100),
                order: order
            });
        }
    }

    minusItem = (name, price) => {
        let index = null;
        if(this.state.order.length > 0){
            for (let i = 0; i < this.state.order.length; i++){
                if(this.state.order[i][0] === name){
                    index = i;
                }
            }
        }
        if ((index !== null) && (this.state.order[index][1] !== 0)){
            let order = this.state.order.slice();
            order[index] = [name, order[index][1] -= 1];
            if (order[index][1] === 0){
                order.splice(index, 1);
                this.setState({
                    amountDue: (Math.round((this.state.amountDue - price)* 100) / 100),
                    order: order
                });
            } else {
                order = this.state.order.slice();
                this.setState({
                    amountDue: (Math.round((this.state.amountDue - price)* 100) / 100),
                    order: order
                });
            }
        } 
    }

    addCID = (value) => {
        let index = null;
        for (let i = 0; i < this.state.cid.length; i++) {
            if (this.state.cid[i].value === value){
                index = i;
            }
        }
        let cid = this.state.cid.slice();
        cid[index].quantity = (Math.round((cid[index].quantity + value)* 100) / 100);
        let total = (Math.round((this.state.totalCID + cid[index].value)* 100) / 100);
        this.setState({
            cid: cid,
            totalCID: total
        });
    }

    minusCID = (value) => {
        let index = null;
        for (let i = 0; i < this.state.cid.length; i++) {
            if (this.state.cid[i].value === value){
                index = i;
            }
        }
        if (this.state.cid[index].quantity > 0){
            let cid = this.state.cid.slice();
            cid[index].quantity = (Math.round((cid[index].quantity - value)* 100) / 100);;
            let total = (Math.round((this.state.totalCID - cid[index].value)* 100) / 100);
            this.setState({
                cid: cid,
                totalCID: total
            });
        }
    }

    // payment = (amount) => {
    //     this.setState({
    //         amountPaid: amount,
    //         changeDue: (Math.round((this.state.amountDue - amount) * 100) / 100) * (-1)
    //     });
    // }

    calculateChange = (amount) => {
        console.log(amount);
        console.log(this.state.amountDue);
        console.log('total cid: ' + this.state.totalCID);
        if(this.state.totalCID < this.state.changeDue && amount !== this.state.amountDue){
            this.setState({
                error: true
            });
        } else {
        this.setState({
            error: false,
            amountPaid: amount,
            changeDue: (Math.round((this.state.amountDue - amount) * 100) / 100) * (-1)
        });
        let cashin = [...this.state.cid];
        let change = (Math.round((this.state.amountDue - amount) * 100) / 100) * (-1);
        let cash_back = [];
        let values = [
            {name: "ONE HUNDRED", value: 100.0},
            {name: "FIFTY", value: 50.0},
            {name: "TWENTY", value: 20.0},
            {name: "TEN", value: 10.0},
            {name: "FIVE", value: 5.0},
            {name: "ONE", value: 1.0},
            {name: "QUARTER", value: .25},
            {name: "DIME", value: .1},
            {name: "NICKLE", value: .05},
            {name: "PENNY", value: .01}
          ];
        let count = 0;
        for (let i = 0; i <= cashin.length - 1; i++){
            if(cashin[i].quantity > 0){
                console.log('passes if');
                var difference = 0;
                while (change >= values[i].value && cashin[i].value > 0 && change >= 0 && cashin[i].quantity > 0){
                    console.log('passed while');
                    cashin[i].quantity -= values[i].value;
                    change -= Math.round(values[i].value * 100) / 100;
                    change = Math.round(change * 100) / 100;
                    console.log('Change: ' + change);
                    difference += Math.round(values[i].value * 100) / 100;
                    difference = Math.round(difference * 100) / 100;
                    count++;
                }
                if (count > 0 && difference > 0){
                    cash_back.push([values[i].name, difference]);
                }
            }
          }
          if((Math.round(change * 100) / 100) !== 0){
                console.log('error' + (Math.round(change * 100) / 100) + '!= 0');
                this.setState({
                    error: true
                });
          } else {
                this.setState({
                    cashBack: cash_back
                });
          }
        }
    }

    toggleDrawer = () => {
        this.setState({
            viewCid: !this.state.viewCid
        });
    }

    resetOrder = () => {
        console.log('reseting state');
        if (this.state.error) {
            this.toggleDrawer();
        } else {
            this.setState({
                amountDue: 0,
                amountPaid: 0,
                changeDue: '',
                order: [],
                cashBack: '',
                error: false,
                totalCID: (this.state.totalCID - this.state.changeDue)
            });
            this.toggleDrawer();
        }
    }
    render() {

        const {classes} = this.props;

        return(
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.header}>
                    <header>Cash Register Dashboard</header>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} className={classes.transaction}>
                    <AddItemsComponent addItemFn={this.addItem} minusItemFn={this.minusItem} currentOrder={this.state.order}></AddItemsComponent>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} className={classes.transaction}>
                    <TransactionComponent cid={this.state.cid} amountDue={this.state.amountDue} changeDue={this.state.changeDue} amountPaid={this.payment} currentOrder={this.state.order} calculateChange={this.calculateChange} totalCID={this.state.totalCID}></TransactionComponent>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.cashInDrawer}>
                    <Button className={classes.openRegisterButton} onClick={this.toggleDrawer}>Open Register</Button>
                    {
                        this.state.viewCid ?
                        <Backdrop /> :
                        null
                    }
                    {
                        this.state.viewCid ?
                        <CashInDrawerComponent theClass={classes.openDrawer} cashBack={this.state.cashBack} toggleDrawer={this.toggleDrawer} changeDue={this.state.changeDue} cid={this.state.cid} addCIDFn={this.addCID} minusCIDFn={this.minusCID} resetOrder={this.resetOrder} error={this.state.error}></CashInDrawerComponent> :
                        <CashInDrawerComponent theClass={classes.closeDrawer} toggleDrawer={this.toggleDrawer} changeDue={this.state.changeDue} cid={this.state.cid}></CashInDrawerComponent>
                    }
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Dashboard);