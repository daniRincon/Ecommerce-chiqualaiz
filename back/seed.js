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
    descripcion: `Lorem ipsum dolor sit amet consectetur adipiscing elit neque, vitae non fames ornare phasellus bibendum a primis, pharetra quam sapien hendrerit curae senectus venenatis. Diam lobortis nibh condimentum iaculis integer vel pretium semper sapien, curae primis platea suscipit accumsan ligula molestie quisque, interdum torquent eleifend feugiat ultrices mollis turpis parturient. Proin lectus primis arcu pharetra natoque bibendum quam est blandit ligula semper, class praesent suspendisse mus facilisi curae risus ultricies posuere.

    Nibh malesuada phasellus eros elementum suscipit feugiat ullamcorper, per neque molestie fusce lectus mauris tellus quam, tortor magnis sapien mus leo morbi. Donec proin hendrerit morbi penatibus cum tellus auctor pellentesque, sem nisi cubilia odio nibh duis sollicitudin iaculis ultrices, egestas habitant sagittis dignissim lacinia mattis consequat. Faucibus cras ornare tempor nunc aliquam accumsan felis viverra inceptos, congue curabitur etiam eu ultrices id fermentum fusce, aliquet hendrerit sagittis pharetra lacinia ligula neque laoreet.`,
    visible: true,
    stock: 12,
    autor: "Anonimo",
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
  }),
  (libro11 = {
    titulo: "What Happens in Paradise",
    precio: 18.89,
    url: "https://images-na.ssl-images-amazon.com/images/I/51zrzZa%2B0LL.jpg",
    estrellas: 7,
    descripcion: `A New York Times and Wall Street Journal Bestseller -- Secret lives and new loves emerge in the bright Caribbean sunlight, in the follow-up to Winter in Paradise
    A year ago, Irene Steele had the shock of her life: her loving husband, father to their grown sons and successful businessman, was killed in a helicopter crash. But that wasn't Irene's only shattering news: he'd also been leading a double life on the island of St. John, where another woman loved him, too.
    
    Now Irene and her sons are back on St. John, determined to learn the truth about the mysterious life -and death - of a man they thought they knew. Along the way, they're about to learn some surprising truths about their own lives, and their futures.
    
    Lush with the tropical details, romance, and drama that made Winter in Paradise a national bestseller, What Happens in Paradise is another immensely satisfying page-turner from one of American's most beloved and engaging storytellers.`,
    visible: true,
    stock: 24,
    autor: "Elin Hilderbrand",
    genre1: "Romance",
    genre2: "Fiction"
  }),
  (libro12 = {
    titulo: "The Institute: A Novel",
    precio: 16.19,
    url: "https://images-na.ssl-images-amazon.com/images/I/51TNIcVTzPL.jpg",
    estrellas: 9,
    descripcion: `From #1 New York Times bestselling author Stephen King, the most riveting and unforgettable story of kids confronting evil since It—publishing just as the second part of It, the movie, lands in theaters.

    In the middle of the night, in a house on a quiet street in suburban Minneapolis, intruders silently murder Luke Ellis’s parents and load him into a black SUV. The operation takes less than two minutes. Luke will wake up at The Institute, in a room that looks just like his own, except there’s no window. And outside his door are other doors, behind which are other kids with special talents—telekinesis and telepathy—who got to this place the same way Luke did: Kalisha, Nick, George, Iris, and ten-year-old Avery Dixon. They are all in Front Half. Others, Luke learns, graduated to Back Half, “like the roach motel,” Kalisha says. “You check in, but you don’t check out.”
    
    In this most sinister of institutions, the director, Mrs. Sigsby, and her staff are ruthlessly dedicated to extracting from these children the force of their extranormal gifts. There are no scruples here. If you go along, you get tokens for the vending machines. If you don’t, punishment is brutal. As each new victim disappears to Back Half, Luke becomes more and more desperate to get out and get help. But no one has ever escaped from the Institute.
    
    As psychically terrifying as Firestarter, and with the spectacular kid power of It, The Institute is Stephen King’s gut-wrenchingly dramatic story of good vs. evil in a world where the good guys don’t always win.`,
    visible: true,
    stock: 48,
    autor: "Stephen King",
    genre1: "Horror",
    genre2: "Fiction",
    genre3: "Thriller"
  }),
  (libro13 = {
    titulo: "Quantum: A Thriller (Captain Chase Book 1)",
    precio: 21.99,
    url:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1557910923l/40211891._SY475_.jpg",
    estrellas: 2,
    descripcion: `A USA Today, Wall Street Journal, Washington Post, and Amazon Charts bestseller.

    International bestselling author Patricia Cornwell delivers pulse-pounding thrills in the first book in a series featuring a brilliant and unusual new heroine, cutting-edge cybertechnology, and stakes that are astronomically high.
    
    On the eve of a top secret space mission, Captain Calli Chase detects a tripped alarm in the tunnels deep below a NASA research center. A NASA pilot, quantum physicist, and cybercrime investigator, Calli knows that a looming blizzard and government shutdown could provide the perfect cover for sabotage, with deadly consequences.
    
    As it turns out, the danger is worse than she thought. A spatter of dried blood, a missing security badge, a suspicious suicide—a series of disturbing clues point to Calli’s twin sister, Carme, who’s been MIA for days.
    
    Desperate to halt the countdown to disaster and to clear her sister’s name, Captain Chase digs deep into her vast cyber security knowledge and her painful past, probing for answers to her twin’s erratic conduct. As time is running out, she realizes that failure means catastrophe—not just for the space program but for the safety of the whole nation.
    
    Brilliantly crafted, gripping, and smart, Patricia Cornwell’s cliffhanger ending will keep readers wondering what’s next for Captain Calli Chase.`,
    visible: true,
    stock: 26,
    autor: "Patricia Cornwell",
    genre1: "Mystery",
    genre2: "Fiction",
    genre3: "Thriller"
  }),
  (libro14 = {
    titulo: "Spell or High Water (Magic 2.0 Book 2)",
    precio: 10.99,
    url: "https://images-na.ssl-images-amazon.com/images/I/51uVvTqdwHL.jpg",
    estrellas: 9,
    descripcion: `The adventures of an American hacker in Medieval England continue as Martin Banks takes his next step on the journey toward mastering his reality-altering powers and fulfilling his destiny.

    A month has passed since Martin helped to defeat the evil programmer Jimmy, and things couldn’t be going better. Except for his love life, that is. Feeling distant and lost, Gwen has journeyed to Atlantis, a tolerant and benevolent kingdom governed by the Sorceresses, and a place known to be a safe haven to all female time-travelers.
    Thankfully, Martin and Philip are invited to a summit in Atlantis for all of the leaders of the time-traveler colonies, and now Martin thinks this will be a chance to try again with Gwen. Of course, this is Martin Banks we’re talking about, so murder, mystery, and high intrigue all get in the way of a guy who just wants one more shot to get the girl.
    The follow-up to the hilarious Off to Be the Wizard, Scott Meyer’s Spell or High Water proves that no matter what powers you have over time and space, you can’t control rotten luck.`,
    visible: true,
    stock: 38,
    autor: "Scott Meyer",
    genre1: "Fantasy",
    genre2: "Fiction",
    genre3: "Science Fiction"
  }),
  (libro15 = {
    titulo: "Silver Road (The Shifting Tides Book 2)",
    precio: 7.99,
    url: "https://images-na.ssl-images-amazon.com/images/I/519Cch6VKrL.jpg",
    estrellas: 9,
    descripcion: `Chloe’s quest to escape the Oracle’s prophecy leads her to a magus with a secret: the eldren are not the only race to use magic in warfare. An ancient power is rediscovered, and a forgotten people will return.

    Meanwhile, cursed by his birth, Dion tries to forge a new life at sea, away from both the eldren and his former life in Xanthos, but the one thing he can’t leave behind is his heritage.
    
    Two kings on opposite sides of the ocean prepare for war.
    
    The clash of civilizations has only just begun…`,
    visible: true,
    stock: 18,
    autor: "James Maxwell",
    genre1: "Fantasy",
    genre2: "Fiction"
  }),
  (libro16 = {
    titulo: "The Days of the French Revolution",
    precio: 29.99,
    url:
      "https://images-na.ssl-images-amazon.com/images/I/51t2LGqifbL._SX335_BO1,204,203,200_.jpg",
    estrellas: 8,
    descripcion: `Works from Les Misirables by Victor Hugo to Citizens by Simon Schama have been inspired by the French Revolution. Now available for the first time in years, The Days of the French Revolution brings to life the events that changed the future of Western civilization. As compelling as any fiction thriller, this real-life drama moves from the storming of the Bastille to the doomed court of Louis XVI, the salon of Madame Roland, and even the boudoir of Marie Antoinette. Hibbert recounts the events that swirled around Napoleon, Mirabeau, Danton, Marat, and Robespierre with eyewitness accounts and his "usual grace and flair for divulging interesting detail" (Booklist). This trade paperback edition has twenty-eight pages of black-and-white illustrations, and will be published in time for Bastille Day.`,
    visible: true,
    stock: 8,
    autor: "Christopher Hibbert",
    genre1: "History",
    genre2: "Nonfiction"
  }),
  (libro17 = {
    titulo: "Her Final Breath (Tracy Crosswhite Book 2)",
    precio: 36.98,
    url: "https://images-na.ssl-images-amazon.com/images/I/51mcyr3a8fL.jpg",
    estrellas: 9,
    descripcion: `Tracy Crosswhite returns in the second book in the page-turning series by New York Times bestselling author Robert Dugoni.

    Homicide detective Tracy Crosswhite has returned to the police force after the sensational retrial of her sister’s killer. Still scarred from that ordeal, Tracy is pulled into an investigation that threatens to end her career, if not her life.
    
    A serial killer known as the Cowboy is killing young women in cheap motels in North Seattle. Even after a stalker leaves a menacing message for Crosswhite, suggesting the killer or a copycat could be targeting her personally, she is charged with bringing the murderer to justice. With clues scarce and more victims dying, Tracy realizes the key to solving the murders may lie in a decade-old homicide investigation that others, including her captain, Johnny Nolasco, would prefer to keep buried. With the Cowboy on the hunt, can Tracy find the evidence to stop him, or will she become his next victim?`,
    visible: true,
    stock: 2,
    autor: "Robert Dugoni",
    genre1: "Mystery",
    genre2: "Fiction",
    genre3: "Thriller"
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
addBooks(libro11);
addBooks(libro12);
addBooks(libro13);
addBooks(libro14);
addBooks(libro15);
addBooks(libro16);
addBooks(libro17);
