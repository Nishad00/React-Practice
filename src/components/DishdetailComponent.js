import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component
{

    displayDetail(dish)
    {

        if(dish != null)
        {
            return(
                <div className="col-12 col-md-5 m-1">

                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                    
                </Card>

                </div>
            )
        }
        else 
        {
            return( <div></div> )
        }

    }

    displayComment(comments)
    {    
        const coments = comments.map((comment)   => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                }).format(new Date(comment.date))}
                </p>
            </li>
        )
    })
    return (
        <div className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {coments}
            </ul>
        </div>
    )
        
    }

    render()
    {
        const dish = this.props.dish
        if (dish == null) {
            return (<div></div>)
        }

        return(
           
               
            <div className="container">
                <div className="row">
                    {this.displayDetail(this.props.dish)}             
                    {this.displayComment(this.props.dish.comments)}
                </div>
            </div>
                

        );
  
    }
    
}

export default DishDetail;
































































































