import React, { useState } from "react";





const CategoryForm = (props:any) => {


    const [valuesForUpdate, setValuesForUpdate] = useState(props.item?.title)
    const [valueForCreate, setValueForCreate] = useState('')

    function onSubmit(e:any) {
      e.preventDefault()

      
      if(props.item?.title) {
        props.functionForData({id:props.item?._id, body:valuesForUpdate})
        props.submited()
        setValuesForUpdate('')
      }else {
        setValueForCreate('')
        props.functionForData(valueForCreate)
      }
      

    }

   

  return (
    <div>
          <form className="flex gap-2 flex-col" onSubmit={onSubmit}>
              <input
                type="text"
                name="title"
                value={props.item?.title ? valuesForUpdate : valueForCreate}
                autoFocus
                onChange={(e)=> props.item?.title ? setValuesForUpdate(e.target.value) : setValueForCreate(e.target.value)}
                placeholder="Category nomini yozing"
                className={`${props.item?.title ? 'mt-30 py-2 px-3 rounded-md border border-slate-500 outline-slate-300' : 'outline-none py-2 px-3 rounded-md'} `}
              />
              <div className="flex gap-1 justify-end mt-20">
                <button
                  className="px-5 py-2 rounded bg-blue-600 text-white border-none outline-none"
                  type="submit"
                >     
                {props.item?.title ? 'Update' : 'Create'}             
                  
                </button>
              </div>
            </form>
    </div>
  )
}

export default CategoryForm