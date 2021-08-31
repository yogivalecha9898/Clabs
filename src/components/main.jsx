import '../styles/main.css'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2'
import { useState } from 'react'

const useStyles = makeStyles({
    root: {
    //   border: "1px solid black",
      width: "10%",
      height: "60%"
    },
})

function Main() {
    
    const[active, setActive] = useState("income")
    const classes = useStyles()
    const[data1] = useState({
        labels: ['S','M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: "Income",
            data: [12, 19, 3, 5, 2, 3, 6],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    })
    const[data2] = useState({
        labels: ['S','M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: "Expenditure",
            data: [5, 9, 12, 13, 7, 8, 10],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    })

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
                <div className="choice" style={active === "Income" ? {background: 'rgba(54, 162, 235, 0.2)'}: {background: 'rgba(255, 206, 86, 0.2)'}}>
                    <span className="choose" style={active === "Income" ? { background: "#fff", color: "rgba(54, 162, 235, 1)"}:{background: ""}} onClick={() => setActive("Income")}>Income</span>
                    <span className="choose" style={active !== "Income" ? { background: "#fff", color: "rgba(255, 206, 86, 1)"}:{background: ""}} onClick={() => setActive("Expenditure")}>Expenditure</span>
                </div>
                <div className="graph">
                    <Bar 
                        data={active === "Income" ? data1:data2}
                        options={{
                            plugins: {
                                title:{
                                    display: true,
                                    text: active,
                                    fontSize: 25
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom'
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Main