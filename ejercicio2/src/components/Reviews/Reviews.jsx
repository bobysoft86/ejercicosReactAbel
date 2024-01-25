import { Review } from "../Review/Review"


export const Reviews = ({info}) => {
    console.log("soy reviews",info)
  return (
    <>
    {info.map((text,index)=>(
        <Review info ={text}></Review>

    ))}
    </>
  )
}
