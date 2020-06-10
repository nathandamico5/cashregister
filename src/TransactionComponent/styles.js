const styles = theme => ({

    transaction: {
        height: 'calc(100% - 40px)',
        padding: '20px',
        overflow: 'scroll'
    },
    rowItem: {
        display: 'inline-block',
        padding: '0px 20px'
    },
    row: {
        display: 'block',
        margin: '20px',
        textAlign: 'center'
    },
    enterPaymentButton: {
        width: 'calc(100% - 40px)',
        margin: '0px 20px',
        border: '1px solid #1d344e'
    },
    orderItem: {
        display: 'inline-block',
        padding: '0px 10px'
    },
    orderBox: {
        backgroundColor: '#cccccc',
        borderRadius: '10px'
    },
    errorMessage: {
        color: '#ff0000'
    }
});
  
export default styles;
