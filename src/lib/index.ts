import type { HeroItemProps } from "./components/HeroItem.svelte";
import { m } from "./paraglide/messages";

const heroItems: () => HeroItemProps[] = () => [
    {
      leftImage: "https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/7ce66a77-d662-4c68-ffc2-97d4718a1f00/public",
      rightImage: "https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/577a90e2-8502-45de-5a2a-cc923b410300/public",
      htmlText: m.funny_short_husky_jest()
    },
    {
      leftImage: "https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/5dc528f9-d0a6-43a6-4a57-b8358ed48d00/public",
      rightImage: "https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/d900d84d-ca32-4d5c-b818-1a6fe83a5900/public",
      htmlText: m.zany_zesty_ocelot_rise()
    },
    {
      leftImage: "https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/a19c3274-81fc-4193-cab0-beaeb828e200/public",
      rightImage: "https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/e46a87f1-237c-4a78-c340-54d728f67200/public",
      htmlText: m.sour_mean_bobcat_bake()
    },
    {
      leftImage: "https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/96bbf20a-1120-484b-9df4-28f971e27200/public",
      rightImage: "https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/5c4588af-97ae-4477-b389-f02ef250c200/public",
      htmlText: m.awful_dark_swan_boil()
    },
    {
      leftImage: "https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/b5fe811f-eb46-4ae0-d411-16931616d500/public",
      rightImage: "https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/7a16bf0f-d721-46f8-874f-07c85dca0000/public",
      htmlText: m.awake_few_mouse_walk()
    },
    {
      leftImage: "https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/6240f55d-264d-4ac7-7b42-746eeca81800/public",
      rightImage: "https://imagedelivery.net/coO5-ODUTOt3Xy0qRkHGhQ/b703ed7b-f028-4e68-bfb4-6314d05ccf00/public",
      htmlText: m.steep_clear_dove_value()
    }
  ];