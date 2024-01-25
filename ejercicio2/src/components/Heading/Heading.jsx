import { Reviews } from "../Reviews/Reviews"



export const Heading = ({info}) => {
 
console.log("soy heading",info);
    return (
    <div>

<Reviews info={info}></Reviews>
    </div>
  )
}
