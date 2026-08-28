import { useState } from "react";

type OtherComponentProps = {
    count: number;
};

const App = () => {
    const [count] = useState<number>(0);

    return <OtherComponent count={count} />;
};

const OtherComponent = ({ count }: OtherComponentProps) => {
    return <div>{count}</div>;
};

export default App;