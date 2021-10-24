import { Stack } from '@twilio-paste/stack';
import SummaryLine from './SummaryLine';
import { toCurrency } from '../utilities';

export const Summary = ({ subtotal, tipAmount, total }) => {
  return (
    <Stack orientation="vertical" spacing="space30">
      <SummaryLine title="Tổng giá">{toCurrency(subtotal)}</SummaryLine>
      <SummaryLine title="Giá được giảm">{toCurrency(tipAmount)}</SummaryLine>
      <SummaryLine title="Thanh toán ">{toCurrency(total)}</SummaryLine>
    </Stack>
  );
};
