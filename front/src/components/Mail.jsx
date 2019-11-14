import React from "react";
import { Email, Item, Span, Image, Box } from "react-html-email";

export default ({ name, cart }) => {
  return (
    <Email title="Gracias por tu compra!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!">
      <Item align="center">
        <Span fontSize={20}>Hola {name}.</Span>
      </Item>
      <Box
        cellSpacing={20}
        width="100%"
        style={{
          borderTop: "3px solid black",
          borderBottom: "3px solid black"
        }}
      >
        <Item align="center">
          <Span color="gray" lineHeight={20}>
            Este es el detalle de tu compra:
          </Span>
        </Item>
        <Span>
          {Object.values(cart).map((i, index) => (
            <Item align="center" key={index}>
              #{i[2]}
            </Item>
          ))}
        </Span>
      </Box>

      <Item align="center">
        <Span>
        En las proximas 48 hs vas a recibirlo en tu domicilio.
        </Span>
        <Span>
        Que tengas un buen dia.
        </Span>
      
      </Item>
      <Box align="center"
      cellSpacing={20}
      width="100%">
      <Image
        
        data-mc-bar="bar"
        data-mc-baz="baz"
        alt="react"
        src="https://www.elcolombiano.com/documents/10157/0/580x365/0c0/0d0/none/11101/NVMT/image_content_33438078_20190517065040.jpg"
        width={300}
        height={200}
      />      
      </Box>   

      
    </Email>
  );
};
