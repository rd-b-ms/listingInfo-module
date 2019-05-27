import React from 'react';

// creates one unified logo from a specific array of svg paths declared in the styles/svg file
const paths = svg => svg.map(iconPath => <path d={iconPath} />);

export default paths;
