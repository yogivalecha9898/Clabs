import { useState } from "react"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useEffect } from "react"
import '../styles/nav.css'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        // border: "1px solid black",
        padding: "0px",
        height: 50,
        margin: "10px 0",
        display: "flex",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
        paddingLeft: "0px",
        transition: "all 0.1s linear",
        '&::before': {
            content: '""',  
            position: "absolute",
            width: "80%",
            height: "80%",
            left: -250,
            opacity: 0,
            borderBottomRightRadius: "50px",
            borderTopRightRadius: "50px",
            transition: "all 0.1s linear",
        },
        '&:hover::before': {
            opacity: 1,
            background: "#1E3163",
            left: -10
        }
    },
    text: {
        '&:hover': {
            color: "#fff"
        }
    }
})

function Navigate() {
    
    const[arr, setArr] = useState([])
    const classes = useStyles()

    useEffect(() => {
        const fun = async () => {
            const fList = await fetch("data.json")
            const data = await fList.json()
            setArr(data)
        }
        fun()
    }, [])


    return (
        <div className="nav">
            <div className="head">
                <h1>Dashboard</h1>
            </div>
            {arr.map(elements => (
                <List className={classes.root}>
                    <ListItem key={elements.id}>
                        <ListItemText className={classes.text} primary={elements.text}/>
                    </ListItem>
                </List>
            ))} 
            <div className="add">
                <div className="inner">+</div>
            </div>
        </div>
    )
}

export default Navigate