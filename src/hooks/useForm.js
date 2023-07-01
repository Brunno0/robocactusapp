import { useState } from "react"

export const useForm=(inicialState)=>{
    console.log(inicialState)
    const [form,setForm] = useState(inicialState)

    const onChangeInputs =(event)=>{
      const {name,value} = event.target
      setForm({...form, [name] :value })
    }
    const cleanFields = ()=>{
        setForm(inicialState)        
    }
    return {form, onChangeInputs, cleanFields}
}