import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { orderWaffle } from "./waffleSlice.js";
import { Button } from '@mui/material';
import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  margin: 50px auto;
`;

const GridContainer = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: 400px 400px;
`;
const ProductImg = styled.img`
  width: 100%;
  object-fit: fill;
  border-radius: 7px;
  margin-top: 10px;
`;
const FelxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    align-self: flex-start;
    margin: 50px 50px;
  }
  p{
    align-self: flex-end;
    margin-right: 50px;
    margin-top: 150px;
  }
  button {
    align-self: flex-end;
    margin-right: 50px;
    margin-top: 30px;
  }
`;
export const GoHomeBtn =styled.button`
  background-color: #1976de;
  border : none;
  height: 35px;
  width: 100px;
  border-radius :5px;
  color : white;
  font-weight: bold;
  :hover{
    opacity: 0.8;
  }
  :active{
    background-color : #12246c;
  }
`

const Waffle = () => {
  const dispatch = useDispatch();
  const waffleStock = useSelector(state => state.waffleReducer);
  const navigate = useNavigate();

  return (
    // <>
    // <h1>
    //   남은 와플 갯수 : {waffleStock}
    // </h1>
    // <button onClick={()=>{dispatch(orderWaffle())}}>주문하기</button>
    // <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
    // </>
    //------------------------------
    <Container>
      <GridContainer>
        <div>
          <ProductImg src={process.env.PUBLIC_URL + "/image/waffle.jpg"} />
        </div>
        <div>
          <FelxContainer>
            <h1 style={{ display: "inline-block" }}>와플🧇</h1>
            <p>남은 개수 : {waffleStock}개</p>
            <Button variant="outlined"
              onClick={() => {
                dispatch(orderWaffle());
              }}
            >
              1개 주문하기
            </Button>
          </FelxContainer>
        </div>
      </GridContainer>
      <GoHomeBtn onClick={() => { navigate("/");}}>
            홈으로 가기
          </GoHomeBtn>
    </Container>
  );
};

export default Waffle;
