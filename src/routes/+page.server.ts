import { heroItems } from "$lib";
import type { HeroItemProps } from "$lib/components/HeroItem.svelte";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (e) => {
    const heroItemCarouselProps: HeroItemProps[] = heroItems()

    return {
        heroItemCarousel: heroItemCarouselProps
    }
};