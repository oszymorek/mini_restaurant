import { useDispatch } from 'react-redux';
import Buttons from '../../ui/Buttons';
import { deleteItem } from './cartSlice';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Buttons type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
        Delete
      </Buttons>
    </div>
  );
}
