import React from "react";

const About = ({ counter, decrement, increment }) => (
    <div>
        <h1>About works!</h1>
        <hr />
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <pre>{JSON.stringify(counter, null, 2)}</pre>
    </div>
);

export default About;