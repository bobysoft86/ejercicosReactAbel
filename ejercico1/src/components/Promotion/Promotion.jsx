import "./Promotion.css"

export const Promotion = (info) => {

  console.log(info.info.day);
  return (
    <>
    <div class="backimage" style={{ 
      backgroundImage: `url(${info.info.background})` 
    }}>
      <div class="promotiontext">
        <h5>{info.info.day}</h5>
        <h2>{info.info.title}</h2>
        <p>-{info.info.discount}</p>
        <h2>{info.info.price}</h2>
      </div>




    </div>
    </>
  )
}
