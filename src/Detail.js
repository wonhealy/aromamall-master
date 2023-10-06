import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useEffect ,useState } from " react " ;

let SalePrice = styled.span`
margin-right:${(props) => props.spacing+'1.5em'};
color: ${props => props.spacing=='white' ? 'red':'white'}
padding: 20px;
font-weight:bold;
font-size: 15px;
color:   color: #555555;
`;
function Detail(props) {

 useEffect(()=>{

 })
  let [count, setCount] = useState(0);
  let {id} = useParams();
  let spacing = 20;
    return (
   
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="15.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">100%퓨어 천연 베티버 아로마 오일 10ml
          <span class="icon"> </span> </h4>
          <hr></hr>
          <SalePrice>
          <p SalePrice spacing> 판매가<span>22,000</span></p> 
          <p>배송방법<span>3,000(30,000 원 이상 구매 시 무료)</span></p> 
          <p>배송비<span> 3000 </span></p> 
          <p>적립금 <span>220</span></p> 
          <p></p>
          </SalePrice>
          <span><button className="btn btn-secondary">장바구니</button> <button className="btn btn-light">바로구매하기</button> 
          </span>
        </div>
      </div>
    </div>
    
    )
}
export default Detail;