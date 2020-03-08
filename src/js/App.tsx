import React from 'react';
export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

export default function App() {
  return (
    <div>
      Welcome Bros
      <Hello compiler={'we'} framework={'abc'} />
    </div>
  );
}
