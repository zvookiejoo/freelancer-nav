import React, { useState } from "react";
import { findPath } from "./core"
import NodeSelector from "./NodeSelector"
import Route from "./Route";
import Help from "./Help";

const defaultState = {
  from: "",
  to: "",
  path: [],
  showHelp: false
}

function App() {
  const [ state, setState ] = useState(defaultState)

  const clear = () => {
    setState(defaultState)
  }

  const showHelp = () => {
    setState({ ...state, showHelp: true })
  }

  const hideHelp = () => {
    setState({ ...state, showHelp: false})
  }

  return (
    <>
      <Help closeHandler={hideHelp} visible={state.showHelp} />
      <div className="w-full flex flex-col justify-between md:flex-row">
        <div className="md:h-screen md:max-h-screen md:overflow-hidden w-full md:w-1/4 flex flex-col">
          <div className="flex flex-row justify-between h-10 leading-10 font-bold text-2xl text-center bg-sky-900 text-white">
            <span className="px-4">Поиск пути</span>
            <button className="text-3xl font-bold px-4" onClick={showHelp}>?</button>
          </div>
          <NodeSelector label="Откуда" value={state.from} handler={value => setState({ ...state, from: value })} placeholder="Название системы" />
          <NodeSelector label="Куда" value={state.to} handler={value => setState({ ...state, to: value })} placeholder="Название системы" />
          <div className="flex flex-row px-4 mt-4 h-10">
            <button onClick={clear} className="rounded bg-gray-300 text-gray-400 text-xl font-bold h-10 w-1/2 mr-2 shadow-md">Сброс</button>
            <button onClick={() => setState({ ...state, path: findPath(state.from, state.to)})} className="rounded bg-green-500 text-white text-xl font-bold h-10 w-1/2 ml-2 shadow-md">Поиск</button>
          </div>
          <Route path={state.path} />
        </div>
        <div className="hidden md:overflow-y-auto md:flex md:h-screen md:max-h-screen">
          <img src="/img/map.svg" alt="Карта систем" className="m-auto p-2 overflow-x-hidden" />
        </div>
        <div className="mt-4 md:hidden">
          <img src="/img/map-sm.svg" alt="Карта систем" className="m-auto p-2 overflow-x-hidden" />
        </div>
      </div>
    </>
  );
}

export default App;
