import { Box, Button, Input, Label } from '@twilio-paste/core';
import { useState } from 'react';

export const NewItemForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const isValid = () => {
    if (!name) return false;
    if (!price.length) return false;
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(name, price,quantity);
    }

    setName('');
    setPrice(0);
    setQuantity(1)
  };

  return (
    <Box marginBottom="space80">
      <form onSubmit={handleSubmit}>
        <Box marginBottom="space80">
          <Label htmlFor="item-name">Tên sản phẩm</Label>
          <Input
            id="item-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Box>
        <Box marginBottom="space80">
          <Label htmlFor="item-price">Giá</Label>
          <Input
            id="item-price"
            type="number"
            insertBefore={<div>VNĐ</div>}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </Box>
        <Box marginBottom="space80">
          <Label htmlFor="item-price">Số lượng</Label>
          <Input
            id="item-price"
            type="number"
            insertBefore={<div>Cái</div>}
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </Box>
        <Button
          disabled={!isValid()}
          onClick={handleSubmit}
          type="submit"
          fullWidth
          variant="primary"
        >
          🍳 Thêm vào đơn
        </Button>
      </form>
    </Box>
  );
};

