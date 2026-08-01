import "./Badge.css";

function Badge({

    children,

    color="primary"

}){

    return(

        <span className={`badge ${color}`}>

            {children}

        </span>

    );

}

export default Badge;