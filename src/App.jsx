import {useState} from "react";

const App = () => {
    const [count] = useState(0);

    return <OtherComponent count={count} />;
};

const OtherComponent = ({count}) => {
    return <div>count={count} </div>;
};

export default App;
