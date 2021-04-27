import './Card.css';

function Card(props){
    const classes = 'card '+ props.className;
    // this has to be done so that styling can be applied for children.
    
    return(
        <div className={classes}>{props.children}</div> // props.children components.content between tags
    );
}

export default Card;