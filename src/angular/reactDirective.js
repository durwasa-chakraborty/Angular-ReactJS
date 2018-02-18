import app from '../../main'
import React from "react";
import ReactDOM from "react-dom";
import PDTable from "../react/PDTable";

const reactOPeriodicDir = app.directive('reactPeriodictableDirective',function(){
	return {
		template:'<div id="reactperiodictable"></div>',
		scope:{
			pdtable:'='
		},
		link:function(scope,el,attrs){ 
			
			const reactapp = document.getElementById('reactperiodictable');
			scope.$watch('pdtable',function(newValue,oldValue){
				if(angular.isDefined(newValue)){
					ReactDOM.render(
							<PDTable pdtable={newValue} />,reactapp
							)
				}
			})
		}
	}
})


export default reactOPeriodicDir
