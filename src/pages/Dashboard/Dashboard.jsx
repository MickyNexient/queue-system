import { useReducer, useState } from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Typography from '@mui/material/Typography';

import styles from './Dashboard.module.css';
import Queue from "../../components/Queue/Queue";
import QueueContext from '../../contexts/QueueContext';
import QueueReducer, { initialState, types } from '../../reducers/QueueReducer';
import FormOne from './FormOne';

export default function Dashboard() {
    const [count, setCount] = useState(1);
    const [state, dispatch] = useReducer(QueueReducer, initialState);
    const queueState = { state, dispatch };

    const handleNewQueue = (values) => {
        dispatch({ type: types.ADD, item: { ...values, id: count } });
        setCount(count + 1);
    }

    const handleClose = () => {}

    return (
        <div className={styles.dashboard}>
            <QueueContext.Provider value={queueState}>
                <div className={styles.content}>
                    <FormOne handleNewQueue={handleNewQueue} />
                </div>
                <div className={styles.queue}>
                    <Queue />
                </div>
                {/* <Modal
                    open={false}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styles.modal}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal> */}
            </QueueContext.Provider>
        </div>
    )
}