const { Book, Genre, Author } = require("./models/index");

//Esta función recibe un JSON con los contenidos de cada libro, el autor del mismo y hasta 3 géneros (mínimo 1)

function addBooks({
  titulo,
  precio,
  url,
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
        url,
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
const libros = [
  (libro1 = {
    titulo: "The Lord of the Rings",
    precio: 15.99,
    url:
      "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg",
    estrellas: 10,
    descripcion: `"An extraordinary work -- pure excitement." -- New York Times Book Review
 
    One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them
    
    In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.
    
    From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings, but always he searched for the One Ring that would complete his dominion.
    
    When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom.
    
    The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.`,
    visible: true,
    stock: 21,
    autor: "J.R.R. Tolkien",
    genre1: "Fantasy",
    genre2: "Classics",
    genre3: "Fiction"
  }),
  (libro2 = {
    titulo: "Libro sin Nombre",
    precio: 12.56,
    estrellas: 5,
    descripcion: "No disponible",
    visible: true,
    stock: 12,
    genre1: "Science"
  }),
  (libro3 = {
    titulo: "Harry Potter and the Goblet of Fire: The Illustrated Edition",
    precio: 28.79,
    url:
      "https://images-na.ssl-images-amazon.com/images/I/61Me3ePpM9L._SX421_BO1,204,203,200_.jpg",
    estrellas: 9,
    descripcion: `The fourth book in the beloved Harry Potter series, now illustrated in glorious full color by award-winning artist Jim Kay.

    Harry Potter wants to get away from the pernicious Dursleys and go to the International Quidditch Cup with Hermione, Ron, and the Weasleys. He wants to dream about Cho Chang, his crush (and maybe do more than dream). He wants to find out about the mysterious event involving two other rival schools of magic, and a competition that hasn't happened for a hundred years. He wants to be a normal, fourteen-year-old wizard. Unfortunately for Harry Potter, he's not normal - even by wizarding standards. And in this case, different can be deadly.
    
    With dazzling illustrations from Jim Kay, this new fully illustrated edition of the complete and unabridged text of Harry Potter and the Goblet of Fire is sure to delight fans and first-time readers alike.`,
    visible: true,
    stock: 34,
    autor: "J. K. Rowling",
    genre1: "Adventure",
    genre2: "Fantasy"
  }),
  (libro4 = {
    titulo: "Home Truths",
    precio: 10.99,
    url:
      "https://images-na.ssl-images-amazon.com/images/I/41QaWHri9zL._SX331_BO1,204,203,200_.jpg",
    estrellas: 8,
    descripcion: `A strong marriage can cope with the unexpected. But can it survive the unimaginable?

    American nanny Eleanor was never meant to meet Alex. But when she walks into his London police station to report a stalker, everything changes for them both. He’s convinced he can protect her from anything and anyone. She hopes her darkest days are behind her.`,
    visible: true,
    stock: 1,
    autor: "Tina Seskis",
    genre1: "Psychological Fiction"
  }),
  (libro5 = {
    titulo: "The Way of Kings: Book One of The Stormlight Archive",
    precio: 14.97,
    url:
      "https://images-na.ssl-images-amazon.com/images/I/618G6ty3o1L._SX342_.jpg",
    estrellas: 9,
    descripcion: `Widely acclaimed for his work completing Robert Jordan's Wheel of Time saga, Brandon Sanderson now begins a grand cycle of his own, one every bit as ambitious and immersive.

    Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter.
    
    It has been centuries since the fall of the 10 consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Wars were fought for them, and won by them. One such war rages on the Shattered Plains. There, Kaladin has been reduced to slavery. In a war that makes no sense, where 10 armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable.
    
    Brightlord Dalinar Kholin commands one of those other armies. Like his brother, the late king, he is fascinated by an ancient text called The Way of Kings. Troubled by visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity.
    
    Across the ocean, an untried young woman named Shallan seeks to train under an eminent scholar and notorious heretic, Dalinar's niece, Jasnah. Though she genuinely loves learning, Shallan's motives are less than pure. As she plans a daring theft, her research for Jasnah hints at secrets of the Knights Radiant and the true cause of the war.`,
    visible: true,
    stock: 27,
    autor: "Brandon Sanderson",
    genre1: "High Fantasy"
  }),
  (libro6 = {
    titulo: "The Guardians: A Novel",
    precio: 17.99,
    url: "https://images-na.ssl-images-amazon.com/images/I/51U2hIUQgqL.jpg",
    estrellas: 9,
    descripcion: `In this instant #1 New York Times bestseller, John Grisham delivers a classic legal thriller—with a twist.

    “Terrific…affecting…Grisham has done it again.”—Maureen Corrigan, The Washington Post
     
    “A suspenseful thriller mixed with powerful themes.”—Associated Press
    
    
    In the small Florida town of Seabrook, a young lawyer named Keith Russo was shot dead at his desk as he worked late one night. The killer left no clues. There were no witnesses, no one with a motive. But the police soon came to suspect Quincy Miller, a young black man who was once a client of Russo’s. 
    
    Quincy was tried, convicted, and sent to prison for life. For twenty-two years he languished in prison, maintaining his innocence.  But no one was listening.  He had no lawyer, no advocate on the outside. In desperation, he writes a letter to Guardian Ministries, a small nonprofit run by Cullen Post, a lawyer who is also an Episcopal minister.
    
    Guardian accepts only a few innocence cases at a time.  Cullen Post travels the country fighting wrongful convictions and taking on clients forgotten by the system. With Quincy Miller, though, he gets far more than he bargained for. Powerful, ruthless people murdered Keith Russo, and they do not want Quincy Miller exonerated.
    
    They killed one lawyer twenty-two years ago, and they will kill another without a second thought.`,
    visible: true,
    stock: 36,
    autor: "John Grisham",
    genre1: "Mystery",
    genre2: "Thriller",
    genre3: "Suspense"
  }),
  (libro7 = {
    titulo: "Thin Air (Jessica Shaw Book 1)",
    precio: 15.99,
    url: "https://images-na.ssl-images-amazon.com/images/I/41loP-2eVzL.jpg",
    estrellas: 8,
    descripcion: `A Washington Post, Wall Street Journal, and Amazon Charts bestseller.

    “Lisa Gray explodes onto the literary stage with this taut, edge-of-the-seat thriller, and her headstrong protagonist, Jessica Shaw, reminiscent of Lee Child’s Jack Reacher, delivers a serious punch.” —Robert Dugoni, New York Times bestselling author
    
    Private investigator Jessica Shaw is used to getting anonymous tips. But after receiving a photo of a three-year-old kidnapped from Los Angeles twenty-five years ago, Jessica is stunned to recognize the little girl as herself.
    
    Eager for answers, Jessica heads to LA’s dark underbelly. When she learns that her biological mother was killed the night she was abducted, Jessica’s determined to solve a case the police have forgotten. Meanwhile, veteran LAPD detective Jason Pryce is in the midst of a gruesome investigation into a murdered college student moonlighting as a prostitute. A chance encounter leads to them crossing paths, but Jessica soon realizes that Pryce is hiding something about her father’s checkered history and her mother’s death.
    
    To solve her mother’s murder and her own disappearance, Jessica must dig into the past and find the secrets buried there. But the air gets thinner as she crawls closer to the truth, and it’s getting harder and harder to breathe.`,
    visible: true,
    stock: 25,
    autor: "Lisa Gray",
    genre1: "Mystery",
    genre2: "Fiction",
    genre3: "Thriller"
  }),
  (libro8 = {
    titulo: "Alice's Adventures in Wonderland & Through the Looking-Glass",
    precio: 6.23,
    url:
      "https://images-na.ssl-images-amazon.com/images/I/51kf1eqTBbL._SX302_BO1,204,203,200_.jpg",
    estrellas: 9,
    descripcion: `In 1862 Charles Lutwidge Dodgson, a shy Oxford mathematician with a stammer, created a story about a little girl tumbling down a rabbit hole. Thus began the immortal adventures of Alice, perhaps the most popular heroine in English literature.

    Countless scholars have tried to define the charm of the Alice books—with those wonderfully eccentric characters the Queen of Hearts, Tweedledum, and Tweedledee, the Cheshire Cat, Mock Turtle, the Mad Hatter et al.—by proclaiming that they really comprise a satire on language, a political allegory, a parody of Victorian children’s literature, even a reflection of contemporary ecclesiastical history.
    
    Perhaps, as Dodgson might have said, Alice is no more than a dream, a fairy tale about the trials and tribulations of growing up—or down, or all turned round—as seen through the expert eyes of a child.`,
    visible: true,
    stock: 33,
    autor: "Lewis Carroll",
    genre1: "Classics",
    genre2: "Fantasy",
    genre3: "Fiction"
  }),
  (libro9 = {
    titulo: "Guns, Germs, and Steel: The Fates of Human Societies",
    precio: 20.54,
    url:
      "https://images-na.ssl-images-amazon.com/images/I/51c2SFXFpzL._SX327_BO1,204,203,200_.jpg",
    estrellas: 9,
    descripcion: `"Fascinating.... Lays a foundation for understanding human history."―Bill Gates

    Winner of the Pulitzer Prize, Guns, Germs, and Steel is a brilliant work answering the question of why the peoples of certain continents succeeded in invading other continents and conquering or displacing their peoples. This edition includes a new chapter on Japan and all-new illustrations drawn from the television series. Until around 11,000 BC, all peoples were still Stone Age hunter/gatherers. At that point, a great divide occurred in the rates that human societies evolved. In Eurasia, parts of the Americas, and Africa, farming became the prevailing mode of existence when indigenous wild plants and animals were domesticated by prehistoric planters and herders. As Jared Diamond vividly reveals, the very people who gained a head start in producing food would collide with preliterate cultures, shaping the modern world through conquest, displacement, and genocide.The paths that lead from scattered centers of food to broad bands of settlement had a great deal to do with climate and geography. But how did differences in societies arise? Why weren't native Australians, Americans, or Africans the ones to colonize Europe? Diamond dismantles pernicious racial theories tracing societal differences to biological differences. He assembles convincing evidence linking germs to domestication of animals, germs that Eurasians then spread in epidemic proportions in their voyages of discovery. In its sweep, Guns, Germs and Steel encompasses the rise of agriculture, technology, writing, government, and religion, providing a unifying theory of human history as intriguing as the histories of dinosaurs and glaciers.`,
    visible: true,
    stock: 47,
    autor: "Jared Diamond Ph.D.",
    genre1: "History",
    genre2: "Nonfiction",
    genre3: "Science"
  }),
  (libro10 = {
    titulo: "Little House on the Prairie: Full Color Edition",
    precio: 12.31,
    url:
      "https://images-na.ssl-images-amazon.com/images/I/51BlvJuPBdL._SX331_BO1,204,203,200_.jpg",
    estrellas: 9,
    descripcion: `Based on the real-life adventures of Laura Ingalls Wilder, Little House on the Prairie is the third book in the award-winning Little House series, which has captivated generations of readers. This edition features Garth Williams’ classic art in vibrant full-color.

    Laura Ingalls and her family are heading to Kansas! Leaving behind their home in the Big Woods of Wisconsin, they travel by covered wagon until they find the perfect spot to build a little house on the prairie. Laura and her sister Mary love exploring the rolling hills around their new home, but the family must soon get to work, farming and hunting and gathering food for themselves and for their livestock. Just when the Ingalls family starts to settle into their new home, they find themselves caught in the middle of a conflict. Will they have to move again?
    
    The nine books in the timeless Little House series tell the story of Laura’s real childhood as an American pioneer, and are cherished by readers of all generations. They offer a unique glimpse into life on the American frontier, and tell the heartwarming, unforgettable story of a loving family.`,
    visible: true,
    stock: 27,
    autor: "Laura Ingalls Wilder",
    genre1: "Classics",
    genre2: "Childrens",
    genre3: "Fiction"
  })
];

addBooks(libro1);
addBooks(libro2);
addBooks(libro3);
addBooks(libro4);
addBooks(libro5);
addBooks(libro6);
addBooks(libro7);
addBooks(libro8);
addBooks(libro9);
addBooks(libro10);
