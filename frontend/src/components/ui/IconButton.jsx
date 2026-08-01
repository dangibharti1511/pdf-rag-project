import "./IconButton.css";

function IconButton({

    icon,

    onClick

}){

    return(

        <button

            className="icon-btn"

            onClick={onClick}

        >

            {icon}

        </button>

    );

}

export default IconButton;