import './BeautifulScreen.css';

function BeautifulScreen({ result, calcul }) {
    return (
        <div className="beautifulScreen">
            <div className="tit">
                <h1>{result}</h1>
            </div>
            <div className="sous-tit">
                <h3>{calcul}</h3>
            </div>
        </div>
    );

}

export default BeautifulScreen;