import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }  } = useForm({ mode: 'all' });

  const initialValues = {
    senderName: "",
    email: "",
    message: ""
  };
  
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

    return (
      <MDBContainer fluid className="vh-100 bkgrd">
          <div className="d-flex w-100 justify-content-center" >
              
              <form className="w-25 mt-4" onSubmit={handleSubmit(onSubmit)}>
                <p className="my-0">Name</p>
                <input defaultValue={initialValues.senderName} 
                {...register("senderName", { required: true, minLength: 2, maxLength: 80 })} 
                className="w-100"/>
                {errors.senderName && <p className="mw-100">Please enter your name</p>}
                <p className="my-0">email</p>
                <input defaultValue={initialValues.email} 
                {...register("email", { 
                  required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                   })} 
                className="w-100"/>
                {errors.email && <p className="mw-100">A valid email is required</p>}
                <p className="my-0">Message</p>
                <input defaultValue={initialValues.message}
                {...register("message", {
                  required: true
                })}
                className="w-100"/>
                {errors.message && <p className="mw-100">Please enter a message</p>}
                <input type="submit" className="my-1" />
              </form>
              
          </div>
      </MDBContainer> 
    )
};

export default Contact;