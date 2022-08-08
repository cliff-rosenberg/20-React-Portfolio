import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors }  } = useForm({ mode: 'all' });
  
  const onSubmit = data => console.log(data);

    return (
      <MDBContainer className="bkgrd">
          <div className="d-flex justify-content-center" >
              
              <form className="w-40" onSubmit={handleSubmit(onSubmit)}>
              <span>Name</span>
                <input {...register("senderName", { required: true, pattern: /^[A-Za-z]+$/i })} className="w-100"/>
                {errors.senderName && <p>This field is required</p>}
              <span>email</span>
                <input {...register("email", { required: true })} className="w-100"/>
                {errors.email && <p>This field is required</p>}
                <input type="submit" className="my-1" />
              </form>
              
          </div>
      </MDBContainer> 
    )
};

export default Contact;