import React from "react";

function Small(){
    var marks=[]
    for( var i=1;i<=60;i++){
        var angle=6*i;
        marks.push(<div key={i} style={{rotate:angle+'deg'}}  className="thick h-5 w-1 bg-slate-400"></div>)
    }
    
    return(
        marks.map(item=>{
            return item
        })
    )
}

export default Small;