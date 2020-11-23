let one={
    count:4
}
let two={
    count:3
}
let three={
    count:2
}
let four={
    count:1
}
function ship(shipname, x1, x2, y1, y2){

    if(x2=x1){
        this.deskcount= y2-y1
        alert(this.deskcount)
    }
    else if(y1=y2){
        this.deskcount= x2-x1
        alert(this.deskcount)
    }
    else{
        alert('начало и конец не на одной строке')
    }
      this.deskcount = Math.abs(this.deskcount)+1
    switch(this.deskcount){
        case 4:
            if(four.count!=0){
                four.count--;
            }
            else {
                alert("КОРАБЛЕЙ ТАКОГО ТИПА СЛИШКОМ МНОГО")
                this.count=0;
            }
            break;
        case 3:
            if(three.count!=0){
                three.count--;
            }
            else {
                alert("КОРАБЛЕЙ ТАКОГО ТИПА СЛИШКОМ МНОГО")
                this.count=0;
            }
            break;
        case 2:
            if(two.count!=0){
                two.count--;
            }
            else {
                alert("КОРАБЛЕЙ ТАКОГО ТИПА СЛИШКОМ МНОГО")
                this.count=0;
            }
            break;
        case 1:
            if(one.count!=0){
                one.count--;
            }
            else {
                alert("КОРАБЛЕЙ ТАКОГО ТИПА СЛИШКОМ МНОГО")
                this.count=0;
            }
            break;
        default:
            this.count=0;
        }
        if(this.count==0){
            alert('Корабль слишком длинный')
        }
        else{
            this.shipname=shipname;
            this.x1=x1;
            this.x2=x2;
            this.y1=y1;
            this.y2=y2;
            alert('boom')
        }
        console.log(this.shipname,this.count, this.y2)
}
let chimchim = new ship('van', '5','5','3','8')