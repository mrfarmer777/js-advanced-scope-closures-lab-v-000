
function produceDrivingRange(range){
  return function(dist){
    return range>=dist;
  };
}