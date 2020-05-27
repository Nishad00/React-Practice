import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component
{

    constructor(props)
    {
        super(props)
    }

    displayDetail(selectedDish)
    {

        if(selectedDish != null)
        {
            return(
                <Card>
                    <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}/>
                    <CardBody>
                        <CardTitle> {selectedDish.name} </CardTitle>
                        <CardText> {selectedDish.description} </CardText>
                    </CardBody>
                    
                </Card>
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
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {coments}
            </ul>
        </div>
    )
        
    }

    render()
    {
        const selectedDish = this.props.selectedDish
        if (selectedDish == null) {
            return (<div></div>)
        }

        return(
            <div className="row">
               
                <div className="col-12 col-md-5 m-1">
                    {this.displayDetail(this.props.selectedDish)}
                </div>

                <div className="col-12 col-md-5 m-1">
                    {this.displayComment(this.props.selectedDish.comments)}
                </div> 
               
            </div>
        );
  
    }
    
}

export default DishDetail;

































































































// import React, { Component } from 'react';
// import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

// class DishDetail extends Component {

//     renderComments(comments) {
//         const coments = comments.map(comment => {
//             return (
//                 <li key={comment.id}>
//                     <p>{comment.comment}</p>
//                     <p>-- {comment.author},
//                     &nbsp;
//                     {new Intl.DateTimeFormat('pt-BR', {
//                         day: '2-digit',
//                         month: 'long',
//                         year: 'numeric'

//                     }).format(new Date(comment.date))}
//                     </p>
//                 </li>
//             )
//         })
//         return (
//             <div className='col-12 col-md-5 m-1'>
//                 <h4> Comments </h4>
//                 <ul className='list-unstyled'>
//                     {coments}
//                 </ul>

//             </div>
//         )
//     }

//     renderDish(dish) {
//         if (dish != null) {
//             return (
//                 <div className='col-12 col-md-5 m-1'>
//                     <Card>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardBody>
//                             <CardTitle>{dish.name}</CardTitle>
//                             <CardText>{dish.description}</CardText>
//                         </CardBody>
//                     </Card>
//                 </div>
//             )
//         }
//         else {
//             return (<div></div>)
//         }
//     }

//     render() {
//         const dish = this.props.dish
//         if (dish == null) {
//             return (<div></div>)
//         }
//         const dishId = this.renderDish(dish)
//         const commentDish = this.renderComments(dish.comments)
//         return (
//             <div className='row'>
//                 {dishId}
//                 {commentDish}
//             </div>
//         )
//     }
// }

// export default DishDetail