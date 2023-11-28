import PropTypes from "prop-types"

function Food(props){
    return(
        <>
            <h1 className="Food__color">{props.food}</h1>
        </>
    )
}

Food.defaultProps = {
    food: "햄버거"
}

export default Food;