import React from 'react';

export default class PDTable extends React.Component{
	constructor(props){
		super(props)
		var xr=0;var yr=0;
		
		this.props.pdtable.forEach(function(value,key){
			
			if(xr < value.ypos){
				xr = value.ypos;
				
			}
			if(yr < value.xpos){
				yr = value.xpos;
			}
		});
		var xa = [];
		var xy = [];
		for(var i = 1;i <= xr;i++ ){
			xa[i] = i;
		}
		for(var i = 1;i <= yr;i++ ){
			xy[i] = i;
		}
		this.state ={
				x:xa,
				y:xy
		};
	}
	
	render(){
		
		return(
				<div>
				
					<table className="periodic-table">
					<tbody>
						{this.state.x.map((element,key)=>{
							return <tr>{this.state.y.map((ele,k)=>{
								var str =<td className="noelement" id={key+"-"+k} key={key+"-"+k}></td>;
									this.props.pdtable.forEach(function(v,kk){
										if(v.ypos == key && v.xpos == k){
											
											str = <td className="element" id={key+"-"+k} key={key+"-"+k}>{v.symbol}</td>
										}
									});
									return str;
									//return <td>ele {key},{k}</td>
							})}</tr>
						})}
						</tbody>
					</table>
					
				</div>
				);
	}
}