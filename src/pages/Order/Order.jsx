import { useParams } from 'react-router-dom';
import Waffle from '../../features/waffle/Waffle';
import Cake from '../../features/cake/Cake';
import Americano from '../../features/americano/Americano';
import SetButton from '../../features/setMenu/SetButton';



const Order =()=>{
  const { menu } = useParams();
    if(menu === "waffle"){
      return <Waffle />
    }
    if (menu === "cake"){
      return <Cake />
    }
    if (menu === "americano"){
      return <Americano />
    }
    if (menu === "setmenu"){
      return <SetButton />
    }
  
}

export default Order ;