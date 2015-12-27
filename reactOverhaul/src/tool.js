import React, { Component } from 'react';

export class Tool extends Component{

	constructor(){
		super();
		this.state = {
			hover : false
		};
	}

	handleMouseEnter(){
		this.setState({hover : true});
	}

	handleMouseLeave(){
		this.setState({hover : false});
	}

	render(){
		let svgStyle = {
	      verticalAlign: "middle",
	    };
	    let style = {
			width : "100%",
			textAlign: "center",
			cursor : "pointer",
			height : this.props.size
		};
		let markerStyle = {
			width : "3%",
			height : this.props.size * 0.8,
			background : "#84bd00",
			position : "absolute",
			left : "0"
		};
		let marker = (<div style={markerStyle} />);
		return (
			<div onClick={this.props.onClickEvent} onMouseEnter={this.handleMouseEnter.bind(this)} 
				onMouseLeave={this.handleMouseLeave.bind(this)} style={style}>
				{(this.props.active ? marker : null)}
				<svg viewBox="0 0 64 64" width={this.props.size * 0.8} height={this.props.size * 0.8} preserveAspectRatio="xMidYMid meet" fitstyle={svgStyle}>
					{this.renderIcon(this.props.type)}
				</svg>
			</div>
		);
	}


	renderIcon(type){
		let col = this.props.active || this.state.hover ? '#ffffff' : '#5c5c5c';
		let icon;
		switch(type){
			case 'sel':
				icon = (
					<g>
					<g transform="matrix(0.08571041,0,0,0.08571041,10.457187,1.4576046)" fill={col}>
					<g fill={col}>
					<path d="m404.03,286.83s-2.006-23.447-17.408-36.325c-8.607-7.291-16.847-8.24-22.692-7.679v44.091h-10.548v-48.297c-3.149-6.838-9.448-17.408-19.457-21.377-9.966-4.012-20.169-3.02-26.424-1.812v49.764h-10.505v-55.868c-4.465-5.371-12.49-11.778-26.554-12.619-7.593-0.453-14.366,2.61-19.716,5.975l-1.035,47.822h-10.57l0.324-86.822c34.08-10.66,58.99-42.11,58.99-79.749-0.02-46.356-37.59-83.911-83.93-83.911-46.356,0-83.91,37.555-83.91,83.932,0,36.282,23.102,66.913,55.329,78.626v147.35s-27.136-58.392-50.195-66.093c-23.016-7.679-37.339,6.148-37.339,6.148s26.144,48.448,45.32,102.16c12.317,34.556,16.006,74.613,26.877,94.458,27.632,50.713,62.922,55.976,105.5,55.976,42.494,0,100.3,3.947,115.66-31.407,15.379-35.311,12.272-184.32,12.272-184.32zm-237.32-202.94c0-26.381,21.398-47.801,47.801-47.801,26.381,0,47.801,21.42,47.801,47.801,0,17.192-9.146,32.097-22.714,40.531l0.108-30.911s-6.191-32.184-26.122-32.184c-19.996,0-27.632,27.611-27.632,27.611v33.068c-11.61-8.69-19.25-22.451-19.25-38.111z" fill={col}/>
					</g>
					</g>
					<text fontWeight="bold" stroke={col} transform="matrix(0.3952723529750775,0,0,0.5559273971165859,17.229926784815113,25.804202517850843) " textAnchor="middle" fontFamily="Monospace" fontSize="20" y="59.58796" x="37.21191" strokeWidth="1" fill={col}>Select</text>
					</g>
				);
				break;
			case 'addv':
				icon =  (
					<g>
					 <g fill={col} transform="matrix(0.66153557,0,0,0.66153557,102.77977,-168.24855)">
					  <path d="m-114.58,275.33c-10.567,0.53566-18.969,9.2995-18.969,20,0,11.046,8.9543,20,20,20s20-8.9543,20-20-8.9543-20-20-20c-0.34518,0-0.69037-0.0173-1.0312,0zm-10.875,7.75,4.25,0,7.6562,20.531,7.6562-20.531,4.25,0-9.1875,24.469-5.4375,0-9.1875-24.469z"/>
					  <g transform="matrix(0.51685393,0,0,0.51685393,10.782052,131.48084)">
					   <rect ry="7.492" height="52.444" width="10.017" y="248.35" x="-207.71"/>
					   <rect ry="7.492" transform="matrix(0,1,-1,0,0,0)" width="10.017" y="176.48" x="269.57" height="52.444"/>
					  </g>
					 </g>
					<text fontWeight="bold" stroke={col} transform="matrix(0.3952723529750775,0,0,0.5559273971165859,17.229926784815113,25.804202517850843) " textAnchor="middle" fontFamily="Monospace" fontSize="20" y="59.58796" x="37.21191" strokeWidth="1" fill={col}>Add Vertice</text>
					</g>
				 );
				break;
			case 'adde':
				icon =  (
					<g>
					<g fill={col} transform="matrix(0.36272297,0,0,0.36272297,112.59441,-87.523773)">
					<rect ry="7.492" height="52.444" width="10.017" y="248.35" x="-207.71"/>
					<rect transform="matrix(0,1,-1,0,0,0)" ry="7.492" width="10.017" y="176.48" x="269.57" height="52.444"/>
					</g>
					<g fill={col} transform="matrix(0.35172145,0,0,0.35172145,50.384143,10.856152)">
					<rect ry="3.7089" transform="matrix(0.67890129,0.73422955,-0.73422955,0.67890129,0,0)" height="7.4178" width="65.064" y="65.849" x="-44.585"/>
					<path d="m-86.267-10.118c-8.6434,0.43813-15.515,7.6063-15.515,16.359,0,9.0346,7.324,16.359,16.359,16.359,9.0346,0,16.359-7.324,16.359-16.359,0-9.0346-7.324-16.359-16.359-16.359-0.28233,0-0.56468-0.01415-0.84349,0zm-8.895,6.339,3.4762,0,6.2623,16.793,6.2623-16.793,3.4762,0-7.5147,20.014-4.4475,0-7.5147-20.014z"/>
					<path d="m-28.233,55.509c-8.6434,0.43813-15.515,7.6063-15.515,16.359,0,9.0346,7.324,16.359,16.359,16.359,9.0346,0,16.359-7.324,16.359-16.359,0-9.0346-7.324-16.359-16.359-16.359-0.28233,0-0.56468-0.01415-0.84349,0zm-8.895,6.339,3.4762,0,6.2623,16.793,6.2623-16.793,3.4762,0-7.5147,20.014-4.4475,0-7.5147-20.014z"/>
					</g>
					<text fontWeight="bold" stroke={col} transform="matrix(0.3952723529750775,0,0,0.5559273971165859,17.229926784815113,25.804202517850843) " textAnchor="middle" fontFamily="Monospace" fontSize="20" y="59.58796" x="37.21191" strokeWidth="1" fill={col}>Add Edge</text>
					</g>
				 );
				break;
			case 'dir':
				icon =  (
					<g>
					<path transform="rotate(-59.239200592041016 33.14716720581055,24.887741088867188) " stroke="#000000" id="svg_47" d="m38.68546,37.3457l0.30494,-3.28201l-3.58955,-0.57114c-9.08823,-1.44597 -17.99676,-7.57754 -22.95686,-15.8008c-0.88992,-1.47534 -1.48557,-2.89677 -1.32364,-3.1587c0.37143,-0.60097 9.4214,-5.38532 10.1867,-5.38532c0.31221,0 1.06217,0.87992 1.66657,1.95536c2.57776,4.58658 9.24913,9.37038 13.94623,10.00037l1.90423,0.25543l-0.3274,-2.83652c-0.33989,-2.9446 -0.24422,-3.56294 0.55075,-3.56294c0.50839,0 15.68636,11.30793 16.1204,12.00999c0.32907,0.53258 -1.75852,2.50835 -9.23281,8.73822c-3.24677,2.706 -6.27459,4.92009 -6.72885,4.92009c-0.72687,0 -0.78926,-0.39283 -0.5207,-3.28204l0,0z" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="0" fill={col}/>
					<text fontWeight="bold" stroke={col} transform="matrix(0.3952723529750775,0,0,0.5559273971165859,17.229926784815113,25.804202517850843) " textAnchor="middle" fontFamily="Monospace" fontSize="20" y="59.58796" x="37.21191" strokeWidth="1" fill={col}>Directed</text>
					</g>
				 );
				break;
			case 'del':
				icon =  (
					<g>
					<g fill={col} transform="matrix(0.08255308,0,0,0.08255308,12.087,2.0870022)">
					<g fill={col}>
					<path d="M381.16,57.799h-75.091c-3.749-32.483-31.379-57.799-64.859-57.799-33.47,0-61.1,25.315-64.85,57.799h-75.098c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.37c0,30.39,24.724,55.117,55.112,55.117h210.24c30.389,0,55.111-24.729,55.111-55.117v-260.38c20.369-8.1,34.83-27.977,34.83-51.199v-2.828c0-30.39-24.723-55.118-55.111-55.118zm-139.95-31.66c19.037,0,34.927,13.645,38.443,31.66h-76.879c3.515-18.016,19.406-31.66,38.436-31.66zm134.09,401.17c0,15.978-13,28.979-28.973,28.979h-210.23c-15.973,0-28.973-13.002-28.973-28.979v-256.45h268.18v256.45zm34.83-311.57c0,15.978-13,28.979-28.973,28.979h-279.89c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.9c15.973,0,28.973,13.001,28.973,28.979v2.828z"/>
					<path d="m171.14,422.86c7.218,0,13.069-5.853,13.069-13.068v-147.15c0-7.216-5.852-13.07-13.069-13.07s-13.069,5.854-13.069,13.07v147.15c-0.001,7.217,5.851,13.068,13.069,13.068z"/>
					<path d="m241.21,422.86c7.218,0,13.07-5.853,13.07-13.068v-147.15c0-7.216-5.854-13.07-13.07-13.07-7.217,0-13.069,5.854-13.069,13.07v147.15c0,7.217,5.851,13.068,13.069,13.068z"/>
					<path d="m311.28,422.86c7.217,0,13.068-5.853,13.068-13.068v-147.15c0-7.216-5.852-13.07-13.068-13.07-7.219,0-13.07,5.854-13.07,13.07v147.15c-0.001,7.217,5.853,13.068,13.07,13.068z"/>
					</g>
					</g>
					<text fontWeight="bold" stroke={col} transform="matrix(0.3952723529750775,0,0,0.5559273971165859,17.229926784815113,25.804202517850843) " textAnchor="middle" fontFamily="Monospace" fontSize="20" y="59.58796" x="37.21191" strokeWidth="1" fill={col}>Delete</text>
					</g>
				 );
				break;
			case 'weight':
				icon =  (
					<g>
					<rect stroke="#000000" transform="rotate(48.48933029174805 21.323406219482415,12.536419868469245) " id="svg_39" height="4.31138" width="18.98304" y="10.38073" x="11.83188" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="0" fill={col}/>
					<rect id="svg_42" stroke="#000000" transform="rotate(48.48933029174805 43.42115783691408,36.613479614257805) " height="4.31138" width="18.98304" y="34.45779" x="33.92964" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="0" fill={col}/>
					<rect stroke="#000000" id="svg_43" height="1.37499" width="6.60745" y="20.04167" x="29.93251" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="0" fill={col}/>
					<rect stroke="#000000" transform="rotate(-55.922786712646484 33.30366516113281,24.96584129333496) " id="svg_44" height="1.36671" width="9.61078" y="24.28249" x="28.49827" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="0" fill={col}/>
					<text fontWeight="bold" stroke={col} transform="matrix(0.3952723529750775,0,0,0.5559273971165859,17.229926784815113,25.804202517850843) " textAnchor="middle" fontFamily="Monospace" fontSize="20" y="59.58796" x="37.21191" strokeWidth="1" fill={col}>Edge Weight</text>
					</g>
				 );
				break;
		}
		return icon;
	}

}