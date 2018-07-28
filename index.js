
function produceDrivingRange(range){
  return function(str,end){
    let dist=Math.abs(parseInt(end)-parseInt(str));
    if(range>=dist){
      return `within range by ${range-dist}`;
    } else {
      return `${dist-range} blocks out of range`;
    }
  };
}

function produceTipCalculator(perc){
  return function(fare){
    return fare*perc;
  };
}

function createDriver(){
  let driverId=0;
  class Driver{
    constructor(){
      this.id=++driverId;
    }
  }
}