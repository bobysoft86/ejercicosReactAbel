import {Card} from "../Card/Card";
import "./Gallery.css"



export const Gallery = ({info}) => {
// console.log(info[0].card.discount);
  return (
  <div class="gallery">
    {info.map((text,index)=>(
      <div class="card">

      <Card key={index} data={text.card}></Card>
      </div>
        )
      )
    
    }
   </div>
  )
}

