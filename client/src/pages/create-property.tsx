
import { useState } from "react"
import { useGetIdentity } from "@pankod/refine-core"
import {FieldValues, useForm} from '@pankod/refine-react-hook-form'
import { useNavigate } from "@pankod/refine-react-router-v6"
import Form from "components/common/Form"


const CreateProperty = () => {
  const navigete = useNavigate();
  // allow to get all user info open now
  const {data:user} = useGetIdentity();
  const [propertyImage,setPropertyImage] = useState({name: '', url:''})
  // {onFinish,formLoading} : when form loading and when done,
  const {refineCore:{onFinish,formLoading},register,handleSubmit} = useForm()

  const handleImageChange = (file: File) => {
    const reader = (readFile: File) => new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.readAsDataURL(readFile);
    });

    reader(file).then((result: string) => setPropertyImage({ name: file?.name, url: result }));
  };

  const onFinishHandler = async (data:FieldValues) =>{
    if(!propertyImage.name)return alert('Please Select an image');
    await onFinish({...data,photo:propertyImage.url ,email:user?.email })
  }

  return (
    // We Used type:create/edit to be dynamic form!
    <Form type="Create" register={register} onFinish={onFinish} formLoading={formLoading} handleSubmit={handleSubmit} handleImageChange={handleImageChange} onFinishHandler={onFinishHandler} propertyImage={propertyImage}/>
  )
}

export default CreateProperty