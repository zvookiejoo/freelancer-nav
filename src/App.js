import React, { useState } from "react";
import { findPath } from "./core"
import NodeSelector from "./NodeSelector"
import Route from "./Route";

const defaultState = {
  from: "",
  to: "",
  path: []
}

function App() {
  const [ state, setState ] = useState(defaultState)

  const clear = () => {
    setState(defaultState)
  }

  return (
    <div className="w-full flex flex-col justify-between md:flex-row">
      <div className="h-screen max-h-screen overflow-hidden w-full md:w-1/4 flex flex-col">
        <div className="h-10 leading-10 font-bold text-2xl text-center bg-sky-900 text-white">Поиск маршрута</div>
        <NodeSelector label="Откуда" value={state.from} handler={value => setState({ ...state, from: value })} placeholder="Название системы" />
        <NodeSelector label="Куда" value={state.to} handler={value => setState({ ...state, to: value })} placeholder="Название системы" />
        <div className="flex flex-row px-4 mt-4 h-10">
          <button onClick={clear} className="rounded bg-gray-300 text-gray-400 text-xl font-bold h-10 w-1/2 mr-2">Сброс</button>
          <button onClick={() => setState({ ...state, path: findPath(state.from, state.to)})} className="rounded bg-green-500 text-white text-xl font-bold h-10 w-1/2 ml-2">Поиск</button>
        </div>
        <Route path={state.path} />
      </div>
      <div className="h-screen max-h-screen hidden md:flex overflow-y-auto">
        <img src="/img/map.svg" alt="Systems map" className="m-auto p-2 overflow-x-hidden" />
      </div>
    </div>
  );
}

export default App;
