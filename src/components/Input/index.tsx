import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...props }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input type="text" {...props} />
    </Container>
  );
};

export default Input;
