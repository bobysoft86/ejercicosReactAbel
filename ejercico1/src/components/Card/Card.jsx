import './Card.css'

export  const Card = ({data}) => {

    console.log("soy card",data)
    return (

    <div>
        <img src={data.img} alt="" />
        <p>{data.discount}</p>
            <div class="info_card">
                <div class="card_title">
                <p>{data.tag}</p>
                <p>{data.title}</p>
                </div>
                <p>{data.price}</p>
            </div>
    </div>
  )
}
