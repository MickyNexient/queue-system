import { useQueueContext } from "../../contexts/QueueContext";
import Item from './Item';

export default function Queue() {
    const { state, _ } = useQueueContext()

    return (
        <>
            <div>Queue {state?.count}</div>
            <ul>
                {state?.items.map((item) => <Item key={item.id} props={item} />)}
            </ul>
        </>
    )
}