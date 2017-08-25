import React, { Component ,PropTypes} from 'react'

var titStyle={color:'#f00',fontSize:'36px'}
var listStyle={width:'200px',border:'1px solid #ccc'}

class Add extends Component{
	render() {
		const { add_new, del_new, add } = this.props;
		return (
			<div>
				<div style={titStyle}>this showArea</div>
				<ol style={listStyle}>
					{add.map(function(item,i){
											return (
												<li key={i}>
													<label>{item}</label>
												</li>
											)
										})}
				</ol>
				<button onClick={add_new}> Add New </button>
				{' '}
				<button onClick={del_new}> Del New </button>
			</div>
		)
	}
}

Add.PropTypes = {
	add_new: PropTypes.func.isRequired,
	add:PropTypes.string.isRequired
}
export default Add
