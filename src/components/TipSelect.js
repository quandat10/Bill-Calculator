import { Box, Label, Option, Select, Input } from '@twilio-paste/core';

export const TipSelect = ({ tipPercentage, updateTip = () => {} }) => {
  return (
    <Box marginY="space20">
      <Label
        style={{ marginTop: '10px', marginBottom: '10px' }}
        htmlFor="tip-amount"
      >
        <p>Bạn muốn giảm bao nhiêu % tổng hoá đơn</p>
      </Label>
      <Input
        id="item-name"
        type="text"
        value={tipPercentage}
        insertBefore={<div>%</div>}
        onChange={(event) => {
          if (event.target.value === '') {
            event.target.value = 0;
            return updateTip(0);
          }
          return updateTip(event.target.value);
        }}
      />
      <p/>
      <hr />
      {/* <Select
        id="tip-amount"
        value={tipPercentage}
        onChange={(event) => updateTip(event.target.value)}
      >
        <Option value="15">15%</Option>
        <Option value="20">20%</Option>
        <Option value="25">25%</Option>
      </Select> */}
    </Box>
  );
};

export default TipSelect;
