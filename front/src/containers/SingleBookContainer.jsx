import React from "react";
import SingleBook from "../components/SingleBook";
import { connect } from "react-redux";

const mapStateToProps = ({ book }) => ({
  book: book.selected
});

export default connect(mapStateToProps)(SingleBook);

// export default class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       book: {
//         titulo: "Todo es posible...menos tu",
//         autor: "Noe Casado",
//         descripcion:
//           "Una vida organizada, un trabajo seguro, un ático de lujo y un novio de buena familia… Todo parece ir a las mil maravillas, sin embargo, Fabiola siente que algo falla. Hastiada de que todo en torno a ella acabe siendo tan cuadriculado, se arma de valor y acaba haciendo algo que hasta no hace mucho le parecía impensable: tener un rollo de una sola noche. Y a partir de ese instante comienza a ver las cosas de otro modo. Su trabajo ya no es tan seguro. Su novio es un imbécil y su vida necesita oxígeno. Y los rollos de una noche… realmente merecen la pena.",
//         imgUrl:
//           "https://assets.espaebook2.com/b/Noe%20Casado/Todo%20es%20posible_.%20menos%20tu%20(229)/big.jpg",
//         precio: "$300",
//         rating: "3 estrellas"
//       }
//     };
//   }

//   render() {
//     return (
//       <div>
//         <SingleBook
//           nombre={this.state.book.titulo}
//           autor={this.state.book.autor}
//           descripcion={this.state.book.descripcion}
//           imgUrl={this.state.book.imgUrl}
//           precio={this.state.book.precio}
//           rating={this.state.book.rating}
//         />
//       </div>
//     );
//   }
// }
