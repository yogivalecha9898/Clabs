import '../styles/main.css'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
    //   border: "1px solid black",
      width: "10%",
      height: "60%"
    },
})

function Main() {

    const classes = useStyles()

    return (
        <div className="main">
            <div className="upper">
                <SearchIcon className={classes.root}/>
                <form>
                    <input type="text" placeholder="Search"/>
                </form>
            </div>
            <div className="middle">
                <div className="boxes">
                    <h3>Users</h3>
                    <h1>234,123 <span style={{color: "#17B794"}}>+20%</span></h1>
                </div>
                <div className="boxes">
                    <h3>Sales</h3>
                    <h1>543,627 <span style={{color: "red"}}>-10%</span></h1>
                </div>
                <div className="boxes">
                    <h3>Leads</h3>
                    <h1>74,12 <span style={{color: "#17B794"}}>+7%</span></h1>
                </div>
            </div>
            <div className="lower">
                <div className="graph">
                    
                </div>
            </div>
        </div>
    )
}

export default Main