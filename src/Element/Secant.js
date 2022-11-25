import {React,Component, useState} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { inv, multiply } from 'mathjs'
const Matrix = () =>  {
    const [matrix,setMatrix] = useState([])
    const [size,setSize] = useState([])
    const [ansmatrix,setAnsMatrix] = useState(0) //เก็บ Matrix a
    const [ansmatrixX,setansmatrixX] = useState(0) //เก็บ Matrix a inv

    const create =(e)=>{ 
        e.preventDefault()
        genarate()
    }
    const calmatrix =(e)=>{
        e.preventDefault()
        genarate()
    }

    const cal =(e)=>{
        e.preventDefault()
        let step =[]
        let arrB=[]
        let calmatrixA=[]
        for (let i = 0; i < size; i++) {
            calmatrixA[i] = []
            step[i] = []
            arrB.push(Number(document.getElementById("rowb"+i).value)) //ใส่ค่าโดยใช้ elementID
            for (let j = 0; j < size; j++) {
                
                calmatrixA[i].push(
                Number(document.getElementById("column" + i + "row" + j).value) //ใส่ค่าโดยใช้ elementID
                )
              
            }
          }
        
        var mstrixAinv = inv(calmatrixA) // a inv
        var mstrixAsn = multiply(mstrixAinv, arrB) //answer 
        var mstrixAnsX = multiply(calmatrixA,mstrixAsn) //Check answer

        // console.log(mstrixAsn)
        setAnsMatrix(mstrixAsn)
        setansmatrixX(mstrixAnsX)

        // console.log(calmatrixA)
        // console.log(arrB)

        // console.log(mstrixAsn)
        
  
    }


    const genarate =()=> {
        let array = [];
        let temb = []
        for (let i = 0; i < size; i++) {
          array[i] = [];
          temb.push( //Matrix b
            <input
            id={"rowb"+i}
            />
          ) 
          let temp = [];
          for (let j = 0; j < size; j++) { //Matrix a
            temp.push(<input id={"column" + i + "row" + j} />);
          }
          array[i].push(<div class="matrix a">{temp}</div>);
        }

        setMatrix({ a: array , b:temb}); //set Matrix


    }
        return(
        <div>
            <h3>Matrix</h3>
            <Form>
                <Form.Group>
                    <Form.Label>
                        Input Size Of Matrix
                    </Form.Label>
                    <div>
                        <Form.Control onChange={(event) => setSize(event.target.value)}></Form.Control> 
                        
                    </div>
                    <br />
                    <br />
                    <Button onClick={create}>
                        Create Matrix

                    </Button>
                    <br />
                    <br />
                    
                    <div className="a">{matrix.a}</div>
                    <br></br>
                    <div className="b">{matrix.b}</div>
                  
                    <div >
                    <br />
                    <br />
                        <Button onClick={cal}>
                            Calculate
                        </Button>
                    </div>
                    <h5>Answer = {ansmatrix+" "}</h5>
                    <h5>Check Answer = {ansmatrixX+" "}</h5>
                 
                </Form.Group>
            </Form>
            <div id="shownumber"></div>
            <div id="showrootof"></div>  

        </div>
        )
    


}
export default Matrix