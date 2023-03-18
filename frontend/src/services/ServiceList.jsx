import React from 'react'
import ServiceCard from './ServiceCard'
import{Col} from "reactstrap"

import weatherImg from'../assets/images/weather.png'
import guideImg from'../assets/images/guide.png'
import customizationImg from'../assets/images/customization.png'

  const ServiceData =[
    {
    imUrl: weatherImg,
    title: "Vào cổng",
    desc: "Vé vào cổng để có thể sử dụng các dịch vụ tham quan và các dịch vụ khác ở núi Bà Đen. ",
    
    },
    {
    imUrl: guideImg,
    title: "Cáp treo",
    desc: "Vé có nhiều loại vé và combo khác nhau theo từng nhu cầu của khách tham quan núi Bà Đen.",
    },
    {
    imUrl: customizationImg,
    title: "Máng trượt",
    desc: "Loại hình máng trượt không đổi, mang lại trải nghiệm gần gũi với thiên nhiên rừng núi Bà Đen.",
    },
    


  ]



const ServiceList = () => {
  return( 
  <>
  {ServiceData.map((item,index) => (
  <Col lg='3' key={index}>
    <ServiceCard item ={item} />
    </Col>
    ))}
  </>)
}

export default ServiceList
