import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const url = "https://nameless-caverns-56943.herokuapp.com/services";

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-25 mx-auto">
      <h1>Adding Service</h1>
     <div className="container w-50">
        {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          type="number"
          className="mb-2"
          {...register("price")}
          placeholder="Price"
        />
        
        <input
          type="text"
          className="mb-2"
          {...register("img")}
          placeholder="Photo URL"
        />
        <input type="submit" />
      </form>
      {/* Form */}
     </div>

      {/* 
        <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
      */}
    </div>
  );
};

export default AddService;
