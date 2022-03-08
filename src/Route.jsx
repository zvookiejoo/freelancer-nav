import { jumpData } from "./data"

function makePath(path) {
	if (path.length === 1) return [{ name: path[0] }]

	const result = path.map((node, i) => {
		if (i === 0 && path.length > 0) {
			const nextGate = path[i+1]
			
			return {
				name: node,
				to: location(jumpData[node][nextGate])
			}
		} else if (i === path.length - 1) {
			const prevGate = path[i-1]
			return {
				name: node,
				from: location(jumpData[node][prevGate])
			}
		} else {
			const prevGate = path[i-1]
			const nextGate = path[i+1]
			return {
				name: node,
				from: location(jumpData[node][prevGate]),
				to: location(jumpData[node][nextGate])
			}
		}
	})

	console.log(result)

	return result
}

function location(gate) {
	console.log(gate)
	if (gate !== null) {
		if (gate.__proto__ === Array.prototype) {
			const result = gate.map(item => item.loc).join(" | ").toUpperCase()
			console.log(result)
			return result
		} else {
			return gate.loc.toUpperCase()
		}
	}
}

export default function Route({ path }) {
	return (
		<>
		{
			path && path.length > 0 &&
			<div className="mt-2 px-4 h-full overflow-hidden">
				<div className="text-xl h-8 leading-8">Маршрут:</div>
					<div className="overflow-y-auto route-height">
						<ul>
						{ makePath(path).map((node, i) => {
							return (
								<li key={i} className="h-12">
									<h1 className="font-semibold mr-4">{node.name}</h1>
									<div className="flex flex-row flex-nowrap text-sm">
										{
											node.from && 
											<div className="text-gray-600 mr-4">От: {node.from}</div>
										}
										{
											node.to && 
											<div className="text-gray-600 mr-4">До: {node.to}</div>
										}
									</div>
								</li>
							)
						})}
						</ul>
					</div>
			</div>
		}
		</>
	)
}
