import { useState } from "react";
import { length, time} from "../data/conversionTable";
import '../style/styles.css'
import { lengthUnits, timeUnits } from "../data/units";

export default function Convertor({type}){

    let unitsList = lengthUnits;
    let conversionList = length;
    let title = 'Length';
    let index = 0;

    if(type == 'time'){
        unitsList = timeUnits;
        conversionList = time;
        title = 'Time';
    }

    console.log(unitsList);
    console.log(conversionList);

    let [data,setData] = useState({
        fromUnit: unitsList[0].unit,
        toUnit: unitsList[0].unit,
        fromVal: 0,
        toVal: 0
    });
    
    function convert(fromUnit,toUnit,fromVal){
        
        const row = conversionList.filter(row =>
            row.from === fromUnit && row.to === toUnit
        )
        
        return parseFloat(fromVal)*(row[0].factor);
        
    }
    function handleChangeFromVal(e){
        
        let val = convert(data.fromUnit,data.toUnit,e.target.value,data.toVal);
        setData({
            ...data,
            fromVal: e.target.value,
            toVal: val
        })

    }
    function handleChangeToVal(e){

        let val = convert(data.toUnit,data.fromUnit,e.target.value,data.fromVal);
        setData({
            ...data,
            toVal: e.target.value,
            fromVal: val
        })

    }
    function handleChangeFromUnit(e){

        let val = convert(e.target.value,data.toUnit,data.fromVal,data.toVal);

        setData({
            ...data,
            fromUnit: e.target.value,
            toVal: val
        })

    }

    function handleChangeToUnit(e){

        let val = convert(e.target.value,data.fromUnit,data.toVal,data.fromVal);
        setData({
            ...data,
            toUnit: e.target.value,
            fromVal: val
        })

    }

    return(

        <>
            <p style={{fontSize:25,color: 'skyblue',}}>{title} Convertor</p>
            <input
                style={{
                width:'20%',
                height: '5%',
                fontSize:20,
                borderRadius:5,
                }}
                name = "fromVal"
                type="number"
                value = {data.fromVal}
                onChange = {handleChangeFromVal}
            />
           
            <span> </span>
            <select name = "fromUnit"
                 style={{
                    width:'10%',
                    height: '5%',
                    fontSize:20,
                    borderRadius:5,
                    }}
                value = {data.fromUnit}
                onChange = {handleChangeFromUnit}>
                {unitsList.map(row =>
                <option key={index+1}>{row.unit}</option>)}
            </select>
            
            <span style={{fontSize:20}}> = </span>
            <input 
                style={{
                    width:'20%',
                    height: '5%',
                    fontSize:20,
                    borderRadius:5,
                }}
                name = "toVal"
                type = "number"
                value = {data.toVal}
                onChange = {handleChangeToVal}
            />
            
            
           <span> </span>
          
            <select name="toUnit"
                style={{
                    width:'10%',
                    height: '5%',
                    fontSize:20,
                    borderRadius:5,
                }}
                value = {data.toUnit} 
                onChange={handleChangeToUnit}>
               {unitsList.map(row =>
                <option key={index+1}>{row.unit}</option>)}
            </select>
          
            

        </>
    )
}