
function produceDrivingRange(range){
  return function(str,end){
    let dist=parseInt(end)-parseInt(str);
    if(range<=dist){
      return ""
    }
  };
}