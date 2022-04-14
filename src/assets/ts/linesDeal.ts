import ILinesItem from "../../interface/ILinesItem";
export default function linesDeal(data:Array<string>):Array<ILinesItem>{
    let event:string = "&event:";
    let background:string ="&background:";
    let charaPic:string = "&charaPic:";
    let lines:string = "&lines:";
    
    let linesList:Array<ILinesItem> = new Array<ILinesItem>(); 
    let tempLines:ILinesItem ={
        id:0,
        event:"",
        bg:"",
        charaPic:[],
        chara:"",
        lines:"",
    }
    data.forEach(item =>{
        if(item.search(event)!==-1){
            tempLines.event = item.substr(event.length,item.length-1);
        }else if(item.search(background)!==-1){      
            tempLines.bg = item.substr(background.length,item.length-1);
        }else if(item.search(charaPic)!==-1){
            tempLines.charaPic = item.substr(charaPic.length,item.length-1).split(";");
        }else if(item.search(lines)!==-1){
            tempLines.id++;
            tempLines.chara = item.substr(lines.length,item.length-1).split(":")[0];
            tempLines.lines = item.substr(lines.length,item.length-1).split(":")[1];
            let linesItem:ILinesItem = {
                id:tempLines.id,
                event:tempLines.event,
                bg:tempLines.bg,
                chara:tempLines.chara,
                charaPic:tempLines.charaPic,
                lines:tempLines.lines,
            };
            linesList.push(linesItem);
        }
    })
    
    return linesList;
    
}