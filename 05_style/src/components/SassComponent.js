import '../styles/origin.scss';

function SassComponent() {
    return(
        <>
            <div className="origin-sass">
                <div className="box red"></div>
                <div className="box yellow"></div>
                <div className="box green"></div>
                <div className="box blue"></div>
                <div className="box purple"></div>
            </div>

            <div className="scss-bumo">
                Hello World
                <ul>
                    <li>미국</li>
                    <li>중국</li>
                </ul>
                <ol>
                    <li>영국</li>
                    <li>태국</li>
                    <li>덕국</li>
                </ol>
            </div>

            <div className="box1"></div>
            <div className="soryeon">☭</div>

            <button className="btn">일반 버튼</button>
            <button className="btn-primary">강조 버튼</button>
        </>
    )
}

export default SassComponent;