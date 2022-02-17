import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export default function NewTravelModal({ open, setOpen }) {
    return (
        <Dialog onClose={() => setOpen(false)} open={open}>
            <DialogTitle>Add Travel</DialogTitle>
            
        </Dialog>
    )
}