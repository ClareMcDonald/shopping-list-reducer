import { useToGets } from '../context/ListProvider';

export default function Header() {
    const { togets, handleDeleteAllToGets } = useToGets();

    return (
        <>
            <div>Number of Shopping List Items: {togets.length}</div>
            <button onClick={handleDeleteAllToGets}>Clear List</button>
        </>
  )
}
