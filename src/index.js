import React from 'react';
import ReactDOM from "react-dom";
import 'antd/dist/antd.less';
import App from "./js/App.tsx";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;