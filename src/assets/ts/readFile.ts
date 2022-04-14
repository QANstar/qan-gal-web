import axios from 'axios' ;
import ILinesItem from '../../interface/ILinesItem';
import linesDeal from './linesDeal'
export default async function readFile(){
    await axios.get('./lines/test.txt')
    .then( res => {
      let str:Array<string> = res.data.split("\r\n");
      let lines:Array<ILinesItem> =linesDeal(str);;
      console.log(lines)
    })
    .catch( err => console.log(err))
}