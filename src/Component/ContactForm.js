import React, { useEffect, useState } from 'react'

function ContactForm(props) {

    const initialValues={
            fullName: '',
            mobile: '',
            email: '',
            address: ''
    }
    const [values, setValues]=useState(initialValues)

useEffect(()=>{
    if(props.currentId=='')
        setValues({...initialValues})
    else
        setValues({...props.contactObjects[props.currentId]})
        
},[props.currentId,props.contactObjects])


    const handleInputChange=(e)=>{
        console.log("working")
        var {name, value}=e.target
        setValues({
            ...values,
            [name]:value
        })
       
    }

const handleFormSubmit=e=>{
    e.preventDefault()
    props.addorEdit(values)
}

    return (
       
            <form autoComplete="off" >
                <div className="form-row">
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>

                        </div>

                    </div>
                    <input className="form-control" onChange={handleInputChange} placeholder="full name" name="fullName" value={values.fullName}/>

                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>

                        </div>

                    </div>
                    <input className="form-control" onChange={handleInputChange} placeholder="full name" name="mobile" value={values.mobile}/>

                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>

                        </div>

                    </div>
                    <input className="form-control"  onChange={handleInputChange} placeholder="full name" name="email" value={values.email}/>

                </div>
               
                

                </div>
                <div className="form-group">
                    <textarea  className='form-control' onChange={handleInputChange} placeholder="Address" name="address" value={values.address}/>
                </div>
                <div className="form-group">
                    <input type="submit" onClick={handleFormSubmit} value='sss' className="btn btn-primary btn-block"/>

                </div>
            </form>
    )
}

export default ContactForm
