import { Colors } from '../Colors/Colors';
import { Sizes } from '../Sizes/Sizes';
import './Product.css'
export const Product = (info) => {
    console.log(info);
  return (
      <>
        <div>
            <div>
                <img class="imagen" src={info.info.img} alt={info.info.img} />
            </div>
            <div>
                <h3>{info.info.title}</h3>
                <p>{info.info.ref}</p>
                 <h3>{info.info.price}</h3>
            </div>
            <div class="colorsBox">
                {info.info.colors.map((color, index)=>(

                <Colors key={index} value ={color} ></Colors>
                ))}
            </div>
                    <div class="colorsBox">
                    {info.info.sizes.map((sizes, index)=>(

                        <Sizes key={index} info={sizes}></Sizes>
                    ))}     
                    </div>
        </div>

    </>

  )
}
