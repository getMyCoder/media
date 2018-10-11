$(function () {
    var cell={
        cells:12,
        cellSize:100/12
    };
    var cellArrB=[],cellArrP=[],cellArrS=[];
    var cellArrBF=[],cellArrPF=[],cellArrSF=[];
    setResize();
    window.onresize=function () {
        setResize();
    };
    function setResize() {
        var DW=document.documentElement.clientWidth;
        if (DW>=992){
            for(var bi=1;bi<=cell.cells;bi++){
                cellArrB[bi-1]="cell-A-"+bi;
                $("."+cellArrB[bi-1]).css({
                    "width":cell.cellSize*bi+"%"
                });
                cellArrBF[bi-1]="cell-A-f-"+bi;
                $("."+cellArrBF[bi-1]).css({
                    "marginLeft":cell.cellSize*bi+"%"
                })
            }
        }else if(DW>=768 && DW<992){
            for(var pi=1;pi<=cell.cells;pi++){
                cellArrP[pi-1]="cell-B-"+pi;
                $("."+cellArrP[pi-1]).css({
                    "width":cell.cellSize*pi+"%"
                });
                cellArrPF[pi-1]="cell-B-f-"+pi;
                $("."+cellArrPF[pi-1]).css({
                    "marginLeft":cell.cellSize*pi+"%"
                })
            }
        }else{
            for(var si=1;si<=cell.cells;si++){
                cellArrS[si-1]="cell-C-"+si;
                $("."+cellArrS[si-1]).css({
                    "width":cell.cellSize*si+"%"
                });
                cellArrSF[si-1]="cell-C-f-"+si;
                $("."+cellArrSF[si-1]).css({
                    "marginLeft":cell.cellSize*si+"%"
                })
            }
        }
    }
});