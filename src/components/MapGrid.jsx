import React, { useState } from 'react';

function MapGrid({ rows, cols }) {
	const [hoveredCell, setHoveredCell] = useState(null);

	const cells = [];
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			const cellIndex = row * cols + col;
			cells.push(
				<div
					key={cellIndex}
					className="grid-cell"
					onMouseEnter={() => setHoveredCell(cellIndex)}
					onMouseLeave={() => setHoveredCell(null)}
				>
					{hoveredCell === cellIndex && (
						<img
							src="/flags/flag1.png"
							alt="Flag"
							className="flag-image"
						/>
					)}
				</div>
			);
		}
	}

	return (
		<div
			className="map-grid"
			style={{
				gridTemplateColumns: `repeat(${cols}, 1fr)`,
				gridTemplateRows: `repeat(${rows}, 1fr)`,
			}}
		>
			{cells}
		</div>
	);
}

export default MapGrid;
