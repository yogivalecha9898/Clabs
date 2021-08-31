import { useEffect } from "react"
import { useState } from "react"
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import '../styles/pag.css'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
    //   border: "1px solid black",
      padding: "0px",
      height: 70
    },
})

function Paginate() {

    const[arr, setArr] = useState([])
    const[arr1, setArr1] = useState([])
    const[dArr, setDArr] = useState([])
    const[req, setReq] = useState(8)
    // const[prev, setPrev] = useState(0)
    const[cur, setCur] = useState(1)

    useEffect(() => {
        const fun = async () => {
            const fet = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await fet.json()
            // console.log(data)
            handleChange(data, cur)
            setArr1(data)
        }
        fun()
    }, [])

    const handleChange = (array, cur) => {
        const len = array.length
        console.log(len)
        let a = []
        for(let i = (cur-1)*req; i < min(len, cur*req); i++) {
            a = [...a, array[i]]
        }
        console.log(a)
        setArr(a)
        setCur(cur)
    }

    const min = (a, b) => {
        return a > b ? b:a
    }

    const classes = useStyles()

    return (
        <div className="pag">
            <div className="upperPag">
                <div className="round" style={{background: "#293462"}}></div>
                <div className="round" style={{background: "#216583"}}></div>
                <div className="round" style={{background: "#00818A"}}></div>
            </div>
            {
                arr.map(ele => (
                    <List className={classes.root} style={{background: "#fff"}}>
                        <ListItem key={ele.id}>
                            <ListItemText primary={ele.title}/>
                        </ListItem>
                    </List>
                ))
            }
            <div className="page">
                {
                    cur === 1 ? 
                    <Button variant="contained" disabled>
                        Prev
                    </Button>:
                    <Button variant="contained"  onClick={() => handleChange(arr1, cur-1)}>
                        Prev
                    </Button>
                }
                <div className="counter">
                    {cur} 
                </div>
                {
                    cur*req >= arr1.length ? 
                    <Button variant="contained" disabled>
                        Next
                    </Button>:
                    <Button variant="contained"  onClick={() => handleChange(arr1, cur+1)}>
                        Next
                    </Button>
                }
            </div>
        </div>
    )
}

export default Paginate