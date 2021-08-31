import { useState } from "react"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useEffect } from "react"
import { cos } from "prelude-ls"
import '../styles/nav.css'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
    //   border: "1px solid black",
      padding: "0px",
      height: 50,
      margin: "10px 0",
      display: "flex",
      alignItems: "center",
      position: "relative",
      cursor: "pointer",
      '&::before': {
            content: '""',  
            position: "absolute",
            width: "70%",
            height: "70%",
            background: "orange",
            left: -250,
            opacity: 0,
            borderBottomRightRadius: "50%",
            borderTopRightRadius: "20%",
            transition: "all 0.1s linear",
        },
        '&:hover::before': {
            opacity: 1,
            background: "red",
            left: 0
      }
    },
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
            {arr.map(elements => (
                <List className={classes.root}>
                    <ListItem key={elements.id}>
                        <ListItemText primary={elements.text}/>
                    </ListItem>
                </List>
            ))} 
        </div>
    )
}

export default Navigate