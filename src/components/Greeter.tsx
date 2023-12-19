import React from "react";

// const Greeter = () => {
//   return <div>Greeter</div>;
// };
interface GreeterProps {
  person: string;
}

function Greeter({ person }: GreeterProps): JSX.Element {
  return <div>Hello, {person}</div>;
}

export default Greeter;
