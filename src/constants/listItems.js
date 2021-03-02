import DashboardIcon from '@material-ui/icons/Dashboard';
import { Matricula } from '../pages/MatriculaAcademica'
const Dashboard = () => (<h1>pagina inicio del dashboard</h1>)
export const mainListItems = [
    {
        icon: DashboardIcon,
        text: "Dashboard",
        path: "/dashboard/chart",
        component: Dashboard
    },
    {
        icon: DashboardIcon,
        text: "Matriculas academicas",
        path: "/dashboard/matriculas",
        component: Matricula
    }
]