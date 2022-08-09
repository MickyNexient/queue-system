import { useCallback, useEffect } from "react";
import { useQueueContext } from "../../../contexts/QueueContext";
import { types } from '../../../reducers/QueueReducer';

export default function Item({ props }) {
    const { _, dispatch } = useQueueContext();

    const handlePromise = useCallback(async () => {
        setTimeout(() => dispatch({ type: types.REMOVE, item: props }), Math.floor(Math.random() * 6000));
    }, []);

    useEffect(() => {
        handlePromise();
    }, []);

    return (
        <li>{`${props.id} ${props.firstName}`}</li>
    )
}