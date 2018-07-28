
function produceDrivingRange(range){
  return function(str,end){
    let dist=Math.abs(parseInt(end)-parseInt(str))
    if(range>=dist){
      return `within range by ${dist}`;
    } else {
      return `out of range by ${dist}`;
    }
  };
};