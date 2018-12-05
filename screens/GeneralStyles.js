import Variables from './Variables';

const GeneralStyles = {
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fullWidthHeight: {
        width: "100%",
        height: "100%"
    },
    loaderContainer: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    divider: {
        backgroundColor: 'black',
        marginTop: 10,
        marginBottom: 10
    },
    fullWidth: {
        width: "100%"
    },
    alignEnd: {
        alignItems: 'flex-end'
    },
    perfectlyCentered: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    fontWhite: {
        color: Variables.fontColorLight
    },
    smallMarginTop: {
        marginTop: 10
    }
}

export default GeneralStyles;