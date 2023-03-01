import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import americanoSlice from "./americanoSlice";
import { Button } from '@mui/material';
import styled from "styled-components";
import { GoHomeBtn } from '../waffle/Waffle';

const Container = styled.div`
  width: 100vw;
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

const Americano = () => {
  const dispatch = useDispatch();
  const americanoStock = useSelector(state => state.americano);
  const navigate = useNavigate();

  return (
    <Container>
    <GridContainer>
      <div>
        <ProductImg src={process.env.PUBLIC_URL + "/image/coffee.jpg"} />
      </div>
      <div>
        <FelxContainer>
          <h1 style={{ display: "inline-block" }}>와플🧇</h1>
          <p>남은 개수 : {americanoStock}개</p>
          <Button variant="outlined"
            onClick={() => {
              dispatch(americanoSlice.actions.orderAmericano());
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

export default Americano;
