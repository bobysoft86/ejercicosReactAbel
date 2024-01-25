import { Rating } from "../Rating/Rating";


export const Review = ({info}) => {
  console.log("soy review",info);
    return (
    <>
    <Rating info={info.review.rating}></Rating>
    {info.review.avatar}
    {info.review.title}
    {info.review.description}
    {info.review.date}
    

    
    </>

  )
}
