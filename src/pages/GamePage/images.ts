import Adidas from "../../assets/logos/l1/adidas.png";
import Amazon from "../../assets/logos/l1/amazon.png";
import Apple from "../../assets/logos/l1/apple.png";
import Dolby from "../../assets/logos/l1/dolby.png";
import Kfc from "../../assets/logos/l1/kfc.png";
import Pepsi from "../../assets/logos/l1/pepsi.png";
import Pizzahut from "../../assets/logos/l1/pizzahut.png";
import Pringles from "../../assets/logos/l1/pringles.png";
import Shell from "../../assets/logos/l1/shell.png";
import Tacobell from "../../assets/logos/l1/tacobell.png";
import Wikipedia from "../../assets/logos/l1/wikipedia.png";
import Xerox from "../../assets/logos/l1/xerox.png";
import Yamaha from "../../assets/logos/l1/yamaha.png";
import BurgerKing from "../../assets/logos/l2/burgerking.png";
import Gucci from "../../assets/logos/l2/gucci.png";
import Lego from "../../assets/logos/l2/lego.png";
import Nestle from "../../assets/logos/l2/nestle.png";
import Skoda from "../../assets/logos/l2/skoda.png";
import Starbucks from "../../assets/logos/l2/starbucks.png";
import Walmart from "../../assets/logos/l2/walmart.png";
import Mastercard from "../../assets/logos/l2/mastercard.png";
import Tide from "../../assets/logos/l2/tide.png";
import Barclays from "../../assets/logos/l3/barclays.png";
import Chanel from "../../assets/logos/l3/chanel.png";
import Knorr from "../../assets/logos/l3/knorr.png";
import Kodak from "../../assets/logos/l3/kodak.png";
import Lufthansa from "../../assets/logos/l3/lufthansa.png";
import Tupperware from "../../assets/logos/l3/tupperware.png";

// Revealed
import AdidasRevealed from "../../assets/logos/l1/revealed/adidas.png";
import AmazonRevealed from "../../assets/logos/l1/revealed/amazon.png";
import AppleRevealed from "../../assets/logos/l1/revealed/apple.jpg";
import DolbyRevealed from "../../assets/logos/l1/revealed/dolby.png";
import KfcRevealed from "../../assets/logos/l1/revealed/kfc.png";
import PepsiRevealed from "../../assets/logos/l1/revealed/pepsi.png";
import PizzahutRevealed from "../../assets/logos/l1/revealed/pizzahut.png";
import PringlesRevealed from "../../assets/logos/l1/revealed/pringles.jpg";
import ShellRevealed from "../../assets/logos/l1/revealed/shell.png";
import TacobellRevealed from "../../assets/logos/l1/revealed/tacobell.jpg";
import WikipediaRevealed from "../../assets/logos/l1/revealed/wikipedia.png";
import XeroxRevealed from "../../assets/logos/l1/revealed/xerox.png";
import YamahaRevealed from "../../assets/logos/l1/revealed/yamaha.jpg";
import BurgerKingRevealed from "../../assets/logos/l2/revealed/burgerking.jpg";
import GucciRevealed from "../../assets/logos/l2/revealed/gucci.png";
import LegoRevealed from "../../assets/logos/l2/revealed/lego.png";
import NestleRevealed from "../../assets/logos/l2/revealed/nestle.jpg";
import SkodaRevealed from "../../assets/logos/l2/revealed/skoda.png";
import StarbucksRevealed from "../../assets/logos/l2/revealed/starbucks.jpg";
import WalmartRevealed from "../../assets/logos/l2/revealed/walmart.png";
import MastercardRevealed from "../../assets/logos/l2/revealed/mastercard.png";
import TideRevealed from "../../assets/logos/l2/revealed/tide.png";
import BarclaysRevealed from "../../assets/logos/l3/revealed/barclays.png";
import ChanelRevealed from "../../assets/logos/l3/revealed/chanel.jpg";
import KnorrRevealed from "../../assets/logos/l3/revealed/knorr.png";
import KodakRevealed from "../../assets/logos/l3/revealed/kodak.jpg";
import LufthansaRevealed from "../../assets/logos/l3/revealed/lufthansa.png";
import TupperwareRevealed from "../../assets/logos/l3/revealed/tupperware.png";

// Level Banners
import L1Banner from "../../assets/images/level1.png";
import L2Banner from "../../assets/images/level2.png";
import L3Banner from "../../assets/images/level3.png";

interface imagesType {
  [key: string]: any,
}

export const images: imagesType = {
  level1: [
    {
      src: L1Banner,
      answers: ["LEVEL 1"],
      revealed: L1Banner,
    },
    {
      src: Adidas,
      answers: ["adidas"],
      revealed: AdidasRevealed,
    },
    {
      src: Amazon,
      answers: ["amazon"],
      revealed: AmazonRevealed,
    },
    {
      src: Apple,
      answers: ["apple"],
      revealed: AppleRevealed,
    },
    {
      src: Dolby,
      answers: ["dolby"],
      revealed: DolbyRevealed,
    },
    {
      src: Kfc,
      answers: ["kfc"],
      revealed: KfcRevealed,
    },
    {
      src: Pepsi,
      answers: ["pepsi"],
      revealed: PepsiRevealed,
    },
    {
      src: Pizzahut,
      answers: ["pizzahut", "pizza hut"],
      revealed: PizzahutRevealed,
    },
    {
      src: Pringles,
      answers: ["pringles"],
      revealed: PringlesRevealed,
    },
    {
      src: Shell,
      answers: ["shell"],
      revealed: ShellRevealed,
    },
    {
      src: Tacobell,
      answers: ["tacobell", "taco bell"],
      revealed: TacobellRevealed,
    },
    {
      src: Wikipedia,
      answers: ["wikipedia"],
      revealed: WikipediaRevealed,
    },
    {
      src: Xerox,
      answers: ["xerox"],
      revealed: XeroxRevealed,
    },
    {
      src: Yamaha,
      answers: ["yamaha"],
      revealed: YamahaRevealed,
    },
    {
      src: L1Banner,
      answers: ["LEVEL 1"],
      revealed: L1Banner,
    },
  ],
  level2: [
    {
      src: L2Banner,
      answers: ["LEVEL 2"],
      revealed: L2Banner,
    },
    {
      src: BurgerKing,
      answers: ["burgerking", "burger king"],
      revealed: BurgerKingRevealed,
    },
    {
      src: Gucci,
      answers: ["gucci"],
      revealed: GucciRevealed,
    },
    {
      src: Lego,
      answers: ["lego"],
      revealed: LegoRevealed,
    },
    {
      src: Nestle,
      answers: ["nestle"],
      revealed: NestleRevealed,
    },
    {
      src: Skoda,
      answers: ["skoda"],
      revealed: SkodaRevealed,
    },
    {
      src: Starbucks,
      answers: ["starbucks"],
      revealed: StarbucksRevealed,
    },
    {
      src: Walmart,
      answers: ["walmart"],
      revealed: WalmartRevealed,
    },
    {
      src: Mastercard,
      answers: ["mastercard"],
      revealed: MastercardRevealed,
    },
    {
      src: L2Banner,
      answers: ["LEVEL 2"],
      revealed: L2Banner,
    },
  ],
  level3: [
    {
      src: L3Banner,
      answers: ["LEVEL 3"],
      revealed: L3Banner,
    },
    {
      src: Tide,
      answers: ["tide"],
      revealed: TideRevealed,
    },
    {
      src: Barclays,
      answers: ["barclays"],
      revealed: BarclaysRevealed,
    },
    {
      src: Chanel,
      answers: ["chanel"],
      revealed: ChanelRevealed,
    },
    {
      src: Knorr,
      answers: ["knorr"],
      revealed: KnorrRevealed,
    },
    {
      src: Kodak,
      answers: ["kodak"],
      revealed: KodakRevealed,
    },
    {
      src: Lufthansa,
      answers: ["lufthansa"],
      revealed: LufthansaRevealed,
    },
    {
      src: Tupperware,
      answers: ["tupperware", "tupper ware"],
      revealed: TupperwareRevealed,
    },
    {
      src: L3Banner,
      answers: ["LEVEL 3"],
      revealed: L3Banner,
    },
  ],
};
