import './SingleCard.css'

const SingleCard=(props)=>{
    return(
        <div className="single_card">
        <div className="name_rating">
        <h2>{props[" name"]}</h2>
        <p>{props[" rating"]}</p>
        </div>
        <h3  className='adress'>{props[" address"]}</h3>
        <h5  className='adress1'>{props[" outcode"]} {props[" postcode"]}</h5>
        <div className="singlecard_footer">
        <h4 style={{color:"#22C55E" , fontWeight:"400", fontSize:"1.2rem"}}>{props[" type_of_food"]}</h4>
        <a href='#'>Visit Menu</a>
        </div>
        </div>
    )
}

export default SingleCard