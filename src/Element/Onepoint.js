import React, { useState } from 'react'
import {Table,Button,Form,Container} from 'react-bootstrap'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";
import { evaluate } from 'mathjs'

const TeesT = () => {

    const print= () =>{
        console.log(data)
        setValuex(data.map((x)=>x.X));
        setValuey(data.map((x)=>x.Y));
        setValuefx(data.map((x)=>x.FX))
        return(
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th width='50%'>X</th>
                            <th width='50%'>Y</th>
                            <th width='50%'>f(x)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.X}</td>
                                <td>{element.Y}</td>
                                {/* <td>{element.FX}</td> */}
                            </tr>)
                        })}
                    </tbody>
                </Table>
                
            </Container>
        )
    }

    const SetTable = (a,b,c) =>{
        var obj={}
        var fx,scope
        var testt=[];
        for(let i=0;i<c;i++){
            // scope={
            //     x:i+1
            // }
            // fx = evaluate(Equation,scope)
            obj={
                //Num:i+1,
                X:i+1,
                Y:(Math.random()*b).toFixed(0),//random
                FX : fx
            }
            testt[i]=i+1;
            data.push(obj)
            
        }
    }
    


    const data =[]  
    const [n,setNum] = useState(0)
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    //const[fx,setFx] = useState(0)

    // const [Equation,setEquation] = useState("(x^4)-13")

    const [html,setHtml] = useState(null)
    
    
    const [valuex,setValuex] = useState([])
    const [valuey,setValuey] = useState([])
    const [valuefx,setValuefx] = useState([])
    const [show,setShow] = useState(false)

    const cal_sum = (event) =>{ //test array
         event.reduce((previous,current)=>previous+current,0)
         console.log(event.target.value)
        
    }

    const input_n =(event) =>{
        console.log(event.target.value)
        setNum(event.target.value)
        setY(event.target.value) //functrandom
        setX(event.target.value)
    }
    const inputEquation = (event) =>{
        console.log(event.target.value)
        // setEquation(event.target.value)
    }

    const setValue = () =>{
        SetTable(x,y,n) //setValue(a,b,c)
        
        setShow(true)
        setHtml(print())
        
    }
    const state = {
        labels: valuex,
        datasets: [
          {
            label: 'Y',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'green',
            borderWidth: 2,
            data:valuey
          },
          {
            label: 'F(X)',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'red',
            borderWidth: 2,
            data:valuefx
          }
        ]
    }
  return (
    <Container>
        <div>
            <h5>Test</h5>
        </div>
        <Form>
            <Form.Group>
                <Form.Label>Input n</Form.Label>
                <input type='number'onChange={input_n}></input>
                {/* <Form.Label>Input f(x)</Form.Label>
                <input type="text"value={Equation} onChange={inputEquation}></input> */}
            </Form.Group>
            <br></br>
            <Button onClick={setValue}>Click</Button>
            <br></br>
            <Container>
            {html}
            {show&&<Line
                data={state}
                options={{
                legend:{
                display:true,
                position:'right'
                }
                }}
                />}
            </Container>
        </Form>
    </Container>
  )
} 

export default TeesT