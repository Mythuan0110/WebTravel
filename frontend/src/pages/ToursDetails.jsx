import React from 'react'
import '../styles/tour-details.css'
import { Container,Row,Col ,Form,ListGroup } from 'reactstrap';
import{useParams}from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from './../utlis/avgRating'


const ToursDetails = () => {
  const {id} =useParams()
  /// đây là dữ liệu tĩnh sau này chúng ta sẽ gọi API của mình và tải dữ liệu của chúng ta từ cơ sở dữ liệu
  const tour = tourData.find(tour => tour.id===id)
  ///hủy cấu trúc các thuộc tính khỏi đối tượng tham quan
  const{photo,title , desc, price , reviews, city ,address, distance , maxGroupSize}=tour;
  const{totalRating,avgRating} = calculateAvgRating (reviews);


  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className='tour__content'>
              <img src={photo} alt="" />
              <div className='tour__info'>
              <h2>{title}</h2>
              <div className=' d-flex align-items-center gap-5'>
              <span className="tour__rating d-flex align-items-center gap-1">
              <i class="ri-star-half-fill"></i>{avgRating === 0 ? null :avgRating}
              {totalRating === 0 ?(' not rated ') :( <span>({reviews?.length })</span> )}  
            </span>


            
              </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    
    
    
    </>
  )
}

export default ToursDetails
