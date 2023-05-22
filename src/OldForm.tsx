
import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
   name: Yup.string().required(),
   email:Yup.string().required().email(),
   password:Yup.string().required()
})

const onSubmit = (values:any) :void  => {
  console.log(values)
}

const OldForm = () => {
    const formik = useFormik({
      initialValues: {
        name:'',
        email:'',
        password:''
      },
      onSubmit,
      validationSchema,

    })
    return (
        <>
          <div className="card card-compact w-96 my-20 mx-auto bg-base-100 shadow-xl">
            <form onSubmit={formik.handleSubmit}>
              <div className="card-body">
                <h2 className="mt-4 card-title">Formik and Yup Example</h2>
                  <div className="divider my-0"></div>
                    <div>
                      <label className='text-lg font-bold my-4'>Name</label>
                      <input name='name'
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.name}
                        type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
                        {formik.touched.name && formik.errors.name ? (
                          <div>{formik.errors.name}</div>
                        ) : ''}
                    </div>
                    <div>
                    <label className='text-lg font-bold my-4'>Email</label>
                      <input name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
                      {formik.touched.email && formik.errors.email ? (
                          <div>{formik.errors.email}</div>
                        ) : ''}
                    </div>
                    <div>
                    <label className='text-lg font-bold my-4'>Password</label>
                      <input name='password' type='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"/>
                      {formik.touched.password && formik.errors.password ? (
                          <div>{formik.errors.password}</div>
                        ) : ''}
                    </div>
                  <div className="card-actions justify-end">
                        <button type='submit' className="btn btn-primary">Save</button>
                        <button type="reset" className="btn btn-secondary">Reset</button>
                  </div>
                </div>
              </form>
          </div>
        </>
      )
}
export default OldForm;