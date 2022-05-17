import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card as CardMUI } from 'components';
import { LabelStyled, ValueStyled, CardContentStyled } from './style';

function Card({ value, label, color }) {
  return (
    <CardMUI>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardMUI>
  );
}

export default memo(Card);
