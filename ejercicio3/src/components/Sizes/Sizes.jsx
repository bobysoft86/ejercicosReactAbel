
export const Sizes = ({info}) => {
  console.log(info);
    return (
    <>
        <p>{info.qty< 5 ?<p>Pocas</p>:null}</p>
        <div style={info.qty === 0?{opacity:0.2,pointerEvents:'none'} :null}>
            <p>{info.name}</p>
        </div>
    </>
  )
}
