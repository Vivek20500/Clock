import React from "react";

function Marking(){
    var marks=[]
    for( var i=1;i<=12;i++){
        var angle=30*i;
        var distance=-180;
        marks.push(<div key={i} style={{rotate:angle+'deg'}}  className="thick h-6 w-2 bg-white"></div>)
    }
    
    return(
        marks.map(item=>{
            return item
        })
    )
}

export default Marking;