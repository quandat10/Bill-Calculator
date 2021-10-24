import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Input,
  Label
} from '@twilio-paste/core';

import { toCurrency } from '../utilities';
export const MenuItem = (props) => {
  const {
    uuid,
    name,
    price,
    quantity,
    total,
    updatePrice = () => {},
    updateQuantity = () => {},
    remove = () => {}
  } = props;
  return (
    <Card marginTop="space40">
      <Heading variant="heading30" as="h3">
        {name}
      </Heading>
      <Flex>
        <Box padding="space20">
          <Label htmlFor={`$item-${uuid}-price`}>Giá</Label>
          <Input
            id={`$item-${uuid}-price`}
            insertBefore={<div>VND</div>}
            value={price}
            type="number"
            onChange={(event) => {
              if (event.target.value === '') {
                event.target.value = 0;
                return updatePrice(0);
              }
              return updatePrice(event.target.value);
            }}
          />
        </Box>
        <Box padding="space20">
          <Label htmlFor={`$item-${uuid}-quantity`}>Số lượng</Label>
          <Input
            id={`$item-${uuid}-quantity`}
            value={quantity}
            type="number"
            insertBefore={<div>Cái</div>}

            onChange={(event) => {
              if (event.target.value === '') {
                event.target.value = 0;
                return updateQuantity(0);
              }
              return updateQuantity(event.target.value);
            }}
          />
        </Box>
        <Box padding="space20" textAlign="right" width="100%">
          <Heading variant="heading50">Tổng</Heading>
          {toCurrency(total)}
        </Box>
      </Flex>
      <Box width="100%" textAlign="right">
        <Button variant="destructive_secondary" size="small" onClick={remove}>
          Xoá
        </Button>
      </Box>
    </Card>
  );
};

export default MenuItem;
