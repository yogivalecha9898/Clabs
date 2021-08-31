import Navigate from './navigate'
import Paginate from './paginate'
import Main from './main'
import Grid from '@material-ui/core/Grid'
import '../styles/cont.css'

function Container() {
    return (
        <div className="cont">
            <Grid container>
                <Grid item md={3}>
                    <Navigate />
                </Grid>
                <Grid item md={6}>
                    <Main />
                </Grid>
                <Grid item md={3}>
                    <Paginate />
                </Grid>
            </Grid>
        </div>
    )
}

export default Container