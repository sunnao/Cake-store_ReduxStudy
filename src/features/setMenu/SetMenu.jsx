import { useSelector, useDispatch } from 'react-redux';

const SetMenu = () =>{
  const dispatch = useDispatch();
  const allStock = useSelector(state => state);
  console.log(allStock)
  const orderSetMenu = (state)=>{
    state.cakeReducer-1;
    state.waffleReducer-1;
    state.americanoReducer-1;
  }
  return (
    <>
      <button
        onClick={() => {
          dispatch(orderSetMenu());
        }}
      >
        세트메뉴 주문하기
      </button>
      
    </>
  )
}

export default SetMenu;

