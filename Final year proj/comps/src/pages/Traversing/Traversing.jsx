import React from 'react'
import styles from './Traversing.module.css'
import {useState} from 'react'


const Traversing = () => {
  
  //state storage for input fields
  const[fields,setFields]=useState([{line:'', distance:'', bearing:'',lat:'',dep:''}]);
  const[latitudeSum, setLatitudeSum]=useState(0)
  const[departureSum, setDepartureSum]=useState(0)

  //convert radians to degrees
  function degrees_to_radians(radians){
  var pi = Math.PI;
  return radians * (pi/180);
}

  //handling addition of rows
  function handleAdd(){
    const values = [...fields]
    values.push({value:null})
    setFields([...fields,{line:'',distance:'', bearing:'', lat:'', dep:''}])
  }

  //handling state tracking logic
  const onHandle=(e,i)=>{
    let newForm =[...fields];
    newForm[i][e.target.name]=e.target.value
    setFields(newForm);
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log('submitData', fields);
  }

  

  //Store total
  let TotalDep=[]
  let TotalLat=[]



  //solving for departure
  const solveDeparture=(bearing,distance)=>{    
    //d * sine bearing
    let dep=Number(distance) * Math.sin(Number(bearing));
    console.log(dep);
    TotalDep.push(dep)
    console.log('Totaldep:',TotalDep)
    return (
    <div>{dep}</div>
    )
  }
//solving for latiude
  const solveLatitude=(bearing,distance)=>{
    let lat=Number(distance) * Math.cos(Number(bearing))
    console.log(lat)
    TotalLat.push(lat)
    console.log('TotalLat:',TotalLat)
    return(
      <div>{lat}</div>
    )
  }

  //calculate sum
const solveLatSum=()=>{
    let LatSum=0;
    if(TotalLat.length > 1){
    for(let i = 0; i < TotalLat.length;i++ ){
      LatSum += TotalLat[i]
       
    }
    setLatitudeSum(LatSum)
  }
}

const solveDepSum=()=>{
  let DepSum=0;
  if(TotalDep.length > 1){
  for(let i = 0; i < TotalDep.length;i++ ){
    DepSum += TotalDep[i]
  }
  setDepartureSum(DepSum)
}
} 
  
  
  


  return (
    <div className={styles.container}>
      <h1>TRAVERSING</h1>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>LINE</div>
          <div>DISTANCE</div>
          <div>BEARING</div>
          <div>LATITUDE</div>
          <div>DEPARTURE</div>
        </div>
        {
          fields.map((field,idx)=>{
            return(
          <div   
            className={styles.row1}
            key={idx}>
            <div>
          <input
          className={styles.line}
          name='line'
          type='text'
          value={field.line}
          onChange={(e)=>onHandle(e,idx)}
          />
          </div>
          <div>
          <input
          name='distance'
          className={styles.distance}
          type='number'
          value={field.distance}
          onChange={(e)=>onHandle(e,idx)}
          />
          </div>
          <div>
          <input
          name='bearing'
          className={styles.bearing}
          type='text'
          value={field.bearing}
          onChange={(e)=>onHandle(e,idx)}
          />
          </div>
          <div className={styles.lat}>
          <div>
          {field.bearing && field.distance? solveLatitude(degrees_to_radians(Number(field.bearing)),Number(field.distance)):''}
          </div>
          </div>
          <div className={styles.dep}>
            <div>
              {field.bearing && field.distance? solveDeparture(degrees_to_radians(Number(field.bearing)),Number(field.distance)):''}
            </div>
          </div>
              </div>
            )
          })
        }
        <button 
        className={styles.addField}
        onClick={()=>handleAdd()}>Add Field</button>
        {/* <button
        onClick={onSubmit}
        >
          submit
        </button> */}

        <div className={styles.total_button}>
        <button
        onClick={solveLatSum}
        >Total Latitude</button>: <div>{latitudeSum}</div>
        <button
        onClick={solveDepSum}
        >Total Departure</button>:<div>{departureSum}</div>
        </div>
        
        {/* <div className={styles.row1}>
          <div>
          <input
          className={styles.line}
          type='text'
          />
          </div>
          <div>
          <input
          className={styles.distance}
          type='text'
          />
          </div>
          <div>
          <input
          className={styles.bearing}
          type='text'
          />
          </div>
          <div className={styles.lat}>
          <button>solve latitude</button>
          </div>
          <div className={styles.dep}>
            <button>solve departure</button>
          </div>
        </div>


        <div className={styles.row2}>
          <div>
          <input
          className={styles.line}
          type='text'
          />
          </div>
          <div>
          <input
          className={styles.distance}
          type='text'
          />
          </div>
          <div>
          <input
          className={styles.bearing}
          type='text'
          />
          </div>
          <div className={styles.lat}>
          <button>solve latitude</button>
          </div>
          <div className={styles.dep}>
            <button>solve departure</button>
          </div>
        </div>

        <div className={styles.row3}>
          <div>
          <input
          className={styles.line}
          type='text'
          />
          </div>
          <div>
          <input
          className={styles.distance}
          type='text'
          />
          </div>
          <div>
          <input
          className={styles.bearing}
          type='text'
          />
          </div>
          <div className={styles.lat}>
          <button>solve latitude</button>
          </div>
          <div className={styles.dep}>
            <button>solve departure</button>
          </div>
        </div>


        <div className={styles.row4}>
          <div>
          <input
          className={styles.line}
          type='text'
          />
          </div>
          <div>
          <input
          className={styles.distance}
          type='text'
          />
          </div>
          <div>
          <input
          className={styles.bearing}
          type='text'
          />
          </div>
          <div className={styles.lat}>
          <button>solve latitude</button>
          </div>
          <div className={styles.dep}>
            <button>solve departure</button>
          </div>
        </div>


        <div className={styles.row5}>
          <div>
          <input
          className={styles.line}
          type='text'
          />
          </div>
          <div>
          <input
          className={styles.distance}
          type='text'
          />
          </div>
          <div>
          <input
          className={styles.bearing}
          type='text'
          />
          </div>
          <div className={styles.lat}>
          <button>solve latitude</button>
          </div>
          <div className={styles.dep}>
            <button>solve departure</button>
          </div>
        </div> */}
      </div>
      
    </div>
  )
}

export default Traversing