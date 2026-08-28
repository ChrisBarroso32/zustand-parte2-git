import {useCounterStore} from "./store.ts";

const App = () => {
    const count = useCounterStore((state) => state.count);

    return <OtherComponent count={count} />;
};

const OtherComponent = ({ count }: {count: number}) => {
    const incrementAsync = useCounterStore((state) => state.incrementAsync);
    const decrement = useCounterStore((state) => state.decrement);
    return (
        <div>
            {count}
            <div>
                <button onClick={incrementAsync}>IncrementAsync</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
};

export default App;