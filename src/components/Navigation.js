import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

export default function Navigation({ page, setPage }) {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={page}
                onChange={(event, newValue) => {
                    setPage(newValue);
                }}
            >
                <BottomNavigationAction label="Map" />
                <BottomNavigationAction label="Overview" />
            </BottomNavigation>
        </Paper>
    )
}