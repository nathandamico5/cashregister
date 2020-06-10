const styles = theme => ({

    addItems: {
        height: 'calc(100% - 40px)',
        overflow: 'scroll',
        padding: '20px',
        backgroundColor: '#cccccc'
    },
    itemButton: {
        textAlign: 'center',
        padding: '10px',
        cursor: 'pointer',
    },
    addButton: {
        float: 'right',
        height: '20px',
        width: '20px',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: '#1d344e',
            color: '#ffffff'
        }
    },
    minusButton: {
        float: 'left',
        height: '20px',
        width: '20px',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: '#1d344e',
            color: '#ffffff'
        }
    },
    itemCount: {
        float: 'right',
        fontSize: '20px'
    }

});

export default styles;