import { useFetcher } from 'react-router-dom';
import Buttons from '../../ui/Buttons';
import { updateOrder } from '../../services/apiRestaurant';
function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Buttons type="primary">Make priority</Buttons>
    </fetcher.Form>
  );
}

export default UpdateOrder;
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
