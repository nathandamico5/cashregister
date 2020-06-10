const styles = theme => ({

    container: {
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        margin: '0px'
    },
    header: {
        height: '50px',
        textAlign: 'center',
        padding: '20px 0px !important',
        backgroundColor: '#1d344e',
        color: '#ffffff'
    },
    transaction: {
        height:'calc(100% - 100px)',
        padding: '10px'
    },
    openRegisterButton: {
        width: '98%',
        margin: '0px 1%',
        border: '1px solid #1d344e'
    },
    openDrawer: {
        zIndex: '2',
        width: '100%',
        height: '75vh',
        backgroundColor: '#999999',
        position: 'absolute',
        transform: 'translateY(-95%)',
        transition: 'transform .3s ease-out'
    },
    closeDrawer: {
        width: '100%',
        height: '60vh',
        backgroundColor: '#999999',
        position: 'absolute',
        transform: 'translateY(10%)',
        transition: 'transform .3s ease-out'
    }
});
  
export default styles;