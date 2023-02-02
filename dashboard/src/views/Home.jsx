import Card from "../components/Card";
import style from "./Home.module.css"
import { useState } from "react";
import { v4 as uuid, validate } from 'uuid';
import axios from "axios"
import { useForm } from "react-hook-form";

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Table, Button } from "@mui/material"

function Home() {
    const [card, setCard] = useState([
        { id: uuid(), name: "Mohd Azeem", age: "24 yrs", designation: "SDE", salary: "40000" },
        { id: uuid(), name: "Mohd Asim", age: "23 yrs", designation: "FDE", salary: "30000" },
        { id: uuid(), name: "Mohd Aahil", age: "22 yrs", designation: "BDE", salary: "10000" },
        { id: uuid(), name: "Mohd Ahad", age: "27 yrs", designation: "SDE", salary: "20000" }

    ])
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [salary, setSalary] = useState("")
    const [designation, setDesignation] = useState("")
    const [open, setOpen] = useState(false)
    const [empId, setImpId] = useState("")
    const [Isedit, setIsEdit] = useState(false)

    const add = (e) => {
        e.preventDefault()
        if (!Isedit) {
            setCard([...card, { id: uuid(), name: name, age: age, designation: designation, salary: salary }])
        } else {
            const update = card.map((obj) => {
                if (obj.id === empId) {
                    return { id: empId, name: name, age: age, salary: salary, designation: designation }
                }
                return obj
            })
            setCard(update)
        }
        setIsEdit(false)
        setOpen(false)
        setName("")
        setAge("")
        setDesignation("")
        setSalary("")
        // *console.log(uuid());
    }

    const close = () => {
        setOpen(false)
        setName("")
        setAge("")
        setSalary("")
        setDesignation("")
    }
    return (

        <div className={style.main}>

            <button className={style.btn} onClick={() => setOpen(true)}>+ ADD USER</button>
            <form action="">
                <Table>
                    <Dialog aria-labelledby="dialog-title"
                        open={open}
                        onClose={() => setOpen(false)}>

                        <DialogTitle id="dialog-title">ADD USER</DialogTitle>
                        <DialogContent>
                            <tr>
                                <td><label htmlFor="">Name:</label></td>
                                <td><input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} /></td>

                            </tr>
                            <tr>
                                <td><label htmlFor="">Age:</label></td>
                                <td><input type="Number" name="" id="" value={age} onChange={(e) => setAge(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Designation</label></td>
                                <td><select name="" id="" value={designation} onChange={(e) => setDesignation(e.target.value)} style={{ width: "31vh" }} >
                                    <option value="select">select</option>
                                    <option value="FDE">FDE</option>
                                    <option value="SDE">SDE</option>
                                    <option value="BDE">BDE</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Salary:</label></td>
                                <td><input type="Number" name="" id="" value={salary} onChange={(e) => setSalary(e.target.value)} required /></td>
                            </tr>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="primary" disabled={!name || !age || !designation || !salary} onClick={add}> Add </Button>
                            <Button onClick={close}>close</Button>
                        </DialogActions>
                    </Dialog>
                </Table>
            </form>

            {card.map((v) => {
                return <Card values={v} card1={card} setCard1={setCard} setName={setName} setAge={setAge} setDesignation={setDesignation} setSalary={setSalary} setOpen={setOpen} setImpId={setImpId} setIsEdit={setIsEdit} />
            })}
        </div>

    )
}
export default Home;



