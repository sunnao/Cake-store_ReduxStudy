import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import americanoSlice from '../../features/americano/americanoSlice';
import { addWaffleStock } from '../../features/waffle/waffleSlice';
import { addCakeStock } from '../../features/cake/cakeSlice';
import { Button} from '@mui/material';
import styled from 'styled-components';
import { Container, GoHomeBtn } from '../../features/waffle/Waffle';

const GridContainer =styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-template-rows: 300px;
  grid-column-gap: 10px;
  place-items: center;
  input{
    height: 30px;
    border: 1px solid grey;
    border-radius: 5px ;
    margin-right: 3px;

  }
`

const Admin=()=>{
  const navigate=useNavigate();
  const dispatch = useDispatch();
  // americanoSlice.actions.addStock()
  let[addWaffle, setAddWaffle]=useState("");
  let[addCake, setAddCake]=useState("");
  let[addAme, setAddAme]=useState("");
  
  return(
    <Container>
     <h1>재고 추가하기</h1>
      <GridContainer>
        
        <div>
        <h2>와플 추가</h2>
        <input type="number" value={addWaffle} placeholder="수량을 입력해주세요" onChange={(e)=>{setAddWaffle(parseInt(e.target.value))}} />
        <Button variant="contained" disableElevation onClick={()=>{
          dispatch(addWaffleStock(addWaffle));
          alert(`${addWaffle}개 추가되었습니다.`);
          setAddWaffle("");
        }}>추가</Button>
      </div>
      <div>
        <h2>케이크 추가</h2>
        <input type="number" value={addCake} placeholder="수량을 입력해주세요" onChange={(e)=>{setAddCake(parseInt(e.target.value))}}></input>
        <Button variant="contained" disableElevation Click={()=>{
          dispatch(addCakeStock(addCake));
          alert(`${addCake}개 추가되었습니다.`);
          setAddCake("");
        }}>추가</Button>
      </div>
      <div>
        <h2>아메리카노 추가</h2>
        <input type="number" value={addAme} placeholder="수량을 입력해주세요" onChange={(e)=>{setAddAme(parseInt(e.target.value))}}></input>
        <Button variant="contained" disableElevation Click={()=>{
          dispatch(americanoSlice.actions.addStock(addAme));
          alert(`${addAme}개 추가되었습니다.`);
          setAddAme("");
        }}>추가</Button>
      </div>
      </GridContainer>
      <GoHomeBtn onClick={()=>{navigate("/")}}>홈으로 가기</GoHomeBtn>
    </Container>
  )
}

export default Admin;