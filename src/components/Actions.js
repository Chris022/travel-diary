import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import AddIcon from '@mui/icons-material/Add';

export default function Actions({addCountry}) {
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
            <SpeedDialAction
                icon={<AddIcon/>}
                onClick={addCountry}
            />
        </SpeedDial>
    )
}