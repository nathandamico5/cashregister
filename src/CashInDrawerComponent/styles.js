const styles = theme => ({

    closeDrawerButton: {
        position: 'absolute',
        top: '0px',
        backgroundColor: '#1d344e',
        color: '#ffffff',
        top: '-35px',
        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#000000'
        }
    },
    registerBox: {
        //padding: '0px 50px',
        justifyContent: 'center',
        padding: '20px'
    },
    currencyBox: {
        textAlign: 'center'
    },
    currency: {
        padding: '10px'
    },
    currencyChange: {
        padding: '10px'
    },
    howMuchIn: {
        backgroundColor: '#1d344e',
        margin: '0px',
        padding: '10px',
        color: '#ffffff',
        borderRadius: '5px'
    },
    howMuchBack: {
        backgroundColor: '#00ff00',
        margin: '0px',
        padding: '10px',
        color: '#000000',
        borderRadius: '5px'
    },
    changeDue: {
        textAlign: 'center'
    },
    change: {
        display: 'inline-block',
        padding: '0px 10px',
        fontSize: '25px'
    },
    submitTransactionButton: {
        backgroundColor: '#1d344e',
        color: '#ffffff',
        bottom: '22px',
        position: 'absolute',
        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#000000'
        }
    },
    addCIDbutton: {
        float: 'right',
        height: '20px',
        width: '20px',
        borderRadius: '10px',
        '&:hover': {
            cursor: 'pointer',
            background: '#1d344e',
            color: '#ffffff'
        }
    },
    minusCIDbutton: {
        float: 'left',
        height: '20px',
        width: '20px',
        borderRadius: '10px',
        '&:hover': {
            cursor: 'pointer',
            background: '#1d344e',
            color: '#ffffff'
        }
    },
    insufficient: {
        display: 'block',
        width: '100%',
        textAlign: 'center',
        color: '#cc0000'
    }

});

export default styles;