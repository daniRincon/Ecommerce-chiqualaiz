import React from "react";
import { Email, Item, Span, Image, Box } from "react-html-email";

export default ({ name, children }) => {
  return (
    // <Email title='link'>
    //   <Item>
    //      Hello  {name}  Gracias por tu compra!!
    //   </Item>
    //   <Item>
    //     {children}
    //   </Item>
    // </Email>
    <Email title="Gracias por tu compra!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!">
      <Item align="center">
        <Span fontSize={20}>
          Hola {name}.
          </Span>
          </Item>
          <Box cellSpacing={20} width="100%" style={{ borderTop: '3px solid black' }}>
          <Item>
          Tu compra fue realizada correctamente, en las proximas 48 hs te
          enviaremos el pedido.
          </Item>
          <Item>
          Que tengas un buen dia.
          </Item>  
          </Box>       
          <Image
            data-mc-bar="bar"
            data-mc-baz="baz"
            alt="react"
            src="https://www.elcolombiano.com/documents/10157/0/580x365/0c0/0d0/none/11101/NVMT/image_content_33438078_20190517065040.jpg"
            width={300}
            height={200}
          />        
      
    </Email>
  );
};
