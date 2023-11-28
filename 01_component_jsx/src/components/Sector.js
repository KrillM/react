import PropTypes from "prop-types";

function Sector({ title, children }) {
    return (
        <>
        <div className="Sector__section">
            <h3 className="Sector__title">{title}</h3>
            <div>{children}</div>
        </div>
        </>
    );
}

Sector.propType = {
    title: PropTypes.string,
    children: PropTypes.node // 다양한 데이터가 올 수 있기 때문
}

export default Sector;