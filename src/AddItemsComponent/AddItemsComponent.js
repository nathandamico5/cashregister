import React from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class AddItemsComponent extends React.Component {

    addItem = (name, price) => {
        this.props.addItemFn(name, price);
    }

    minusItem = (name, price) => {
        this.props.minusItemFn(name, price);
    }

    // itemCount = (items, name) => {
    //     let index;
    //     if(items.length > 0){
    //         for (let i = 0; i < items.length; i++){
    //             if(items[i][0] === name){
    //                 return items[i][1]
    //             }
    //         }
    //     }
    // }

    render() {
        //Put in state to keep track of number of items purchased (add number prop to each obj)
        const menu = ([
            {
                name: 'Slice of Pizza',
                price: 2.50
            },
            {
                name: 'Small Pizza',
                price: 10.00
            },
            {
                name: 'Medium Pizza',
                price: 12.00
            },
            {
                name: 'Large Pizza',
                price: 14.00
            },
            {
                name: 'Hamburger',
                price: 5.75
            },
            {
                name: 'Cheeseburger',
                price: 6.75
            },
            {
                name: 'French Fries',
                price: 3.50
            },
            {
                name: 'Chicken Tenders',
                price: 8.75
            },
            {
                name: 'Caeser Salad',
                price: 7.99
            },
            {
                name: 'Garden Salad',
                price: 6.99
            },
            {
                name: 'Mozzarella Sticks',
                price: 5.50
            },
            {
                name: 'Small Soda',
                price: 1.75
            },
            {
                name: 'Large Soda',
                price: 2.75
            },
            {
                name: 'Water',
                price: 1.50
            },
            {
                name: 'Iced Tea',
                price: 2.00
            }
        ]);

        const {classes} = this.props;

        return(
            <Paper className={classes.addItems}>
                <Grid container spacing={2} className={classes.itemsList}>
                    {
                        menu.map((_item) => {
                            return(
                                <Grid item xs={4} sm={4} key={_item.name}>
                                    <Paper className={classes.itemButton}>
                                        {/* <div className={classes.itemCount}>{this.itemCount(this.props.currentOrder, _item.name)}</div> */}
                                        <div className={classes.addButton} onClick={(name, price) => this.addItem(_item.name, _item.price)}>+</div>
                                        <div className={classes.minusButton} onClick={(name, price) => this.minusItem(_item.name, _item.price)}>-</div>
                                        <h4>{_item.name}</h4>
                                        <p>${_item.price}</p>
                                    </Paper>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(AddItemsComponent);