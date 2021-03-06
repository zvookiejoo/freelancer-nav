import React, { useState } from "react";
import { jumpData } from "./data";

function makeNodeList(partialName) {
	return Object.keys(jumpData).filter(key => key.indexOf(partialName) !== -1)
}

function NodeSelector({ label, value, handler, placeholder }) {
	const [ state, setState ] = useState({
		suggestions: [],
		listVisible: false
	})

	const onChange = e => {
		handler(e.target.value)
		setState({
			suggestions: makeNodeList(e.target.value),
			listVisible: true
		})
	}

	const select = node => {
		handler(node)
		setState({ 
			listVisible: false, 
			suggestions: [] 
		})
	}

	const onBlur = () => {
		setState({
			...state,
			listVisible: false,
		})
	}

	return (
		<div className="px-4 mt-2 w-full h-18">
			<label className="font-bold text-xl">
				{label}:
				<input value={value} onChange={onChange} onBlur={onBlur} type={"text"} placeholder={placeholder} className="w-full h-10 leading-10 px-2 mt-2 border rounded border-gray-400" />
			</label>
			{
				state.suggestions && state.suggestions.length > 0 &&
				<div className={`relative ${state.listVisible ? "block" : "hidden"}`}>
					<ul className="absolute w-full p-2 shadow-lg bg-white border-gray-50 border mt-1">
						{ state.suggestions.map((node, idx) => <li key={idx} className="px-2 h-8 leading-8 cursor-pointer border-gray-400 hover:bg-blue-100" onMouseDown={() => select(node)}>{node}</li>)}
					</ul>
				</div>
			}
			{
				state.suggestions && state.suggestions.length === 0 &&
				<div className={`relative ${state.listVisible ? "block" : "hidden"}`}>
					<div className="absolute w-full p-2 shadow-lg text-red-600 bg-white border-gray-50 border mt-1">Совпадений не найдено.</div>
				</div>
			}
		</div>
	)
}

export default NodeSelector