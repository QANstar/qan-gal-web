import ISave from "../interface/ISave";
//存档
export default class Save{
    private data:Array<ISave> = [];
    constructor(){
        this.load();
    } 
    save(saveData:ISave){
        this.data.push(saveData);
        localStorage.setItem('save',JSON.stringify(this.data))
    }
    load(){
        let save = localStorage.getItem('save');
        if(save!=null){
            this.data = JSON.parse(save);
        }
    }
    get(){
        return this.data;
    }
}