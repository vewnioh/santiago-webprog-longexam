import nuBackpackImg from './img/NU Backpack.png';
import nuBballImg from './img/NU Bball Shirt.png';
import nuCapImg from './img/NU Cap.jpg';
import nuChampionImg from './img/NU Champion Shirt.png';
import nuHoodieImg from './img/NU Hoodie.jpg';
import nuKeychainImg from './img/NU Keychain.png';
import nuLanyardImg from './img/NU Lanyard.jpg';
import nuNotebookImg from './img/NU Notebook.jpg';
import nuPenImg from './img/NU Pen.jpg';
import nuShirtImg from './img/NU Shirt.jpg';
import nuStickerImg from './img/NU Sticker.png';
import nuToteImg from './img/NU Tote Bag.jpg';
import nuTradPantsImg from './img/NU TradPants.jpg';
import nuTumblerImg from './img/NU Tumbler.jpg';
import nuUaapImg from './img/NU UAAP Shirt.png';
import nuUniformImg from './img/NU Uniform.jpg';
import nuVarsityImg from './img/NU Varsity.jpg';
import nuWaterImg from './img/NU Water Bottle.jpg';

const products = [
  {
    name: 'nu-bulldogs-varsity-jacket',
    title: 'NU Bulldogs Varsity Jacket',
    category: 'Apparel',
    price: 'PHP 2,499',
    stock: 'In stock',
    image: nuVarsityImg,
    content: [
      'A heritage varsity jacket cut in true Bulldogs blue with chenille gold lettering on the chest and sleeves.',
      'The wool-blend body and rib-knit trims give it a structured fit that layers well over uniforms and hoodies.',
      'A flagship piece for alumni days, UAAP game nights, and every time you want to rep the Pack loud and proud.',
    ],
  },
  {
    name: 'nu-classic-campus-tee',
    title: 'NU Classic Campus Tee',
    category: 'Apparel',
    price: 'PHP 599',
    stock: 'In stock',
    image: nuShirtImg,
    content: [
      'A relaxed-fit cotton tee designed for everyday comfort, featuring a soft and breathable fabric that feels light on the skin. It is printed with the clean NU seal across the chest in a bold gold finish, giving it a simple yet striking look.',
      'Soft combed cotton keeps it breathable for hot commute days, long lecture halls, and weekend org meet-ups.',
      'An everyday staple that works solo or layered under a varsity, hoodie, or blazer.',
    ],
  },
  {
    name: 'nu-uaap-basketball-jersey',
    title: 'NU UAAP Basketball Jersey',
    category: 'Apparel',
    price: 'PHP 1,299',
    stock: 'Low stock',
    image: nuBballImg,
    content: [
      'Officially styled UAAP game jersey with breathable mesh panels and tackle-twill team numbers.',
      'Cut for movement so you can rep the squad from the bleachers or pick-up games at the campus court.',
      'Limited run each season — drops tend to sell out before the finals stretch.',
    ],
  },
  {
    name: 'nu-champion-pullover',
    title: 'NU Champion Pullover',
    category: 'Apparel',
    price: 'PHP 1,899',
    stock: 'In stock',
    image: nuChampionImg,
    content: [
      'A heavyweight fleece pullover inspired by championship-era warm-ups worn by the Bulldogs team.',
      'Brushed interior and ribbed cuffs keep the heat in during early morning classes and late-night study runs.',
      'The gold embroidery stays crisp wash after wash for a piece that earns its place in your rotation.',
    ],
  },
  {
    name: 'nu-bulldogs-hoodie',
    title: 'NU Bulldogs Hoodie',
    category: 'Apparel',
    price: 'PHP 1,599',
    stock: 'In stock',
    image: nuHoodieImg,
    content: [
      'The everyday hoodie — mid-weight cotton blend in deep NU navy with a tonal bulldog crest.',
      'Roomy pouch pocket, drawcord hood, and clean seams so it reads premium without trying too hard.',
      'Perfect for unpredictable Manila weather and dorm AC that never quite agrees with you.',
    ],
  },
  {
    name: 'nu-traditional-uniform-set',
    title: 'NU Traditional Uniform Set',
    category: 'Uniforms',
    price: 'PHP 1,799',
    stock: 'In stock',
    image: nuUniformImg,
    content: [
      'The official NU traditional uniform — tailored top and matching bottom in school-regulation colors.',
      'Wrinkle-resistant weave holds its shape through jeepney rides, packed classrooms, and full school days.',
      'Sized from XS to XXL with tailoring slips available for fine adjustments at the campus store.',
    ],
  },
  {
    name: 'nu-academic-trousers',
    title: 'NU Academic Trousers',
    category: 'Uniforms',
    price: 'PHP 799',
    stock: 'In stock',
    image: nuTradPantsImg,
    content: [
      'Regulation academic trousers in deep navy with a clean, tailored drape that meets dress-code standards.',
      'Hidden side pocket for IDs and transit cards, plus a reinforced waistband that keeps shape all semester.',
      'Pairs with any NU polo, button-down, or department shirt for a put-together campus look.',
    ],
  },
  {
    name: 'nu-bulldogs-snapback',
    title: 'NU Bulldogs Snapback',
    category: 'Accessories',
    price: 'PHP 499',
    stock: 'In stock',
    image: nuCapImg,
    content: [
      'A six-panel structured snapback with 3D-embroidered bulldog crest on the front panel.',
      'Adjustable plastic closure fits most head sizes and holds shape on windy commute days.',
      'A quiet flex for game days, campus tours, and post-class coffee runs along Jhocson.',
    ],
  },
  {
    name: 'nu-campus-backpack',
    title: 'NU Campus Backpack',
    category: 'Bags',
    price: 'PHP 1,499',
    stock: 'In stock',
    image: nuBackpackImg,
    content: [
      'A 22L backpack with a padded 15" laptop sleeve, organizer panel, and water-resistant 600D fabric.',
      'Ergonomic shoulder straps and a breathable back panel handle full class loads without wrecking your posture.',
      'Designed around the way NU students actually carry books, chargers, tumblers, and a change of clothes.',
    ],
  },
  {
    name: 'nu-heritage-tote-bag',
    title: 'NU Heritage Tote Bag',
    category: 'Bags',
    price: 'PHP 499',
    stock: 'In stock',
    image: nuToteImg,
    content: [
      'A durable heavy 14oz canvas tote designed for everyday use, offering a sturdy yet stylish carry option. It features a screen-printed vintage NU crest in rich gold ink on the front, giving it a classic and timeless appeal.',
      'Reinforced handles and a boxed base keep it upright even when packed with books and lunch containers.',
      'Machine-washable and built to age into a softer, personal look the longer you carry it.',
    ],
  },
  {
    name: 'nu-insulated-tumbler',
    title: 'NU Insulated Tumbler',
    category: 'Drinkware',
    price: 'PHP 549',
    stock: 'In stock',
    image: nuTumblerImg,
    content: [
      'A 500ml double-wall stainless tumbler that holds ice for 12 hours and hot drinks for 6.',
      'Powder-coated finish resists scratches, and the leak-resistant lid keeps bags dry during packed commutes.',
      'Laser-etched NU wordmark stays sharp — no peeling prints after the first dishwasher cycle.',
    ],
  },
  {
    name: 'nu-steel-water-bottle',
    title: 'NU Steel Water Bottle',
    category: 'Drinkware',
    price: 'PHP 449',
    stock: 'In stock',
    image: nuWaterImg,
    content: [
      'A slim 750ml stainless bottle that slides into side pockets and stays cold through a full class block.',
      'Wide-mouth opening for easy refills at hydration stations around campus.',
      'A small switch that adds up — cuts through the weekly single-use plastic habit without changing routine.',
    ],
  },
  {
    name: 'nu-official-lanyard',
    title: 'NU Official Lanyard',
    category: 'Accessories',
    price: 'PHP 149',
    stock: 'In stock',
    image: nuLanyardImg,
    content: [
      'A woven polyester lanyard with a detachable buckle and reinforced metal clip for student IDs.',
      'Breakaway safety clasp prevents snags during rushed transitions between buildings.',
      'A must-grab before your first day — most professors will ask to see the ID on this exact strap.',
    ],
  },
  {
    name: 'nu-bulldogs-keychain',
    title: 'NU Bulldogs Keychain',
    category: 'Accessories',
    price: 'PHP 99',
    stock: 'In stock',
    image: nuKeychainImg,
    content: [
      'An enamel-and-metal keychain shaped around the NU bulldog mascot in full team colors.',
      'Sturdy split ring and a swivel clip so it rides well on bag loops and dorm key sets.',
      'A small, giftable piece — one of the easiest ways to spot a fellow Bulldog in the wild.',
    ],
  },
  {
    name: 'nu-sticker-pack',
    title: 'NU Sticker Pack (x6)',
    category: 'Accessories',
    price: 'PHP 79',
    stock: 'In stock',
    image: nuStickerImg,
    content: [
      'A set of six die-cut vinyl stickers featuring the NU seal, bulldog mascot, and classic campus type lockups.',
      'Weather-resistant finish holds up on laptops, tumblers, notebooks, and helmet shells.',
      'The easiest way to personalize your gear before midterms — and they leave no residue when swapped out.',
    ],
  },
  {
    name: 'nu-campus-notebook',
    title: 'NU Campus Notebook',
    category: 'Stationery',
    price: 'PHP 199',
    stock: 'In stock',
    image: nuNotebookImg,
    content: [
      'An A5 hardcover notebook with 160 dot-grid pages of 100gsm ivory paper that handles fountain pens and markers.',
      'Debossed NU wordmark on the front, ribbon bookmark, and an elastic closure to keep class notes tidy.',
      'The kind of notebook that makes you actually want to open it during a 7:30am lecture.',
    ],
  },
  {
    name: 'nu-fineliner-pen',
    title: 'NU Fineliner Pen',
    category: 'Stationery',
    price: 'PHP 59',
    stock: 'In stock',
    image: nuPenImg,
    content: [
      'A 0.5mm fineliner that lays down sharp, non-smudging ink on both notebook and exam bluebook paper.',
      'Matte navy barrel with a subtle gold NU emblem near the cap — looks good clipped to a planner or shirt pocket.',
      'A reliable daily driver for note-taking, annotations, and last-minute attendance sheets.',
    ],
  },
  {
    name: 'nu-uaap-supporter-shirt',
    title: 'NU UAAP Supporter Shirt',
    category: 'Apparel',
    price: 'PHP 699',
    stock: 'Preorder',
    image: nuUaapImg,
    content: [
      'The season supporter tee drops before every UAAP opening — printed with the current-year roster graphic.',
      'Soft-hand water-based print on premium ringspun cotton so it feels lived-in from the first wear.',
      'Preorder to lock in your size before courtside pickup — production is limited to the supporter list.',
    ],
  },
];

export default products;
