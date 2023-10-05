
import './App.css';
import {Form, Button ,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from "react";
import data from './data.js';
import {Routes,Route,Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './Detail.js'






function NavScrollExample() {

  let [Shoes] = useState(data)
  let navigate = useNavigate();


  return (
 <div className="App">



    <Navbar expand="lg" className="bg-body-tertiary">
  
        <Navbar.Brand href="#"><Link to="/"><img src="/mainaroma.png" alt="Sbottle"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><Link to="/detail" style={{ textDecoration: "none", color:"black"}}>브랜드스토리</Link></Nav.Link>
            <NavDropdown title="스킨케어" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">스킨토너</NavDropdown.Item>
              <NavDropdown.Item href="#action3">
               수딩젤
              </NavDropdown.Item>
            
              <NavDropdown.Item href="#action4">
                미스트
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
               세럼
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              페이스오일
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="아로마" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">SDK아로마</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               SKD수딩젤
              </NavDropdown.Item>
          
            </NavDropdown>
            <Nav.Link >Cart
             라이프케어
            </Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/') }} >
             선물세트
            </Nav.Link>
            <Nav.Link href="#">
             리뷰
            </Nav.Link>
            <Nav.Link href="#" >
          장바구니
            </Nav.Link>
          </Nav>
          { <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          
            <Button variant="outline-success">🔍</Button>
          </Form> }

        </Navbar.Collapse>
    </Navbar>

    <Routes>
  <Route path="/" element={
<>
<div className="main-bg"></div>
<div class="container text-center">
  <div class="row">
  { Shoes.map((a, i)=>{
      return (
        <Card Shoes={Shoes[i]} i={i}></Card>)
      })}
  </div>
</div>
</>
  }/>
  
    <Route path="/detail" element={<Detail shoes={Shoes} />} /> 

    <Route path="/about" element={<About/>}>
    <Route path="member" element={<div>멤버</div>}/>
    <Route path="location" element={<div>회사 위치정보</div>}/>
    </Route>

    <Route path="*" element={<div>404페이지는 없는 페이지입니다.</div>}/>

    <Route path="/Event" element={<Event/>}>
    <Route path="one" element={<p>첫주문시 양배추츱 서비스</p>}/>
    <Route path="two" element={<p>생일기념 쿠폰받기</p>}/>

</Route>
    </Routes>
  


    
</div>

  );
}
function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return(
    <div>
    <h4>회사소개 정보</h4>
    <hr></hr>
    <p>1995년 창사 이래 생활 공예 완제품 및 재료 개발에 힘써온 당사는 1997년 법인 설립을


기점으로 국내 유수업체에 다양한 생활용품을 공급하며, <p>제품 관리의 노하우를


축척해 왔습니다. 2004년 초 다년간의 소싱 경험과 현지의 인적, 기술적 자원을 기반


으로 중국현지 법인 LIVING CHINA를 설립하여, 현대인의 수요에 적합하며 기능성을

접목한 제품을 생산, 해외 시장에서 선풍적인 인기를 모으고 있습니다.</p>


<p>특히 제품의 안정성, 내구성, 환경보호에 관련하여 유럽(EU) 규격의 EN71, CE마크,

미국의 CA117 인증 획득으로 유럽각국, 미국, 일본 등에 수출이 진행 중인바, 국제적인

검증을 통과한 최고의 품질의 제품으로 국내의 소비자를 만족 시켜 드리고자

최선을 다할 것입니다.</p>
    </p>
    <Outlet></Outlet>
    <img src="/mapinfo1.1.jpg" alt="지도"/>
    
    </div>
  )
}


function Card(props) {
  return (
        <div class="col">
        <img src="/2.jpeg" alt="Sbottle"/>
        <h4>{props.Shoes.title}</h4>
        <p>{props.Shoes.price}</p>
        </div>
  )  
}
export default NavScrollExample;


