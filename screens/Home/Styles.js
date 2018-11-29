import Variables from '../Variables';

const Styles = {
    startBtn: {
        backgroundColor: Variables.themeColorDark,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 10
    },
    topLeftAbsolute:{
        position: 'absolute',
        left: 10,
        top: 10
    },
    roundedBtn: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 100,
        width: 40,
        height: 40
    },
    darkRedBtn: {
        backgroundColor: Variables.themeDarkRed,
    },
    fontWhite: {
        color: Variables.fontColorLight
    }
}
export default Styles;