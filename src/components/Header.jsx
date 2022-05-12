import { useToGets } from '../context/ListProvider';

export default function Header() {
    const { togets } = useToGets();

    return (
        <>
            <div>Number of Shopping List Items: {togets.length}</div>
            <button>Clear List</button>
        </>
  )
}
