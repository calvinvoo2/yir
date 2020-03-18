import React from 'react';
export interface HelloProps { compiler: string; framework: string; }
import { DatePicker, Button } from 'antd';
import axios from 'axios';

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

const checkPing = () => {
  axios.get('api/ping')
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
}

export default function App() {
  checkPing();
  return (
    <div>
      Welcome Bros, Huuuhu
      <Hello compiler={'we'} framework={'abc'} />
      <DatePicker />
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </div>
    </div>
  );
}
