import React, { useState,useEffect } from 'react';
import ContactForm from './ContactForm'
import firebaseDb from "../firebase"

function Contacts() {

    const [contactObjects, setContactObjects]= useState({})
    const [currentId, setCurrentId]= useState()
    useEffect(()=>{
        firebaseDb.child('contacts').on('value',snapshot=>{
            if(snapshot.val() !=='')
                setContactObjects({...snapshot.val()})
            else
                setContactObjects({})
        })

    },[])

    const addorEdit= obj =>{
        if(currentId =='')
            firebaseDb.child('contacts').push(
                obj,
                err=>{
                    if(err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        else
            firebaseDb.child(`contacts/${currentId}`).set(
                obj,
                err=>{
                    if(err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )

    }
    const onDelete=(id)=>{
        if(window.confirm("Are you sure")){
            firebaseDb.child(`contacts/${id}`).remove(
                err=>{
                    if(err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )}

        }
            




    return (
        <>
            
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Contact Register</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-5">
                    <ContactForm {...({addorEdit,currentId,contactObjects})}/>

            </div>
            <div className="col-md-7">
            
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                    <tbody>

                    {
                        Object.keys(contactObjects).map(id=>{
                            return<tr key={id}>
                                <td>{contactObjects[id].fullName}</td>
                                <td>{contactObjects[id].email}</td>
                                <td>{contactObjects[id].mobile}</td>
                                <td>{contactObjects[id].address}</td>
                                <td>
                                    <a  className="btn btn-primary mx-1" onClick={()=>{setCurrentId(id)}}>edit</a>
                                    <a  className="btn btn-danger" onClick={()=>{onDelete(id)}}>X</a>
                                </td>
                                </tr>
                        }
                            )
                    }
  
                     </tbody>
            </table>



          </div>

        </div>
    </>
    )
}

export default Contacts
