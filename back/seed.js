const { Book, Genre, Author } = require("./models/index");

Promise.all([
  Book.create({
    titulo: "Titanic",
    precio: 125,
    estrellas: 8,
    descripcion: "bls bls bls",
    visible: true,
    stock: 21
  }),
  Genre.findOrCreate({ where: { nombre: "terror" } }),
  Author.findOrCreate({ where: { nombre: "Lisandro Latorre" } })
])
  .then(([newBook, genre, author]) => {
    newBook.addGenre(genre[0]);
    newBook.setAuthor(author[0]);
  })
  .catch(console.log);

Promise.all([
  Book.create({
    titulo: "El precio de la pasion",
    precio: 155,
    url:
      "https://http2.mlstatic.com/el-precio-de-la-pasion-libro-gabriel-rolon-D_NQ_NP_807564-MLA32281897159_092019-O.webp",
    estrellas: 4,
    descripcion: "bls bls bls",
    visible: true,
    stock: 25
  }),
  Genre.findOrCreate({ where: { nombre: "terror" } }),
  Author.findOrCreate({ where: { nombre: "Gabriel Rolon" } })
])
  .then(([newBook, genre, author]) => {
    newBook.addGenre(genre[0]);
    newBook.setAuthor(author[0]);
  })
  .catch(console.log);
Promise.all([
  Book.create({
    titulo: "La Voz Ausente",
    precio: 155,
    url:
      "https://http2.mlstatic.com/la-voz-ausente-gabriel-rolon-D_NQ_NP_954423-MLA28553674908_112018-O.webp",
    estrellas: 7,
    descripcion: "bls bls bls",
    visible: true,
    stock: 25
  }),
  Genre.findOrCreate({ where: { nombre: "drama" } }),
  Author.findOrCreate({ where: { nombre: "Gabriel Rolon" } })
])
  .then(([newBook, genre, author]) => {
    newBook.addGenre(genre[0]);
    newBook.setAuthor(author[0]);
  })
  .catch(console.log);

function addBooks({
  titulo,
  precio,
  estrellas,
  descripcion,
  visible,
  stock,
  autor,
  genre1,
  genre2 = null,
  genre3 = null
}) {
  Promise.all(
    [
      Book.create({
        titulo,
        precio,
        estrellas,
        descripcion,
        visible,
        stock
      }),
      Author.findOrCreate({ where: { nombre: autor } }),
      Genre.findOrCreate({ where: { nombre: genre1 } })
    ]
      .concat([genre2 ? Genre.findOrCreate({ where: { nombre: genre2 } }) : []])
      .concat([genre3 ? Genre.findOrCreate({ where: { nombre: genre3 } }) : []])
  )
    .then(([newBook, author, genre1, genre2, genre3]) => {
      newBook.addGenre(genre1[0]);
      genre2 ? newBook.addGenre(genre2[0]) : null;
      genre3 ? newBook.addGenre(genre3[0]) : null;
      newBook.setAuthor(author[0]);
    })
    .catch(console.log);
}
const libro1 = {
  titulo: "Titanic",
  precio: 125,
  estrellas: 8,
  descripcion: "bls bls bls",
  visible: true,
  stock: 21,
  autor: "Lisandro Latorre",
  genre1: "terror"
};
const libro2 = {
  titulo: "Libro sin Nombre",
  precio: 123,
  estrellas: 5,
  descripcion: "yada yada yada",
  visible: true,
  stock: 12,
  autor: "Pepe",
  genre1: "drama",
  genre2: "comedia",
  genre3: "aventuras"
};
addBooks(libro1);
addBooks(libro2);

/* Promise.all([
  Book.create({
    titulo: "La Voz Ausente",
    precio: 155,
    url:
      "https://http2.mlstatic.com/la-voz-ausente-gabriel-rolon-D_NQ_NP_954423-MLA28553674908_112018-O.webp",
    estrellas: 7,
    descripcion: "bls bls bls",
    visible: true,
    stock: 25
  }),
  Genre.findOrCreate({ where: { nombre: "drama" } }),
  Author.findOrCreate({ where: { nombre: "Gabriel Rolon" } })
])
  .then(([newBook, genre, author]) => {
    newBook.addGenre(genre[0]);
    newBook.setAuthor(author[0]);
  })
  .catch(console.log); */

/* Genre.create({ nombre: "terror" }).then(newGenre =>
    newBook.addGenre(newGenre)
  ); */

/* Book.create(
  {
    titulo: "El precio de la pasion",
    precio: 125,
    url:
      "https://http2.mlstatic.com/el-precio-de-la-pasion-libro-gabriel-rolon-D_NQ_NP_807564-MLA32281897159_092019-O.webp",
    author: {
      nombre: "Gabriel Rolon"
    },
    estrellas: 4,
    descripcion: "bls bls bls",
    visible: true,
    stock: 21
  },
  {
    include: [
      {
        association: Book.belongsTo(Author)
      }
    ]
  }
).then(newBook => {
  Genre.create({ nombre: "terror" }).then(newGenre =>
    newBook.addGenre(newGenre)
  );
}); */

/* Book.bulkCreate([
  
  1
  {
    titulo: "Titanic",
    precio: 125,
    autor: "Lisandro Latorre",
    estrellas: 8,
    descripcion: "bls bls bls",
    visible: true,
    stock: 21
  },


2
  {
    titulo: "El precio de la pasion",
    precio: 125,
    autor: "Gabriel Rolon",
    url:
      "https://http2.mlstatic.com/el-precio-de-la-pasion-libro-gabriel-rolon-D_NQ_NP_807564-MLA32281897159_092019-O.webp",
    estrellas: 4,
    descripcion: "bls bls bls",
    visible: true,
    stock: 21
  },

  3
  {
    titulo: "Basta de amores de mierda",
    precio: 125,
    autor: "Gonzalo Romero",
    url:
      "https://http2.mlstatic.com/libro-basta-de-amores-de-mierda-D_NQ_NP_842782-MLA31693448611_082019-O.webp",
    estrellas: 3,
    descripcion: "bls bls bls",
    visible: true,
    stock: 21
  },

  4
  {
    titulo: "Curame",
    precio: 125,
    autor: "Lorena Pronsky",
    url:
      "https://http2.mlstatic.com/curame-libro-lorena-pronsky-D_NQ_NP_688719-MLA32229369912_092019-O.webp",
    estrellas: 8,
    descripcion: "bls bls bls",
    visible: true,
    stock: 21
  },

  5
  {
    titulo: "Arde la vida",
    precio: 125,
    autor: "Magali Tajes",
    url:
      "https://http2.mlstatic.com/pack-arde-la-vida-y-caos-2-libros-magali-tajes-D_NQ_NP_775261-MLA31030796306_062019-O.webp",
    estrellas: 7,
    descripcion: "bls bls bls",
    visible: true,
    stock: 21
  },

  6
  {
    titulo: "Equilibrio",
    precio: 125,
    autor: "Daniel Lopez Rosetti",
    url:
      "https://images-na.ssl-images-amazon.com/images/I/514CVwOrybL._SX333_BO1,204,203,200_.jpg",
    estrellas: 8,
    descripcion: "bls bls bls",
    visible: true,
    stock: 21
  },

  7
  {
    titulo: "Delicias Keto",
    precio: 125,
    autor: "Camila Kost",
    url:
      "https://http2.mlstatic.com/equilibrio-libro-daniel-lopez-rosetti-D_NQ_NP_869579-MLA31618389981_072019-O.webp",
    estrellas: 1,
    descripcion: "bls bls bls",
    visible: true,
    stock: 21
  },

  8
  {
    titulo: "1984",
    precio: 125,
    autor: "George Orwell",
    url:
      "https://images-na.ssl-images-amazon.com/images/I/514CVwOrybL._SX333_BO1,204,203,200_.jpg",
    estrellas: 2,
    descripcion: "bls bls bls",
    visible: true,
    stock: 21
  },

  9
  {
    titulo: "Libro De Astrología Y Sexualidad Astro Kamasutra",
    precio: 125,
    url:
      "https://http2.mlstatic.com/libro-de-astrologia-y-sexualidad-astro-kamasutra-D_NQ_NP_900020-MLA32209504396_092019-F.webp",
    estrellas: 2,
    descripcion: "bls bls bls",
    visible: true,
    stock: 21
  }
]);
*/
