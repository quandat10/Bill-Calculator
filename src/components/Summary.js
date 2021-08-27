import { Stack } from '@twilio-paste/stack';
import SummaryLine from './SummaryLine';
import { toCurrency } from '../utilities';

export const Summary = ({ subtotal, tipAmount, total }) => {
  return (
    <Stack orientation="vertical" spacing="space30">
      <SummaryLine title="Subtotal">{toCurrency(subtotal)}</SummaryLine>
      <SummaryLine title="Tip Amount">{toCurrency(tipAmount)}</SummaryLine>
      <SummaryLine title="Total">{toCurrency(total)}</SummaryLine>
    </Stack>
  );
};
