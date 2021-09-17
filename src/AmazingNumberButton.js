import './AmazingNumberButton.css';

function AmazingNumberButton({ onClick, value, className }) {
    return (
        <button className={className} value={value} onClick={onClick}>{value}</button>
    );
        
}

export default AmazingNumberButton;