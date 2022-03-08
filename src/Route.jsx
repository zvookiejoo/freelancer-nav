function Route({ path }) {
	return (
		<>
		{
			path && path.length > 0 &&
			<div className="mt-2 px-4 h-full overflow-hidden">
				<div className="text-xl h-8 leading-8">Маршрут:</div>
					<div className="overflow-y-auto route-height">
						<ul>
						{ path.map((node, i) => {
							return (
								<li key={i} className="h-12">{node}</li>
							)
						})}
						</ul>
					</div>
			</div>
		}
		</>
	)
}

export default Route