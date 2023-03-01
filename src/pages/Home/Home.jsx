import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { Box, Button } from '@mui/material';

const Container = styled.div`
  width: 100vw;
  margin: auto;
`;

const PaperContainer = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: 400px 400px;
  grid-template-rows: 400px 400px;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const ProductImg=styled.img`
  height:60%;
  width: 80%;
  object-fit:cover;
  border-radius: 7px;
  margin-top: 10px;
`

const Home = () => {
  const store = useSelector(state => state);
  console.log(store);

  return (
    <Container>
      <h1>주문할 메뉴를 선택해 주세요</h1>
      <PaperContainer>
        <Link to="/order/waffle" style={{ textDecoration: "none" }}>
          <Paper sx={{ height: 400 }} elevation={6}>
            <ProductImg src={process.env.PUBLIC_URL + "/image/waffle.jpg"}/>
            <h1 style={{ display: "block" }}>와플🧇</h1>
            <div> 남은 개수 : {store.waffleReducer}</div>
          </Paper>
        </Link>

        <Link to="/order/cake" style={{ textDecoration: "none" }}>
          <Paper sx={{ height: 400 }} elevation={6}>
            <ProductImg src={process.env.PUBLIC_URL + "/image/cake.jpg"}/>
            <h1 style={{ display: "block" }}>케이크🍰</h1>
            <div> 남은 개수 : {store.cakeReducer}</div>
          </Paper>
        </Link>

        <Link to="/order/americano" style={{ textDecoration: "none" }}>
          <Paper sx={{ height: 400 }} elevation={6}>
            <ProductImg src={process.env.PUBLIC_URL + "/image/coffee.jpg"}/>
            <h1 style={{ display: "block" }}>아메리카노☕</h1>
            <div> 남은 개수 : {store.americano}</div>
          </Paper>
        </Link>

        <Link to="/order/setmenu" style={{ textDecoration: "none" }}>
          <Paper sx={{ height: 400 }} elevation={6}>
            <ProductImg src={process.env.PUBLIC_URL + "/image/combo.jpg"}/>
            <h1 style={{ display: "block" }}>세트메뉴🍽️</h1>
          </Paper>
        </Link>
      </PaperContainer>
      <Box clone pt={3}>
      <Link to="/admin" style={{ textDecoration: "none" }}>
        <Button variant="outlined">재고 채우러가기</Button>
      </Link>
      </Box>
    </Container>
  );
};
export default Home;
