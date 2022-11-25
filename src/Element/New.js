import React, { useState } from 'react'
import {Table,Button,Form,Container} from 'react-bootstrap'
import { create,all } from 'mathjs'
import 'chart.js/auto'
import { Scatter } from 'react-chartjs-2'
const math=create(all,{})

const Matrix = () => {
    const [table1,settable1] = useState([]);
    const [datagraph,setdatagraph] = useState([]);
    // const [fx,setFX] = useState([])
    const print= () =>{
        console.log(data)
        // setX(data.map((x)=>x.X))
        // setY(data.map((x)=>x.Y))
        return(
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th width='20%'>N</th>
                            <th width='40%'>X</th>
                            <th width='40%'>Y</th>
                            {/* <th width='40%'>F(x)</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.Num}</td>
                                <td>{element.X}</td>
                                <td>{element.Y}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
            
        )
    }

    const setTable = (a,b,c) =>{
        var obj={}
        var testt=[];
        var eiei=[]
        // var x = null
        // var y = null
        for(let i=0;i<c;i++){
            var datay = (Math.random()*b).toFixed(0)
            obj={
                Num:i+1,
                X:i+1,
                Y:datay
            }
            testt[i]=i+1;
            data.push(obj)
            eiei.push({x:i+1,y:datay});
            console.log(table1)
          
        }
        console.log(eiei)
        settable1(eiei)
        console.log(table1)
        var sumx = data.reduce(((a,b)=> a+=b.X),0); //หาจากx aเริ่ม0 บวกไปเรื่อยๆ
        // console.log(sumx)
        var sumx2 = data.reduce(((a,b)=> a+=Math.pow(b.X,2)),0); //sumx^2
        // console.log(sumx2)
        var sumy = data.reduce(((a,b)=>a+=Number(b.Y)),0); //หาจาก y บวกไปเรื่อยๆ
        // console.log(sumy)
        var sumxy = data.reduce(((a,b)=> a+=b.X*b.Y),0); //
        // console.log(sumxy)
        
        var rangex = [[c,sumx],[sumx,sumx2]]
        // console.log(rangex)
        var rangey = [sumy,sumxy]
        // console.log(rangey)

        var cal = math.lusolve(rangex,rangey) //lu
        var answerobject=[]
        for(let i=0;i<n;i++){
            let y=0;
            y = Number(cal[0])+(Number(cal[1])*(i+1))
            // setFX([...fx],y);
            answerobject.push({x:i+1,y:y}); //กราฟ
        }
        console.log(answerobject);
        setdatagraph(answerobject) //โยนค่าทำกราฟ

        console.log(cal)
        setCal(cal)
        //getdatagraph(cal);
        // console.log(ma)

    }




    const data =[]  
    const [html,setHtml] = useState(null)
    const [x,setX] = useState("")
    const [y,setY] = useState()
    const [Cal,setCal] = useState([])
    const [n,setNum] = useState(0)
    const [show,setShow] = useState(false)

    

    const inputN =(event) =>{
        console.log(event.target.value)
        setNum(event.target.value)
    }
    const inputX = (event) =>{
        console.log(event.target.value)
        setX(event.target.value)
    }
    const inputY = (event) =>{
        console.log(event.target.value)
        setY(event.target.value)
    }
    const setValue = () =>{
   
        setTable(x,y,n)

        setShow(true)
        setHtml(print())
        
    }
  return (
    <Container>
        <Form>
            <h3>Matrix</h3>
            <Form.Group className='Matrix'>
                <Form.Label>Input n</Form.Label>
                <input type='number' id='n' placeholder='n' className='form-control' style={{width:'20%',margin:'auto'}} onChange={inputN}></input>
                <Form.Label>Input x</Form.Label>
                <input type='number' id='x' placeholder='x' className='form-control' style={{width:'20%',margin:'auto'}} onChange={inputX}></input>
                <Form.Label>Input y</Form.Label>
                <input type='number' id='y' placeholder='y' className='form-control' style={{width:'20%',margin:'auto'}} onChange={inputY}></input>
            </Form.Group>
            <br></br>
            <Button onClick={setValue}>Set</Button>
            <br></br>
            {show&&<h5>Answer is {Cal.map((a,b)=>"A"+b+" = "+a+" ")}</h5>}
            {show&&<Container>
            {html}
            <Scatter data={{
                labels: null,
                datasets:[
                    {
                        label:'X',
                        data: table1,
                        fill:false,
                        showLine:true,
                        borderColor:'red',
                    },
                    {
                        label:'X1',
                        data: datagraph,
                        fill:false,
                        showLine:true,
                        borderColor:'blue',
                    },
            ]
            }}/>
            </Container>}
        </Form>
    </Container>
  )
} 

export default Matrix