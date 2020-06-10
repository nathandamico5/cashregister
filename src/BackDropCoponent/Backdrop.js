import React from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/core';

class Backdrop extends React.Component {
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.backdrop} />
        )
    }
}

export default withStyles(styles)(Backdrop);