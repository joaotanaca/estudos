import { useState } from "react";
import Title from "./components/atoms/Title";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Title>{count}</Title>
        </div>
    );
}

export default App;
