import style from "./Card.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import Delete from "@mui/icons-material/Delete";

function Card({ values ,card1,setCard1,setName,setAge,setSalary,setDesignation,setOpen,setImpId,setIsEdit}) {

   const Delete = (id)=>{
        const Delete=card1.filter((value)=> value.id!==id)
        setCard1(Delete)
        console.log(Delete);
   } 

   const edit =({name,age,designation,salary,id})=>{
           setOpen(true)
           setName(name)
          setAge(20)
        // console.log(age);
           setSalary(salary)
           setDesignation(designation)
           setImpId(id)
           setIsEdit(true)   
           setAge(age) 
   }
    return (
        <>
                <div className={style.card} >
                    
                <table>
                <tr>
                <td className={style.icon} onClick={()=>Delete(values.id)}><DeleteIcon/></td>
             </tr>
                <tr>
                        <td>
                            <div className={style.logo}>
                                <h6 className={style.logoP}>MA</h6>
                            </div>
                        </td>
                    </tr>

                <tr >
                        <td  >
                            <div className={style.content}>
                                <tr><td>Name:    {values.name}</td></tr>
                                <tr><td>Age:     {values.age}</td></tr>
                                <tr><td>Designation:     {values.designation}</td></tr>
                                <tr><td>Salary:     {values.salary}</td></tr>

                            </div>
                        </td>
                    </tr>

                <tr>
                        <td>
                        <button className={style.btn} onClick={()=>edit(values)}>Edit</button>
                        </td>
                       
                    </tr>

                </table>
           </div>

           
        </>
    )
}

export default Card;