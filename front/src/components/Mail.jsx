import React from 'react';
import { Email, Item, A} from 'react-html-email';

export default ({name, children}) => {
  return (
  <Email title='link'>
    <Item>
       Hello  {name}  Gracias por tu compra!!
    </Item>
    <Item>
      {children}
    </Item>
  </Email>
)};