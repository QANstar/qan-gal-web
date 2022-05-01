
export default function getTimeProps(){
    let nowdate = new Date();

    let year:number = nowdate.getFullYear(),

        month:number = nowdate.getMonth() + 1,

        date:number = nowdate.getDate(),

        day:number = nowdate.getDay(),

        hour:number = nowdate.getHours(),

        mine:number = nowdate.getMinutes(),

        second:number = nowdate.getSeconds(),

        h:string = checkTime(hour),

        m:string = checkTime(mine),

        s:string = checkTime(second);

    return year + "/" + month + "/" + date +  " " + h +":" + m + ":" + s;
}

let checkTime = function (i:number) {

    let res:string = i.toString();
    if (i < 10) {

        res = "0" + i;

    }

    return res;

}