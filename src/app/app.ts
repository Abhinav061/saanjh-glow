import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

const IMG: Record<string, string> = {
  'img_12_27_51': 'images/img_12_27_51.webp',
  'img_12_27_52': 'images/img_12_27_52.webp',
  'img_12_27_52_1': 'images/img_12_27_52_1.webp',
  'img_12_27_52_2': 'images/img_12_27_52_2.webp',
  'img_12_27_53': 'images/img_12_27_53.webp',
  'img_12_27_53_1': 'images/img_12_27_53_1.webp',
  'img_12_27_53_2': 'images/img_12_27_53_2.webp',
  'img_12_27_54': 'images/img_12_27_54.webp',
  'img_12_27_54_1': 'images/img_12_27_54_1.webp',
  'img_12_27_54_2': 'images/img_12_27_54_2.webp',
  'img_12_27_55': 'images/img_12_27_55.webp',
  'img_12_27_55_1': 'images/img_12_27_55_1.webp',
  'img_12_27_55_2': 'images/img_12_27_55_2.webp',
  'img_12_27_55_3': 'images/img_12_27_55_3.webp',
  'img_12_27_56': 'images/img_12_27_56.webp',
  'img_12_27_57': 'images/img_12_27_57.webp',
  'img_12_27_57_1': 'images/img_12_27_57_1.webp',
  'img_12_27_58': 'images/img_12_27_58.webp',
  'img_12_27_59': 'images/img_12_27_59.webp',
  'img_12_27_59_1': 'images/img_12_27_59_1.webp',
  'img_12_28_00': 'images/img_12_28_00.webp',
  'img_12_28_00_1': 'images/img_12_28_00_1.webp',
  'img_12_28_00_2': 'images/img_12_28_00_2.webp',
  'img_12_28_01': 'images/img_12_28_01.webp',
  'img_12_28_01_1': 'images/img_12_28_01_1.webp',
  'img_12_28_01_2': 'images/img_12_28_01_2.webp',
  'img_12_28_02': 'images/img_12_28_02.webp',
  'img_12_28_02_1': 'images/img_12_28_02_1.webp',
  'img_12_28_05': 'images/img_12_28_05.webp',
  'img_12_28_06': 'images/img_12_28_06.webp',
  'img_12_28_07': 'images/img_12_28_07.webp',
  'img_12_28_07_1': 'images/img_12_28_07_1.webp',
  'img_12_28_08': 'images/img_12_28_08.webp',
  'img_12_28_08_1': 'images/img_12_28_08_1.webp',
  'img_12_28_08_2': 'images/img_12_28_08_2.webp',
  'img_12_28_09': 'images/img_12_28_09.webp',
  'img_12_28_10': 'images/img_12_28_10.webp',
  'img_12_28_11': 'images/img_12_28_11.webp',
  'img_12_28_11_1': 'images/img_12_28_11_1.webp',
};

export interface ProductVariant {
  label: string;
  price: number;
  unit: string;
}

export interface ProductItem {
  id: string;
  name: string;
  hindiTag: string;
  subtitle: string;
  category: 'festive' | 'jars' | 'coffee' | 'wellness' | 'hampers';
  categoryLabel: string;
  image: string;
  secondaryImages: string[];
  price: number | null;
  priceUnit: string;
  variants: ProductVariant[];
  badge: string;
  story: string;
  specs: string[];
  fragranceNotes: string[];
  craftNote: string;
}

export interface FragranceItem {
  id: string;
  name: string;
  tagline: string;
  moods: string[];
  image: string;
}

export interface LookbookPhoto {
  id: string;
  title: string;
  caption: string;
  image: string;
}

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');

    :host {
      display: block;
      font-family: 'Inter', sans-serif;
      background-color: #FAF5EE;
      color: #2A1810;
      min-height: 100vh;
    }

    .font-serif-luxury {
      font-family: 'Cormorant Garamond', Georgia, serif;
    }

    .twilight-gradient {
      background: radial-gradient(circle at top right, #4A2511 0%, #2A140B 55%, #160A05 100%);
    }

    .candle-glow {
      box-shadow: 0 12px 36px -8px rgba(180, 115, 45, 0.16), 0 4px 12px -2px rgba(42, 24, 16, 0.06);
    }

    .candle-glow-hover:hover {
      box-shadow: 0 20px 44px -10px rgba(180, 115, 45, 0.28), 0 6px 16px -3px rgba(42, 24, 16, 0.1);
    }
  `],
  template: `
    <!-- Top Announcement Bar -->
    <div class="bg-[#241109] text-[#F5E6CC] text-xs sm:text-sm py-2 px-3 sm:px-4 border-b border-[#D4A359]/25">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
        <div class="flex items-center justify-center gap-2">
          <span class="inline-block w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse flex-shrink-0"></span>
          <span class="tracking-wide text-xs sm:text-sm">
            <strong class="font-medium text-white">Saanjh Glow</strong> • Handpoured with Love in India
          </span>
        </div>
        <div class="flex items-center gap-2">
          <a
            href="tel:+919456221293"
            class="inline-flex items-center gap-1.5 font-semibold text-[#F7C873] hover:text-white transition-colors underline underline-offset-4 text-xs sm:text-sm"
          >
            <span>📞 Call to Order: 94562 21293</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Luxury Header / Responsive Navigation -->
    <header class="sticky top-0 z-40 bg-[#FAF5EE]/95 backdrop-blur-md border-b border-[#E2D3C1]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-3">
        <!-- Brand Logo & Crest -->
        <button
          type="button"
          (click)="setPage('story')"
          class="flex items-center gap-2.5 sm:gap-3.5 text-left group focus:outline-none"
        >
          <img
            [src]="imgMap['img_12_28_01_1']"
            alt="Saanjh Glow Official Logo"
            class="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#C88A36] shadow-sm group-hover:scale-105 transition-transform flex-shrink-0"
          />
          <div>
            <span class="block font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight text-[#2A1810] leading-none">
              Saanjh <span class="font-normal tracking-widest text-xs sm:text-sm text-[#9A5B25] uppercase">Glow</span>
            </span>
            <span class="block text-[11px] sm:text-xs italic font-serif-luxury text-[#6E4730] mt-0.5">
              “Light up the little moments.”
            </span>
          </div>
        </button>

        <!-- Desktop Navigation Pills -->
        <nav class="hidden md:flex items-center gap-1 bg-[#F1E6D6] p-1.5 rounded-full border border-[#DFCBB2]">
          <button
            type="button"
            (click)="setPage('story')"
            [class]="activePage() === 'story'
              ? 'px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#2A1810] text-[#FAF5EE] shadow-sm transition-all'
              : 'px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-[#5A3A28] hover:text-[#2A1810] transition-all'"
          >
            Our Story &amp; Craft
          </button>
          <button
            type="button"
            (click)="setPage('catalog')"
            [class]="activePage() === 'catalog'
              ? 'px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#2A1810] text-[#FAF5EE] shadow-sm transition-all'
              : 'px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-[#5A3A28] hover:text-[#2A1810] transition-all'"
          >
            Product Catalog
          </button>
          <button
            type="button"
            (click)="setPage('contact')"
            [class]="activePage() === 'contact'
              ? 'px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#2A1810] text-[#FAF5EE] shadow-sm transition-all'
              : 'px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-[#5A3A28] hover:text-[#2A1810] transition-all'"
          >
            Visit &amp; Call to Order
          </button>
        </nav>

        <!-- Header Right Actions & Mobile Hamburger -->
        <div class="flex items-center gap-2">
          <a
            href="tel:+919456221293"
            class="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#8C4A1E] to-[#B86B2B] hover:from-[#733B16] hover:to-[#9E5920] text-white px-4 py-2 rounded-full text-xs font-medium shadow-md transition-all"
          >
            <span>📞 Call to Order</span>
            <span class="font-semibold border-l border-white/30 pl-2">94562 21293</span>
          </a>

          <!-- Mobile Menu Toggle Button -->
          <button
            type="button"
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 rounded-xl bg-[#F1E6D6] text-[#2A1810] border border-[#DFCBB2] text-base focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {{ mobileMenuOpen() ? '✕' : '☰' }}
          </button>
        </div>
      </div>

      <!-- Mobile Expandable Navigation Menu -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden bg-[#FAF5EE] border-t border-[#E2D3C1] px-4 py-3 space-y-2 shadow-lg animate-fadeIn">
          <button
            type="button"
            (click)="setPage('story'); toggleMobileMenu()"
            [class]="activePage() === 'story'
              ? 'w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#2A1810] text-[#FAF5EE]'
              : 'w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#5A3A28] hover:bg-[#F1E6D6]'"
          >
            📖 Our Story &amp; Craft
          </button>
          <button
            type="button"
            (click)="setPage('catalog'); toggleMobileMenu()"
            [class]="activePage() === 'catalog'
              ? 'w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#2A1810] text-[#FAF5EE]'
              : 'w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#5A3A28] hover:bg-[#F1E6D6]'"
          >
            🕯️ Product Catalog
          </button>
          <button
            type="button"
            (click)="setPage('contact'); toggleMobileMenu()"
            [class]="activePage() === 'contact'
              ? 'w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#2A1810] text-[#FAF5EE]'
              : 'w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#5A3A28] hover:bg-[#F1E6D6]'"
          >
            📞 Visit &amp; Call to Order
          </button>
          <div class="pt-2 border-t border-[#E2D3C1]">
            <a
              href="tel:+919456221293"
              class="block w-full text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#8C4A1E] to-[#B86B2B] text-white font-semibold text-xs shadow-md"
            >
              📞 Call to Order: 94562 21293
            </a>
          </div>
        </div>
      }
    </header>

    <!-- Toast Notification Banner -->
    @if (toastMessage()) {
      <div class="fixed bottom-20 right-4 sm:right-6 z-50 bg-[#2A1810] text-[#FAF5EE] px-4 py-3 rounded-xl shadow-2xl border border-[#D4A359]/50 flex items-center gap-3 max-w-sm">
        <span class="text-[#F7C873] text-lg">✨</span>
        <span class="text-xs sm:text-sm">{{ toastMessage() }}</span>
        <button
          type="button"
          (click)="clearToast()"
          class="ml-auto text-xs text-[#D9C3B0] hover:text-white px-1.5 py-0.5"
        >
          ✕
        </button>
      </div>
    }

    <!-- =================================================================== -->
    <!-- PAGE 1: OUR STORY & CRAFT -->
    <!-- =================================================================== -->
    @if (activePage() === 'story') {
      <main>
        <!-- Hero Section -->
        <section class="twilight-gradient text-[#FAF5EE] relative overflow-hidden py-14 sm:py-20 lg:py-24">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div class="lg:col-span-7 space-y-6">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#E5A93C]/35 text-[#F7C873] text-xs uppercase tracking-widest">
                  <span>🕯️ Handpoured Artisanal Candles • Made in India</span>
                </div>

                <h1 class="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#FFFDF9]">
                  When evening softens into <span class="italic text-[#F7C873]">Saanjh</span>, let a warm flame tell your story.
                </h1>

                <p class="text-base sm:text-lg text-[#E5D3C0] leading-relaxed max-w-2xl font-light">
                  In Indian homes, <em class="text-white font-serif-luxury text-xl">Saanjh</em> is the sacred twilight hour—the quiet pause when the day’s rush melts away, a wick is lit, and ordinary corners turn into sanctuaries of memory, prayer, and togetherness. Every <strong class="text-white font-medium">Saanjh Glow</strong> creation is hand-poured in small batches with 100% natural soy and premium wax blends to light up your little moments.
                </p>

                <div class="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    (click)="setPage('catalog')"
                    class="px-7 py-3.5 rounded-full bg-[#E5A93C] hover:bg-[#F0B84D] text-[#1D0D06] font-semibold text-sm sm:text-base shadow-lg transition-all flex items-center gap-2"
                  >
                    <span>Explore Our Collection</span>
                    <span>→</span>
                  </button>

                  <a
                    href="tel:+919456221293"
                    class="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#F7C873]/50 text-white font-medium text-sm sm:text-base transition-all flex items-center gap-2"
                  >
                    <span>📞 Call to Order: 94562 21293</span>
                  </a>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15">
                  <div>
                    <div class="font-serif-luxury text-2xl sm:text-3xl text-[#F7C873] font-semibold">100%</div>
                    <div class="text-xs text-[#D9C3B0] mt-0.5">Handpoured with Love</div>
                  </div>
                  <div>
                    <div class="font-serif-luxury text-2xl sm:text-3xl text-[#F7C873] font-semibold">Natural</div>
                    <div class="text-xs text-[#D9C3B0] mt-0.5">Clean-Burning Wax Blend</div>
                  </div>
                  <div>
                    <div class="font-serif-luxury text-2xl sm:text-3xl text-[#F7C873] font-semibold">8+</div>
                    <div class="text-xs text-[#D9C3B0] mt-0.5">Signature Mood Scents</div>
                  </div>
                  <div>
                    <div class="font-serif-luxury text-2xl sm:text-3xl text-[#F7C873] font-semibold">Pan-India</div>
                    <div class="text-xs text-[#D9C3B0] mt-0.5">Bespoke Gift Dispatch</div>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-5">
                <div class="relative mx-auto max-w-md lg:max-w-none">
                  <div class="rounded-3xl overflow-hidden border-2 border-[#E5A93C]/40 shadow-2xl bg-[#1A0C06]">
                    <img
                      [src]="imgMap['img_12_27_55_2']"
                      alt="Saanjh Glow Signature Candle Collection"
                      class="w-full h-auto object-cover"
                    />
                  </div>
                  <div class="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-left-5 bg-[#FAF5EE] text-[#2A1810] p-4 rounded-2xl shadow-xl border border-[#DFCBB2] max-w-xs">
                    <div class="flex items-center gap-3">
                      <img
                        [src]="imgMap['img_12_28_01_1']"
                        alt="Saanjh Glow Official Logo"
                        class="w-14 h-14 rounded-full object-cover border border-[#C88A36] flex-shrink-0"
                      />
                      <div>
                        <p class="font-serif-luxury text-base font-bold text-[#2A1810] leading-snug">
                          Crafted in Sector-71, Noida
                        </p>
                        <p class="text-xs text-[#6E4730] mt-0.5">
                          A-16/7, Shiv Shakti Apartments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Philosophy Section -->
        <section class="py-16 sm:py-20 bg-[#FAF5EE]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mx-auto text-center space-y-4">
              <span class="text-xs font-semibold uppercase tracking-widest text-[#9A5B25]">Our Philosophy</span>
              <h2 class="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#2A1810]">
                Every Flame Carries a Feeling
              </h2>
              <p class="text-sm sm:text-base text-[#5A3A28] leading-relaxed">
                We founded <strong class="font-medium text-[#2A1810]">Saanjh Glow</strong> with a simple belief: true luxury feels warm, personal, and deeply rooted in memory. It is the nostalgia of festive <em class="font-serif-luxury text-lg">motichoor ladoos</em> and <em class="font-serif-luxury text-lg">anaar</em> sparks at Diwali, the grounding aroma of a morning coffee brew, and the quiet fragrance of star anise and sun-dried orange waiting in your wardrobe.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div class="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#E6D7C3] candle-glow flex flex-col">
                <div class="aspect-[4/3] overflow-hidden bg-[#F3E9DC]">
                  <img
                    [src]="imgMap['img_12_28_08_2']"
                    alt="Saanjh Glow Floral Keepsake Card"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span class="text-xs font-medium uppercase tracking-widest text-[#9A5B25]">Intimate Rituals</span>
                    <h3 class="font-serif-luxury text-2xl font-bold text-[#2A1810] mt-1">
                      Handmade with Heart &amp; Botanicals
                    </h3>
                    <p class="text-sm text-[#5A3A28] mt-2 leading-relaxed">
                      From daisy-sculpted wax keepsake cards paired with a single wooden matchstick to hand-poured frosted jars crowned with golden wax sunflowers, every piece is shaped by hand.
                    </p>
                  </div>
                  <button
                    type="button"
                    (click)="openCategoryInCatalog('wellness')"
                    class="text-xs font-semibold uppercase tracking-wider text-[#8C4A1E] hover:text-[#2A1810] inline-flex items-center gap-1.5"
                  >
                    <span>Explore Wellness &amp; Keepsakes</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              <div class="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#E6D7C3] candle-glow flex flex-col">
                <div class="aspect-[4/3] overflow-hidden bg-[#F3E9DC]">
                  <img
                    [src]="imgMap['img_12_27_57']"
                    alt="Saanjh Glow Urli and Candy Jar Candles"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span class="text-xs font-medium uppercase tracking-widest text-[#9A5B25]">Festive Nostalgia</span>
                    <h3 class="font-serif-luxury text-2xl font-bold text-[#2A1810] mt-1">
                      A Traditional Touch for Modern Homes
                    </h3>
                    <p class="text-sm text-[#5A3A28] mt-2 leading-relaxed">
                      Celebrate Indian traditions with our golden floral Urli bowls, reusable embossed Candy Jars, playful Anar &amp; Sutli Bomb candles, and lifelike Motichoor Ladoo candles.
                    </p>
                  </div>
                  <button
                    type="button"
                    (click)="openCategoryInCatalog('festive')"
                    class="text-xs font-semibold uppercase tracking-wider text-[#8C4A1E] hover:text-[#2A1810] inline-flex items-center gap-1.5"
                  >
                    <span>Explore Festive Collection</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              <div class="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#E6D7C3] candle-glow flex flex-col">
                <div class="aspect-[4/3] overflow-hidden bg-[#F3E9DC]">
                  <img
                    [src]="imgMap['img_12_27_57_1']"
                    alt="Saanjh Glow Royal Festive Gift Hamper"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span class="text-xs font-medium uppercase tracking-widest text-[#9A5B25]">The Art of Gifting</span>
                    <h3 class="font-serif-luxury text-2xl font-bold text-[#2A1810] mt-1">
                      Heirloom Hampers &amp; Sweet Memories
                    </h3>
                    <p class="text-sm text-[#5A3A28] mt-2 leading-relaxed">
                      Draped in champagne satin and paired with silver-leaf pistachio sweets and golden organza dry-fruit potlis, our gift trunks turn festive greetings into cherished keepsakes.
                    </p>
                  </div>
                  <button
                    type="button"
                    (click)="openCategoryInCatalog('hampers')"
                    class="text-xs font-semibold uppercase tracking-wider text-[#8C4A1E] hover:text-[#2A1810] inline-flex items-center gap-1.5"
                  >
                    <span>Explore Luxury Hampers</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Fragrance Atelier Section -->
        <section class="py-16 sm:py-20 bg-[#F3E9DC] border-y border-[#E2D3C1]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-5">
                <div class="rounded-3xl overflow-hidden border-2 border-[#D4B996] shadow-xl bg-[#FFFDF9]">
                  <img
                    [src]="imgMap['img_12_27_56']"
                    alt="Saanjh Glow Fragrance Collection"
                    class="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div class="lg:col-span-7 space-y-6">
                <div>
                  <span class="text-xs font-semibold uppercase tracking-widest text-[#9A5B25]">Our Fragrance Collection</span>
                  <h2 class="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#2A1810] mt-1">
                    Scents That Make Moments Brighter
                  </h2>
                  <p class="text-sm sm:text-base text-[#5A3A28] mt-2 leading-relaxed">
                    Every Saanjh Glow jar candle (30 ml, 100 ml, and 200 ml) is hand-poured to order in your choice of our signature mood-lifting fragrance oils.
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  @for (scent of fragrances(); track scent.id) {
                    <div class="bg-[#FFFDF9] p-4 rounded-2xl border border-[#E2D3C1] shadow-sm space-y-1.5">
                      <div class="flex items-center justify-between">
                        <h3 class="font-serif-luxury text-xl font-bold text-[#2A1810]">{{ scent.name }}</h3>
                      </div>
                      <p class="text-xs text-[#5A3A28] leading-relaxed">{{ scent.tagline }}</p>
                      <div class="flex flex-wrap gap-1.5 pt-1">
                        @for (mood of scent.moods; track mood) {
                          <span class="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#F3E9DC] text-[#6E4730]">
                            {{ mood }}
                          </span>
                        }
                      </div>
                    </div>
                  }
                </div>

                <div class="bg-[#FFFDF9] rounded-2xl p-5 border border-[#E2D3C1] shadow-sm flex flex-col sm:flex-row items-center gap-5">
                  <img
                    [src]="imgMap['img_12_28_09']"
                    alt="Lavender, Rose and Lemongrass 30g Hand Poured Aroma Candles"
                    class="w-full sm:w-44 h-36 object-cover rounded-xl border border-[#E6D7C3] flex-shrink-0"
                  />
                  <div class="space-y-2">
                    <span class="text-[11px] font-semibold uppercase tracking-wider text-[#9A5B25]">
                      Botanical Classics • 30g (1.05 US FL OZ)
                    </span>
                    <h3 class="font-serif-luxury text-2xl font-bold text-[#2A1810]">
                      Lavender, Rose &amp; Lemongrass Apothecary Jars
                    </h3>
                    <p class="text-xs text-[#5A3A28] leading-relaxed">
                      Our botanical apothecary line also features soothing <strong class="text-[#2A1810]">Lavender</strong>, romantic <strong class="text-[#2A1810]">Rose</strong>, and crisp <strong class="text-[#2A1810]">Lemongrass</strong> across 30 ml, 100 ml, and 200 ml glass jars.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Featured Products Preview -->
        <section class="py-16 sm:py-20 bg-[#FAF5EE]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span class="text-xs font-semibold uppercase tracking-widest text-[#9A5B25]">Signature Highlights</span>
                <h2 class="font-serif-luxury text-3xl sm:text-4xl text-[#2A1810] mt-1">
                  Most-Loved Artisanal Creations
                </h2>
              </div>
              <button
                type="button"
                (click)="setPage('catalog')"
                class="px-6 py-2.5 rounded-full bg-[#2A1810] text-[#FAF5EE] text-xs sm:text-sm font-medium hover:bg-[#43281C] transition-colors self-start sm:self-auto"
              >
                Explore Full Product Catalog →
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              @for (item of featuredProducts(); track item.id) {
                <div class="bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#E6D7C3] candle-glow candle-glow-hover transition-all flex flex-col justify-between">
                  <div>
                    <div class="relative aspect-[4/5] bg-[#F3E9DC] overflow-hidden">
                      <img
                        [src]="item.image"
                        [alt]="item.name"
                        class="w-full h-full object-cover"
                      />
                      <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#2A1810]/90 text-[#F7C873]">
                        {{ item.badge }}
                      </span>
                    </div>
                    <div class="p-5">
                      <div class="text-[11px] font-medium uppercase tracking-wider text-[#9A5B25]">{{ item.categoryLabel }}</div>
                      <h3 class="font-serif-luxury text-xl font-bold text-[#2A1810] mt-0.5">{{ item.name }}</h3>
                      <p class="text-xs text-[#5A3A28] mt-1.5 line-clamp-2">{{ item.subtitle }}</p>

                      @if (item.price !== null) {
                        <div class="mt-3 pt-3 border-t border-[#EFE5D8] flex items-baseline justify-between">
                          <div>
                            <span class="text-xl font-bold text-[#8C4A1E]">₹{{ item.price }}</span>
                            <span class="text-xs text-[#6E4730] ml-1">{{ item.priceUnit }}</span>
                          </div>
                        </div>
                      }
                    </div>
                  </div>

                  <div class="px-5 pb-5 pt-1 flex items-center gap-2">
                    <a
                      href="tel:+919456221293"
                      class="flex-1 text-center py-2.5 px-3 rounded-xl bg-[#8C4A1E] hover:bg-[#733B16] text-white text-xs font-semibold transition-colors"
                    >
                      📞 Call to Order
                    </a>
                    <button
                      type="button"
                      (click)="openProductModal(item)"
                      class="py-2.5 px-3 rounded-xl border border-[#D4B996] text-[#2A1810] hover:bg-[#F3E9DC] text-xs font-medium transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>
      </main>
    }

    <!-- =================================================================== -->
    <!-- PAGE 2: PRODUCT CATALOG -->
    <!-- =================================================================== -->
    @if (activePage() === 'catalog') {
      <main class="py-10 sm:py-14 bg-[#FAF5EE]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div class="bg-[#2A1810] text-[#FAF5EE] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D4A359]/30 shadow-xl">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div class="space-y-2 max-w-2xl">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/20 text-[#F7C873] text-xs font-semibold uppercase tracking-widest">
                  <span>✨ Handpoured Artisanal Collection • Made with Love in India</span>
                </div>
                <h1 class="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-white">
                  Candles for Every Little Moment
                </h1>
                <p class="text-xs sm:text-sm text-[#D9C3B0] leading-relaxed">
                  Explore our handcrafted floral urlis, aromatic glass jars, gourmet coffee candles, botanical wardrobe sachets, and festive gift hampers. Tap <strong class="text-white">“Call to Order”</strong> on any creation to speak directly with us at <strong class="text-[#F7C873]">94562 21293</strong>.
                </p>
              </div>

              <div class="flex flex-col sm:flex-row lg:flex-col gap-3 items-stretch sm:items-center lg:items-end">
                <a
                  href="tel:+919456221293"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#E5A93C] hover:bg-[#F0B84D] text-[#1D0D06] font-semibold text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>📞 Call to Order: 94562 21293</span>
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#FFFDF9] p-4 rounded-2xl border border-[#E2D3C1] shadow-sm">
            <div class="flex flex-wrap items-center gap-1.5">
              @for (cat of categories; track cat.id) {
                <button
                  type="button"
                  (click)="setCategory(cat.id)"
                  [class]="selectedCategory() === cat.id
                    ? 'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#8C4A1E] text-white shadow-sm transition-all'
                    : 'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium bg-[#F3E9DC] text-[#5A3A28] hover:bg-[#E5D5C0] transition-all'"
                >
                  {{ cat.label }}
                </button>
              }
            </div>

            <div class="relative min-w-[220px]">
              <input
                type="text"
                [value]="searchQuery()"
                (input)="onSearchInput($event)"
                placeholder="Search candles, scents, hampers..."
                class="w-full pl-9 pr-8 py-2 rounded-xl bg-[#FAF5EE] border border-[#D4B996] text-xs sm:text-sm text-[#2A1810] placeholder-[#8A7260] focus:outline-none focus:border-[#8C4A1E]"
              />
              <span class="absolute left-3 top-2.5 text-xs text-[#8A7260]">🔍</span>
              @if (searchQuery()) {
                <button
                  type="button"
                  (click)="clearSearch()"
                  class="absolute right-2.5 top-2 text-xs text-[#8A7260] hover:text-[#2A1810]"
                >
                  ✕
                </button>
              }
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            @for (product of filteredProducts(); track product.id) {
              <article class="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#E2D3C1] candle-glow candle-glow-hover transition-all flex flex-col justify-between">
                <div>
                  <div class="relative aspect-[4/4] bg-[#F3E9DC] overflow-hidden group">
                    <img
                      [src]="getActiveProductImage(product)"
                      [alt]="product.name"
                      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span class="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#2A1810]/90 text-[#F7C873] backdrop-blur-sm">
                        {{ product.badge }}
                      </span>
                    </div>

                    <button
                      type="button"
                      (click)="openProductModal(product)"
                      class="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black text-white text-xs font-medium backdrop-blur-sm transition-colors"
                    >
                      🔍 View Details
                    </button>
                  </div>

                  @if (product.secondaryImages.length > 1) {
                    <div class="px-5 pt-3 flex items-center gap-2 overflow-x-auto">
                      @for (imgUrl of product.secondaryImages; track imgUrl; let idx = $index) {
                        <button
                          type="button"
                          (click)="selectProductThumbnail(product.id, imgUrl)"
                          [class]="getActiveProductImage(product) === imgUrl
                            ? 'w-11 h-11 rounded-lg overflow-hidden border-2 border-[#8C4A1E] flex-shrink-0'
                            : 'w-11 h-11 rounded-lg overflow-hidden border border-[#DFCBB2] opacity-70 hover:opacity-100 flex-shrink-0'"
                        >
                          <img [src]="imgUrl" [alt]="product.name + ' view ' + (idx + 1)" class="w-full h-full object-cover" />
                        </button>
                      }
                      <span class="text-[11px] text-[#8A7260] ml-1">{{ product.secondaryImages.length }} views</span>
                    </div>
                  }

                  <div class="p-5 sm:p-6 space-y-3">
                    <div class="flex items-center justify-between gap-2">
                      <span class="text-[11px] font-semibold uppercase tracking-widest text-[#9A5B25]">
                        {{ product.categoryLabel }}
                      </span>
                      <span class="text-[11px] italic font-serif-luxury text-[#6E4730]">
                        {{ product.hindiTag }}
                      </span>
                    </div>

                    <h2 class="font-serif-luxury text-2xl font-bold text-[#2A1810] leading-snug">
                      {{ product.name }}
                    </h2>

                    <p class="text-xs sm:text-sm text-[#5A3A28] leading-relaxed">
                      {{ product.story }}
                    </p>

                    <div class="flex flex-wrap gap-1.5 pt-1">
                      @for (spec of product.specs.slice(0, 3); track spec) {
                        <span class="px-2.5 py-0.5 rounded-md bg-[#F3E9DC] text-[#5A3A28] text-[11px]">
                          {{ spec }}
                        </span>
                      }
                    </div>

                    <div class="pt-3 border-t border-[#EFE5D8] space-y-2">
                      @if (product.variants.length > 0) {
                        <div class="text-[11px] font-semibold uppercase tracking-wider text-[#6E4730]">
                          Available Sizes &amp; Prices:
                        </div>
                        <div class="space-y-1.5">
                          @for (v of product.variants; track v.label) {
                            <div class="flex items-center justify-between text-xs bg-[#FAF5EE] px-3 py-1.5 rounded-lg border border-[#E6D7C3]">
                              <span class="font-medium text-[#2A1810]">{{ v.label }}</span>
                              <span class="font-bold text-[#8C4A1E] text-sm">
                                ₹{{ v.price }} <span class="text-[11px] font-normal text-[#6E4730]">{{ v.unit }}</span>
                              </span>
                            </div>
                          }
                        </div>
                      } @else if (product.price !== null) {
                        <div class="flex items-baseline justify-between bg-[#FAF5EE] px-3.5 py-2.5 rounded-xl border border-[#E6D7C3]">
                          <div>
                            <span class="text-[11px] uppercase tracking-wider text-[#6E4730] block">Price</span>
                            <div class="flex items-baseline gap-1.5">
                              <span class="text-2xl font-bold text-[#8C4A1E]">₹{{ product.price }}</span>
                              <span class="text-xs text-[#5A3A28]">{{ product.priceUnit }}</span>
                            </div>
                          </div>
                          <span class="text-xs text-[#6E4730] font-medium">Handpoured to Order</span>
                        </div>
                      } @else {
                        <div class="flex items-center justify-between bg-[#FAF5EE] px-3.5 py-2.5 rounded-xl border border-[#E6D7C3]">
                          <div>
                            <span class="text-[11px] uppercase tracking-wider text-[#6E4730] block">Bespoke Curated Edition</span>
                            <span class="text-sm font-bold text-[#8C4A1E]">Custom Hamper / Gift Pricing on Call</span>
                          </div>
                          <span class="text-xs text-[#6E4730]">Pan-India Gift Box</span>
                        </div>
                      }
                    </div>
                  </div>
                </div>

                <div class="p-5 sm:p-6 pt-0 space-y-2">
                  <div class="flex items-center gap-2">
                    <a
                      href="tel:+919456221293"
                      class="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#8C4A1E] to-[#B86B2B] hover:from-[#733B16] hover:to-[#9E5920] text-white text-xs sm:text-sm font-semibold text-center shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <span>📞 Call to Order</span>
                      <span class="text-white/90 font-normal">| 94562 21293</span>
                    </a>
                    <button
                      type="button"
                      (click)="toggleShortlist(product.id)"
                      [class]="isShortlisted(product.id)
                        ? 'py-3 px-3.5 rounded-xl bg-[#2A1810] text-[#F7C873] text-xs font-semibold border border-[#2A1810] transition-all'
                        : 'py-3 px-3.5 rounded-xl bg-[#F3E9DC] hover:bg-[#E5D5C0] text-[#2A1810] text-xs font-medium border border-[#D4B996] transition-all'"
                      title="Save to your Call Inquiry Checklist"
                    >
                      {{ isShortlisted(product.id) ? '✓ Saved' : '+ Note' }}
                    </button>
                  </div>
                </div>
              </article>
            }
          </div>

          <!-- Price Guide Table Section -->
          <section class="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#E2D3C1] candle-glow space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span class="text-xs font-semibold uppercase tracking-widest text-[#9A5B25]">Quick Reference Menu</span>
                <h2 class="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2A1810] mt-0.5">
                  Saanjh Glow Collection Price Guide
                </h2>
              </div>
              <div class="flex flex-wrap gap-2">
                <button
                  type="button"
                  (click)="openImageModal(imgMap['img_12_27_52'], 'Saanjh Glow — Signature Candle Collection Menu')"
                  class="px-3.5 py-2 rounded-xl bg-[#F3E9DC] hover:bg-[#E5D5C0] text-xs font-medium text-[#2A1810] transition-colors"
                >
                  🕯️ View Collection Menu Card 1
                </button>
                <button
                  type="button"
                  (click)="openImageModal(imgMap['img_12_27_51'], 'Saanjh Glow — Candle Collection Overview')"
                  class="px-3.5 py-2 rounded-xl bg-[#F3E9DC] hover:bg-[#E5D5C0] text-xs font-medium text-[#2A1810] transition-colors"
                >
                  🕯️ View Collection Menu Card 2
                </button>
              </div>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr class="border-b-2 border-[#DFCBB2] text-[#6E4730] bg-[#FAF5EE]">
                    <th class="py-3 px-4 font-semibold">Creation / Variant</th>
                    <th class="py-3 px-4 font-semibold">Collection</th>
                    <th class="py-3 px-4 font-semibold text-right">Price</th>
                    <th class="py-3 px-4 font-semibold text-center">Order by Phone</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#EFE5D8]">
                  @for (row of masterPriceTable; track row.item) {
                    <tr class="hover:bg-[#FAF5EE]/60">
                      <td class="py-3 px-4 font-medium text-[#2A1810]">{{ row.item }}</td>
                      <td class="py-3 px-4 text-[#6E4730]">{{ row.category }}</td>
                      <td class="py-3 px-4 text-right font-bold text-[#8C4A1E]">₹{{ row.price }} <span class="font-normal text-[#6E4730]">{{ row.unit }}</span></td>
                      <td class="py-3 px-4 text-center">
                        <a
                          href="tel:+919456221293"
                          class="inline-block px-3 py-1 rounded-lg bg-[#8C4A1E] text-white text-xs font-medium hover:bg-[#733B16]"
                        >
                          Call 94562 21293
                        </a>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </section>

          <!-- Lookbook & Studio Gallery -->
          <section class="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#E2D3C1] candle-glow space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span class="text-xs font-semibold uppercase tracking-widest text-[#9A5B25]">Atelier Lookbook</span>
                <h2 class="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2A1810] mt-0.5">
                  Moments of Warmth &amp; Craftsmanship
                </h2>
                <p class="text-xs sm:text-sm text-[#5A3A28]">
                  A glimpse into our hand-poured batches, festive table settings, and twilight moments.
                </p>
              </div>
              <button
                type="button"
                (click)="toggleArchiveExpanded()"
                class="px-4 py-2 rounded-xl bg-[#2A1810] text-white text-xs font-medium hover:bg-[#43281C] self-start sm:self-auto"
              >
                {{ archiveExpanded() ? 'Show Compact Lookbook' : 'View Full Studio Lookbook' }}
              </button>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              @for (photo of visibleLookbookPhotos(); track photo.id) {
                <button
                  type="button"
                  (click)="openImageModal(photo.image, photo.title + ' — ' + photo.caption)"
                  class="group text-left bg-[#FAF5EE] rounded-2xl overflow-hidden border border-[#E2D3C1] hover:border-[#8C4A1E] transition-all"
                >
                  <div class="aspect-square overflow-hidden bg-[#F3E9DC]">
                    <img
                      [src]="photo.image"
                      [alt]="photo.title"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div class="p-2.5">
                    <div class="text-[11px] font-semibold text-[#2A1810] truncate">{{ photo.title }}</div>
                    <div class="text-[10px] text-[#6E4730] truncate">{{ photo.caption }}</div>
                  </div>
                </button>
              }
            </div>
          </section>
        </div>
      </main>
    }

    <!-- =================================================================== -->
    <!-- PAGE 3: VISIT & CALL TO ORDER -->
    <!-- =================================================================== -->
    @if (activePage() === 'contact') {
      <main class="py-12 sm:py-16 bg-[#FAF5EE]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div class="twilight-gradient text-[#FAF5EE] rounded-3xl p-8 sm:p-12 border border-[#D4A359]/35 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7 space-y-5">
              <span class="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[#F7C873] text-xs font-semibold uppercase tracking-widest">
                Personal Phone Concierge • Bespoke &amp; Retail Orders
              </span>
              <h1 class="font-serif-luxury text-4xl sm:text-5xl text-white leading-tight">
                Every Saanjh Glow Order Begins with a Warm Conversation
              </h1>
              <p class="text-sm sm:text-base text-[#E5D3C0] leading-relaxed">
                Because our candles are hand-poured to order and customized with your chosen fragrances, jar sizes, and festive ribbon packaging, we take all orders directly over the phone. Call us to place individual orders, customize wedding favors, or curate festive hampers.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-[#F7C873]/40 space-y-2">
                  <div class="text-xs uppercase tracking-widest text-[#F7C873]">Direct Ordering Line</div>
                  <a
                    href="tel:+919456221293"
                    class="block font-serif-luxury text-3xl font-bold text-white hover:text-[#F7C873] transition-colors"
                  >
                    94562 21293
                  </a>
                  <div class="flex items-center gap-2 pt-1">
                    <a
                      href="tel:+919456221293"
                      class="px-4 py-2 rounded-xl bg-[#E5A93C] text-[#1D0D06] text-xs font-semibold hover:bg-[#F0B84D] transition-colors"
                    >
                      📞 Call to Order Now
                    </a>
                    <button
                      type="button"
                      (click)="copyText('94562 21293', 'Phone number 94562 21293 copied to clipboard!')"
                      class="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs transition-colors"
                    >
                      Copy Number
                    </button>
                  </div>
                </div>

                <div class="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 space-y-2">
                  <div class="text-xs uppercase tracking-widest text-[#F7C873]">Our Noida Atelier Address</div>
                  <p class="font-serif-luxury text-xl font-semibold text-white leading-snug">
                    A-16/7, Shiv Shakti Apartments, Sector-71, Noida
                  </p>
                  <div class="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      (click)="copyText('A-16/7, Shiv Shakti Apartments, Sector-71, Noida', 'Atelier address copied to clipboard!')"
                      class="px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs transition-colors"
                    >
                      📍 Copy Address
                    </button>
                    <span class="text-xs text-[#D9C3B0]">Pan-India Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 flex flex-col items-center">
              <div class="bg-[#FAF5EE] p-6 rounded-3xl border-2 border-[#E5A93C] shadow-xl max-w-sm w-full text-center space-y-4">
                <img
                  [src]="imgMap['img_12_28_01_1']"
                  alt="Saanjh Glow Official Logo"
                  class="w-44 h-44 mx-auto rounded-full object-cover border-2 border-[#8C4A1E] shadow-md"
                />
                <div class="space-y-1">
                  <h2 class="font-serif-luxury text-2xl font-bold text-[#2A1810]">Saanjh Glow Atelier</h2>
                  <p class="text-xs text-[#6E4730]">Instagram: <strong class="text-[#2A1810]">&#64;saanjh__glow</strong></p>
                  <p class="text-xs text-[#5A3A28] font-medium">A-16/7, Shiv Shakti Apartments, Sector-71, Noida</p>
                </div>
                <a
                  href="tel:+919456221293"
                  class="block w-full py-3.5 px-6 rounded-2xl bg-[#8C4A1E] hover:bg-[#733B16] text-white font-semibold text-sm shadow-md transition-colors"
                >
                  📞 Call to Order: 94562 21293
                </a>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-7 bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#E2D3C1] candle-glow space-y-5">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-xs font-semibold uppercase tracking-widest text-[#9A5B25]">Prepare for Your Phone Call</span>
                  <h2 class="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2A1810] mt-0.5">
                    Your Call Inquiry Note ({{ shortlistedProducts().length }} Selected)
                  </h2>
                </div>
                @if (shortlistedProducts().length > 0) {
                  <button
                    type="button"
                    (click)="clearShortlist()"
                    class="text-xs text-[#8C4A1E] hover:underline"
                  >
                    Clear List
                  </button>
                }
              </div>

              <p class="text-xs sm:text-sm text-[#5A3A28]">
                Select any creations below (or tap <strong class="text-[#2A1810]">“+ Note”</strong> in the Catalog) to keep a handy checklist of items while calling <strong class="text-[#8C4A1E]">94562 21293</strong>.
              </p>

              @if (shortlistedProducts().length === 0) {
                <div class="bg-[#FAF5EE] rounded-2xl p-6 border border-dashed border-[#D4B996] text-center space-y-3">
                  <p class="text-sm text-[#5A3A28]">
                    You haven’t added any candles to your call note yet. Quick-add popular creations below or browse the full catalog:
                  </p>
                  <div class="flex flex-wrap justify-center gap-2">
                    @for (item of featuredProducts(); track item.id) {
                      <button
                        type="button"
                        (click)="toggleShortlist(item.id)"
                        class="px-3 py-1.5 rounded-xl bg-[#FFFDF9] border border-[#D4B996] hover:border-[#8C4A1E] text-xs font-medium text-[#2A1810]"
                      >
                        + {{ item.name }} (₹{{ item.price }})
                      </button>
                    }
                  </div>
                </div>
              } @else {
                <div class="space-y-2.5">
                  @for (item of shortlistedProducts(); track item.id) {
                    <div class="flex items-center justify-between gap-3 bg-[#FAF5EE] p-3 rounded-2xl border border-[#E6D7C3]">
                      <div class="flex items-center gap-3">
                        <img [src]="item.image" [alt]="item.name" class="w-12 h-12 rounded-xl object-cover" />
                        <div>
                          <div class="text-sm font-semibold text-[#2A1810]">{{ item.name }}</div>
                          <div class="text-xs text-[#6E4730]">
                            @if (item.price !== null) {
                              <span>Price: <strong class="text-[#8C4A1E]">₹{{ item.price }}</strong> {{ item.priceUnit }}</span>
                            } @else {
                              <span>Bespoke Hamper • Custom Pricing on Call</span>
                            }
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        (click)="toggleShortlist(item.id)"
                        class="text-xs text-[#8A7260] hover:text-[#2A1810] px-2 py-1"
                      >
                        Remove
                      </button>
                    </div>
                  }
                </div>

                <div class="pt-3 border-t border-[#EFE5D8] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span class="text-xs text-[#6E4730] block">Estimated Base Total (1 unit each):</span>
                    <span class="font-serif-luxury text-2xl font-bold text-[#8C4A1E]">₹{{ shortlistedTotal() }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <button
                      type="button"
                      (click)="copyShortlistSummary()"
                      class="px-4 py-2.5 rounded-xl border border-[#8C4A1E] text-[#8C4A1E] text-xs font-semibold hover:bg-[#FAF5EE]"
                    >
                      📋 Copy Inquiry Note
                    </button>
                    <a
                      href="tel:+919456221293"
                      class="px-5 py-2.5 rounded-xl bg-[#8C4A1E] text-white text-xs font-semibold hover:bg-[#733B16]"
                    >
                      📞 Call 94562 21293 to Order
                    </a>
                  </div>
                </div>
              }
            </div>

            <div class="lg:col-span-5 bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#E2D3C1] candle-glow space-y-6">
              <div>
                <span class="text-xs font-semibold uppercase tracking-widest text-[#9A5B25]">How to Order</span>
                <h2 class="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2A1810] mt-0.5">
                  Simple Ordering by Phone Call
                </h2>
              </div>

              <ol class="space-y-4 text-xs sm:text-sm text-[#5A3A28]">
                <li class="flex gap-3.5">
                  <span class="w-7 h-7 rounded-full bg-[#2A1810] text-[#F7C873] font-bold flex items-center justify-center flex-shrink-0 text-xs">1</span>
                  <div>
                    <strong class="text-[#2A1810] block">Choose Your Candles &amp; Scents</strong>
                    Browse our Festive Specials, Jar Candles, Coffee Collection, 7 Chakra Set, or Royal Gift Hampers.
                  </div>
                </li>
                <li class="flex gap-3.5">
                  <span class="w-7 h-7 rounded-full bg-[#2A1810] text-[#F7C873] font-bold flex items-center justify-center flex-shrink-0 text-xs">2</span>
                  <div>
                    <strong class="text-[#2A1810] block">Call Us at 94562 21293</strong>
                    Tap any <a href="tel:+919456221293" class="text-[#8C4A1E] font-semibold underline">Call to Order (94562 21293)</a> button to confirm your fragrance choices and quantities.
                  </div>
                </li>
                <li class="flex gap-3.5">
                  <span class="w-7 h-7 rounded-full bg-[#2A1810] text-[#F7C873] font-bold flex items-center justify-center flex-shrink-0 text-xs">3</span>
                  <div>
                    <strong class="text-[#2A1810] block">Noida Pickup or Pan-India Delivery</strong>
                    Collect directly from our studio at <strong class="text-[#2A1810]">A-16/7, Shiv Shakti Apartments, Sector-71, Noida</strong> or have your order safely shipped.
                  </div>
                </li>
              </ol>

              <div class="bg-[#F3E9DC] p-4 rounded-2xl border border-[#DFCBB2] space-y-2">
                <div class="text-xs font-semibold uppercase tracking-wider text-[#8C4A1E]">Studio Address &amp; Contact</div>
                <p class="text-xs sm:text-sm text-[#2A1810] font-medium">
                  Saanjh Glow<br />
                  A-16/7, Shiv Shakti Apartments, Sector-71, Noida
                </p>
                <p class="text-xs sm:text-sm text-[#2A1810]">
                  Phone: <a href="tel:+919456221293" class="font-bold text-[#8C4A1E] underline">94562 21293</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    }

    <!-- LUXURY FOOTER -->
    <footer class="bg-[#1D0D06] text-[#E5D3C0] border-t border-[#D4A359]/30 py-12 pb-24 sm:pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          <div class="md:col-span-5 space-y-3">
            <div class="flex items-center gap-3">
              <img
                [src]="imgMap['img_12_28_01_1']"
                alt="Saanjh Glow Official Logo"
                class="w-12 h-12 rounded-full object-cover border border-[#E5A93C]"
              />
              <div>
                <span class="font-serif-luxury text-2xl font-bold text-white">Saanjh Glow</span>
                <span class="block text-xs italic text-[#F7C873]">“Light up the little moments.”</span>
              </div>
            </div>
            <p class="text-xs sm:text-sm text-[#C7B29E] max-w-sm leading-relaxed">
              Handpoured artisanal soy &amp; natural wax candles, traditional floral urlis, coffee-house jars, wellness chakra sets, and royal festive hampers crafted with love in Noida, India.
            </p>
          </div>

          <div class="md:col-span-3 space-y-2 text-xs sm:text-sm">
            <div class="font-semibold uppercase tracking-widest text-[#F7C873] text-xs">Explore</div>
            <ul class="space-y-1.5">
              <li><button type="button" (click)="setPage('story')" class="hover:text-white transition-colors">Our Story &amp; Craft</button></li>
              <li><button type="button" (click)="setPage('catalog')" class="hover:text-white transition-colors">Product Catalog</button></li>
              <li><button type="button" (click)="setPage('contact')" class="hover:text-white transition-colors">Visit &amp; Call to Order</button></li>
            </ul>
          </div>

          <div class="md:col-span-4 space-y-2.5 text-xs sm:text-sm">
            <div class="font-semibold uppercase tracking-widest text-[#F7C873] text-xs">Order via Phone Call</div>
            <p class="text-white font-medium">📍 A-16/7, Shiv Shakti Apartments, Sector-71, Noida</p>
            <p>📞 Phone: <a href="tel:+919456221293" class="text-[#F7C873] font-bold hover:underline">94562 21293</a></p>
            <div class="pt-1">
              <a
                href="tel:+919456221293"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E5A93C] text-[#1D0D06] font-semibold text-xs hover:bg-[#F0B84D] transition-colors"
              >
                <span>📞 Call to Order: 94562 21293</span>
              </a>
            </div>
          </div>
        </div>

        <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#9E8774]">
          <span>© 2026 Saanjh Glow • Handpoured • Made with Love • Made in India</span>
          <span>A-16/7, Shiv Shakti Apartments, Sector-71, Noida • 94562 21293</span>
        </div>
      </div>
    </footer>

    <!-- Sticky Mobile Bottom Call to Order Bar -->
    <div class="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#241109]/95 backdrop-blur-md border-t border-[#E5A93C]/40 p-3 flex items-center justify-between gap-3">
      <div class="text-xs text-[#FAF5EE]">
        <span class="block font-semibold text-[#F7C873]">Saanjh Glow Concierge</span>
        <span class="text-[11px] text-[#D9C3B0]">A-16/7, Sector-71, Noida</span>
      </div>
      <a
        href="tel:+919456221293"
        class="px-4 py-2.5 rounded-full bg-[#E5A93C] text-[#1D0D06] font-bold text-xs shadow-md"
      >
        📞 Call 94562 21293
      </a>
    </div>

    <!-- PRODUCT DETAIL MODAL -->
    @if (selectedProduct(); as prod) {
      <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <div class="bg-[#FAF5EE] text-[#2A1810] rounded-3xl max-w-4xl w-full overflow-hidden border-2 border-[#D4A359] shadow-2xl my-8">
          <div class="flex items-center justify-between px-6 py-4 bg-[#2A1810] text-[#FAF5EE]">
            <div>
              <span class="text-[11px] uppercase tracking-widest text-[#F7C873]">{{ prod.categoryLabel }} • {{ prod.craftNote }}</span>
              <h3 class="font-serif-luxury text-2xl font-bold text-white">{{ prod.name }}</h3>
            </div>
            <button
              type="button"
              (click)="closeProductModal()"
              class="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center text-sm"
            >
              ✕
            </button>
          </div>

          <div class="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start max-h-[80vh] overflow-y-auto">
            <div class="md:col-span-6 space-y-3">
              <div class="rounded-2xl overflow-hidden border border-[#DFCBB2] bg-[#1D0D06]">
                <img
                  [src]="modalActiveImage() || prod.image"
                  [alt]="prod.name"
                  class="w-full h-auto max-h-[440px] object-contain mx-auto"
                />
              </div>
              @if (prod.secondaryImages.length > 1) {
                <div class="flex items-center gap-2 overflow-x-auto pb-1">
                  @for (img of prod.secondaryImages; track img) {
                    <button
                      type="button"
                      (click)="setModalImage(img)"
                      [class]="(modalActiveImage() || prod.image) === img
                        ? 'w-14 h-14 rounded-xl overflow-hidden border-2 border-[#8C4A1E] flex-shrink-0'
                        : 'w-14 h-14 rounded-xl overflow-hidden border border-[#D4B996] opacity-70 hover:opacity-100 flex-shrink-0'"
                    >
                      <img [src]="img" [alt]="prod.name" class="w-full h-full object-cover" />
                    </button>
                  }
                </div>
              }
            </div>

            <div class="md:col-span-6 space-y-4">
              <p class="text-sm text-[#5A3A28] leading-relaxed">{{ prod.story }}</p>

              <div class="bg-[#FFFDF9] p-4 rounded-2xl border border-[#E2D3C1] space-y-2">
                <div class="text-xs font-semibold uppercase tracking-wider text-[#8C4A1E]">
                  Pricing &amp; Sizes
                </div>
                @if (prod.variants.length > 0) {
                  <div class="space-y-1.5">
                    @for (v of prod.variants; track v.label) {
                      <div class="flex items-center justify-between text-xs py-1 border-b border-[#EFE5D8] last:border-0">
                        <span class="font-medium text-[#2A1810]">{{ v.label }}</span>
                        <div>
                          <strong class="text-[#8C4A1E] text-sm">₹{{ v.price }}</strong>
                          <span class="text-[11px] text-[#6E4730] ml-1">{{ v.unit }}</span>
                        </div>
                      </div>
                    }
                  </div>
                } @else if (prod.price !== null) {
                  <div class="flex items-baseline justify-between">
                    <div>
                      <span class="text-2xl font-bold text-[#8C4A1E]">₹{{ prod.price }}</span>
                      <span class="text-xs text-[#5A3A28] ml-1">{{ prod.priceUnit }}</span>
                    </div>
                    <span class="text-xs text-[#6E4730]">100% Natural Wax</span>
                  </div>
                } @else {
                  <div class="text-sm font-semibold text-[#8C4A1E]">
                    Bespoke Gift Box — Call 94562 21293 for Custom Hamper Configurations
                  </div>
                }
              </div>

              <div>
                <div class="text-xs font-semibold uppercase tracking-wider text-[#6E4730] mb-1.5">Craft &amp; Specifications</div>
                <ul class="space-y-1 text-xs text-[#5A3A28]">
                  @for (s of prod.specs; track s) {
                    <li class="flex items-center gap-2">
                      <span class="text-[#8C4A1E]">✦</span>
                      <span>{{ s }}</span>
                    </li>
                  }
                </ul>
              </div>

              <div>
                <div class="text-xs font-semibold uppercase tracking-wider text-[#6E4730] mb-1.5">Fragrance &amp; Ambience Notes</div>
                <div class="flex flex-wrap gap-1.5">
                  @for (note of prod.fragranceNotes; track note) {
                    <span class="px-2.5 py-1 rounded-full bg-[#F3E9DC] text-[#5A3A28] text-xs font-medium">
                      {{ note }}
                    </span>
                  }
                </div>
              </div>

              <div class="pt-3 border-t border-[#E2D3C1] space-y-2">
                <a
                  href="tel:+919456221293"
                  class="block w-full py-3.5 px-5 rounded-2xl bg-[#8C4A1E] hover:bg-[#733B16] text-white font-semibold text-sm text-center shadow-md transition-colors"
                >
                  📞 Call to Order: 94562 21293
                </a>
                <p class="text-[11px] text-center text-[#6E4730]">
                  Studio Pickup &amp; Pan-India Dispatch • A-16/7, Shiv Shakti Apartments, Sector-71, Noida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    }

    <!-- STANDALONE IMAGE LIGHTBOX MODAL -->
    @if (lightboxImage(); as lb) {
      <div class="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="bg-[#2A1810] text-white rounded-3xl max-w-3xl w-full overflow-hidden border border-[#E5A93C]/50 shadow-2xl">
          <div class="flex items-center justify-between px-5 py-3.5 border-b border-white/15">
            <span class="text-xs sm:text-sm font-medium text-[#F7C873]">{{ lb.caption }}</span>
            <button
              type="button"
              (click)="closeImageModal()"
              class="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center text-xs"
            >
              ✕
            </button>
          </div>
          <div class="p-4 bg-[#120804] flex justify-center">
            <img [src]="lb.url" [alt]="lb.caption" class="max-h-[75vh] w-auto object-contain rounded-xl" />
          </div>
          <div class="px-5 py-3.5 bg-[#2A1810] flex items-center justify-between">
            <span class="text-xs text-[#D9C3B0]">Saanjh Glow • Handpoured with Love in India</span>
            <a
              href="tel:+919456221293"
              class="px-4 py-1.5 rounded-full bg-[#E5A93C] text-[#1D0D06] text-xs font-bold hover:bg-[#F0B84D]"
            >
              📞 Call to Order: 94562 21293
            </a>
          </div>
        </div>
      </div>
    }
  `
})
export class App {
  readonly imgMap = IMG;
  readonly activePage = signal<'story' | 'catalog' | 'contact'>('story');
  readonly mobileMenuOpen = signal<boolean>(false);
  readonly selectedCategory = signal<string>('all');
  readonly searchQuery = signal<string>('');
  readonly selectedProduct = signal<ProductItem | null>(null);
  readonly modalActiveImage = signal<string>('');
  readonly lightboxImage = signal<{ url: string; caption: string } | null>(null);
  readonly toastMessage = signal<string>('');
  readonly archiveExpanded = signal<boolean>(false);
  readonly activeThumbnails = signal<Record<string, string>>({});
  readonly shortlistIds = signal<string[]>(['urli-candle', 'candy-jar-candle', 'chakra-set']);

  readonly fragrances = signal<FragranceItem[]>([
    {
      id: 'coffee-crush',
      name: 'Coffee Crush',
      tagline: 'Rich roasted coffee aroma to uplift your mood and wrap your space in café warmth.',
      moods: ['Warm', 'Cozy', 'Invigorating'],
      image: IMG['img_12_27_56']
    },
    {
      id: 'vanilla-velvet',
      name: 'Vanilla Velvet',
      tagline: 'A sweet and soothing classic Madagascar vanilla bean fragrance for serene evenings.',
      moods: ['Calming', 'Comforting', 'Evergreen'],
      image: IMG['img_12_27_56']
    },
    {
      id: 'tangy-tangerine',
      name: 'Tangy Tangerine',
      tagline: 'A fresh and energizing sun-ripened citrus delight that brightens every gathering.',
      moods: ['Refreshing', 'Uplifting', 'Energizing'],
      image: IMG['img_12_27_56']
    },
    {
      id: 'zesty-zen',
      name: 'Zesty Zen',
      tagline: 'A refreshing lemongrass & herbal blend crafted to bring peace and sanctuary freshness.',
      moods: ['Refreshing', 'Relaxing', 'Revitalizing'],
      image: IMG['img_12_27_56']
    },
    {
      id: 'aqua-breeze',
      name: 'Aqua Breeze',
      tagline: 'A cool and calming coastal ocean fragrance that restores clarity and tranquility.',
      moods: ['Calming', 'Fresh', 'Soothing'],
      image: IMG['img_12_27_56']
    }
  ]);

  readonly products = signal<ProductItem[]>([
    {
      id: 'urli-candle',
      name: 'Decorative Floral Urli Candle',
      hindiTag: 'पारंपरिक उरली दीया • Festive Centerpiece',
      subtitle: 'Handcrafted multi-wick green wax urli bowl crowned with sculpted 3D wax dahlias.',
      category: 'festive',
      categoryLabel: 'Festive & Traditional',
      image: IMG['img_12_27_57'],
      secondaryImages: [IMG['img_12_27_57'], IMG['img_12_27_55_2'], IMG['img_12_27_52']],
      price: 99,
      priceUnit: '/ piece',
      variants: [],
      badge: 'Festive Bestseller',
      story: 'Bring home festive charm with our signature Urli Candle. Set in a golden lotus-petal metal bowl (10–12 cm diameter) and topped with intricately sculpted floral wax blooms, it casts a regal glow across entryways and prayer altars.',
      specs: ['Bowl Diameter: 10–12 cm (approx.)', 'Wax Type: Premium Soy & Paraffin Blend', 'Burn Time: 4–5 Hours (approx.)', '100% Eco-Friendly Natural Wax'],
      fragranceNotes: ['Festive Marigold', 'Sacred Temple Bloom', 'Warm Amber Glow'],
      craftNote: 'Handcrafted Floral Bowl • 4–5 Hr Burn'
    },
    {
      id: 'candy-jar-candle',
      name: 'Candy Jar Candle (Botanical Rose & Petal Edition)',
      hindiTag: 'सुगंधित कैंडी जार • Reusable Heirloom Glass',
      subtitle: 'Embossed amber-orange glass jar infused with dried rose petals and golden botanical lid.',
      category: 'festive',
      categoryLabel: 'Festive & Traditional',
      image: IMG['img_12_27_55'],
      secondaryImages: [IMG['img_12_27_55'], IMG['img_12_27_57']],
      price: 179,
      priceUnit: '/ piece',
      variants: [],
      badge: '20–25 Hr Burn',
      story: 'A charming embossed beaded glass jar candle with a black-and-gold botanical tin lid that smells as luxurious as it looks. Topped with real rose petals, the sturdy jar can be reused for keepsakes long after the candle finishes.',
      specs: ['Jar Size: 6.5 cm (H) × 7 cm (D)', 'Net Weight: 200 g (approx.)', 'Burn Time: 20–25 Hours (approx.)', 'Reusable Decorative Glass Jar'],
      fragranceNotes: ['Sweet Rose Nectar', 'Warm Vanilla Sugar', 'Festive Spice'],
      craftNote: '200 g Net Weight • Reusable Glass Jar'
    },
    {
      id: 'chakra-set',
      name: '7 Chakra Candle Set (Premium Gift Box)',
      hindiTag: 'सप्त चक्र ऊर्जा सेट • Holistic Meditation Box',
      subtitle: 'Seven sacred energy candles with chakra mandalas in a collector’s meditation gift box.',
      category: 'wellness',
      categoryLabel: 'Wellness & Sachets',
      image: IMG['img_12_27_55_1'],
      secondaryImages: [IMG['img_12_27_55_1']],
      price: 329,
      priceUnit: '/ box of 7',
      variants: [],
      badge: '7 Unique Scents',
      story: 'Balance your energy and brighten your space. This luxury gift box houses 7 hand-poured chakra candles—Crown (Spirituality), Third Eye (Intuition), Throat (Communication), Heart (Love), Solar Plexus (Confidence), Sacral (Creativity), and Root (Stability).',
      specs: ['Includes 7 Chakra Tin/Jar Candles', '7 Distinct Aromatherapy Fragrances', '100% Natural Wax', 'Presented in Illustrated Mandala Gift Box'],
      fragranceNotes: ['Crown Lotus', 'Third Eye Lavender', 'Heart Rose', 'Root Cedar & Patchouli'],
      craftNote: '7 Sacred Energy Candles • Gift Box'
    },
    {
      id: 'ladoo-candle',
      name: 'Motichoor Ladoo Candle',
      hindiTag: 'मोतीचूर लड्डू कैंडल • Sweet Festive Touch',
      subtitle: 'Hyper-realistic saffron-orange motichoor ladoo candle garnished with silver varq & almond.',
      category: 'festive',
      categoryLabel: 'Festive & Traditional',
      image: IMG['img_12_27_54_1'],
      secondaryImages: [IMG['img_12_27_54_1'], IMG['img_12_27_55_2']],
      price: 25,
      priceUnit: '/ piece',
      variants: [],
      badge: 'Festive Favorite',
      story: 'A sweet touch for your festive décor! Hand-molded to look just like a fresh festive motichoor ladoo with silver leaf detailing and nestled in a classic sweet-shop paper cradle.',
      specs: ['100% Natural Wax', 'Handpoured with Love', 'Served in Individual Sweet Cradle', 'Ideal for Diwali & Wedding Favors'],
      fragranceNotes: ['Saffron Mithai', 'Cardamom Warmth'],
      craftNote: '100% Natural Wax • Handcrafted Mithai Design'
    },
    {
      id: 'anar-candle',
      name: 'Festive Anar (Flowerpot) Candle',
      hindiTag: 'अनार पटाखा कैंडल • A Festive Spark',
      subtitle: 'Nostalgic conical red-and-gold foil Anar firecracker candle with braided red cotton wick.',
      category: 'festive',
      categoryLabel: 'Festive & Traditional',
      image: IMG['img_12_27_53_2'],
      secondaryImages: [IMG['img_12_27_53_2'], IMG['img_12_27_55_2']],
      price: 25,
      priceUnit: '/ piece',
      variants: [],
      badge: 'Zero-Smoke Spark',
      story: 'All the childhood joy of lighting a Diwali Anaar—rewritten as a serene, smoke-free natural wax candle wrapped in traditional star-studded foil.',
      specs: ['100% Natural Wax', 'Authentic Foil Star Packaging', 'Braided Red Top Wick', 'Perfect for Festive Tables & Gifting'],
      fragranceNotes: ['Warm Festive Glow', 'Clean Natural Wax'],
      craftNote: 'Handpoured Festive Spark • Natural Wax'
    },
    {
      id: 'bomb-candles',
      name: 'Sutli Bomb & Pataka Candles',
      hindiTag: 'सुतली बम कैंडल • Playful Festive Decor',
      subtitle: 'Handcrafted green sutli-wound bomb candle & classic green foil pataka roll candle.',
      category: 'festive',
      categoryLabel: 'Festive & Traditional',
      image: IMG['img_12_27_55_3'],
      secondaryImages: [IMG['img_12_27_55_3'], IMG['img_12_27_55_2']],
      price: 25,
      priceUnit: '/ piece',
      variants: [],
      badge: 'Conversation Starter',
      story: 'Playful, nostalgic, and handcrafted with care—our Sutli Bomb and Swan Pataka candles bring instant smiles to Diwali card nights, rangoli corners, and gift hampers.',
      specs: ['Available in Green Sutli & Foil Roll Styles', '100% Natural Wax', 'Handpoured in Noida', 'Priced Per Piece'],
      fragranceNotes: ['Festive Nostalgia', 'Subtle Sweet Wax'],
      craftNote: 'Festive Novelty Edition • 100% Natural Wax'
    },
    {
      id: 'floating-daisy',
      name: 'Floating Daisy Candles',
      hindiTag: 'तैरते फूल दीये • Water Bowl Blooms',
      subtitle: 'Sculpted multi-petal daisy candles in ivory white, marigold orange, and peach-blue.',
      category: 'festive',
      categoryLabel: 'Festive & Traditional',
      image: IMG['img_12_27_54'],
      secondaryImages: [IMG['img_12_27_54'], IMG['img_12_27_55_2']],
      price: 15,
      priceUnit: '/ piece',
      variants: [],
      badge: 'Floats on Water',
      story: 'Designed to float effortlessly in brass urlis or glass bowls filled with water and fresh flower petals, each daisy is hand-molded with lifelike petal detail.',
      specs: ['Floats in Urli & Centerpiece Bowls', '3 Colorways: Ivory, Marigold, Peach', '100% Natural Wax', 'Available Individually or in Gift Boxes'],
      fragranceNotes: ['Soft Floral Dew', 'Clean Burn'],
      craftNote: 'Floating Water Blossom • Handpoured'
    },
    {
      id: 'tea-light-box',
      name: 'Artisanal Tea Light Candles (Pack of 10)',
      hindiTag: 'टी-लाइट कैंडल बॉक्स • Everyday Glow',
      subtitle: 'Box of 10 vibrant hand-poured tea lights in jewel tones of sapphire, emerald, saffron & ruby.',
      category: 'jars',
      categoryLabel: 'Signature & Glitter Jars',
      image: IMG['img_12_27_54_2'],
      secondaryImages: [IMG['img_12_27_54_2'], IMG['img_12_27_59_1'], IMG['img_12_28_01']],
      price: 99,
      priceUnit: '/ box of 10',
      variants: [],
      badge: 'Pack of 10',
      story: 'Our signature windowed gift box of 10 hand-poured tea light candles brings effortless radiance to lanterns, aroma diffusers, and festive rangolis.',
      specs: ['Pack Size: 10 Tea Lights per Box', 'Smokeless Cotton Wicks', 'Recyclable Metal Cups', 'Vibrant Jewel-Toned Natural Wax'],
      fragranceNotes: ['Available Unscented or Softly Scented', 'Clean Even Melt'],
      craftNote: 'Box of 10 Tea Lights • Smokeless Cotton Wick'
    },
    {
      id: 'aroma-jar-30ml',
      name: '30 ml Apothecary Aroma Jar Candles (Lavender, Rose, Lemongrass)',
      hindiTag: 'मिनी अरोमा जार • 30g | 1.05 US FL OZ',
      subtitle: 'Petite glass apothecary jars with black lids in Lavender, Rose, Lemongrass & 5 mood scents.',
      category: 'jars',
      categoryLabel: 'Signature & Glitter Jars',
      image: IMG['img_12_28_09'],
      secondaryImages: [IMG['img_12_28_09'], IMG['img_12_28_00'], IMG['img_12_28_02_1']],
      price: 49,
      priceUnit: '/ 30 ml (With Fragrance)',
      variants: [
        { label: '30 ml — Without Fragrance', price: 29, unit: '/ jar' },
        { label: '30 ml — With Fragrance (Lavender / Rose / Lemongrass / All Scents)', price: 49, unit: '/ jar' }
      ],
      badge: '30g | 1.05 oz',
      story: 'Our beloved 30g petite glass jars are hand-labeled and poured in Lavender, Rose, Lemongrass, Tangy Tangerine, Vanilla Velvet, Zesty Zen, and Aqua Breeze. Ideal for bedside tables, travel tins, and return favors.',
      specs: ['Net Weight: 30g | 1.05 US FL OZ', 'Available With or Without Fragrance', 'Twist-Off Matte Black Lid', 'Handpoured in Small Batches'],
      fragranceNotes: ['Lavender', 'Rose', 'Lemongrass', 'Vanilla Velvet', 'Tangy Tangerine'],
      craftNote: '30g Apothecary Glass Jar • Twist-Off Lid'
    },
    {
      id: 'signature-jar-collection',
      name: 'Our Jar Collection (30 ml, 100 ml & 200 ml Glass Jars)',
      hindiTag: 'सिग्नेचर ग्लास जार कलेक्शन • All Fragrances',
      subtitle: 'Classic straight-sided & gold-lid glass jars available across all 8 signature fragrances.',
      category: 'jars',
      categoryLabel: 'Signature & Glitter Jars',
      image: IMG['img_12_27_56'],
      secondaryImages: [IMG['img_12_27_56'], IMG['img_12_27_52'], IMG['img_12_27_51']],
      price: 129,
      priceUnit: '(Starts at ₹29 for 30ml)',
      variants: [
        { label: '30 ml — Without Fragrance', price: 29, unit: '/ jar' },
        { label: '30 ml — With Fragrance', price: 49, unit: '/ jar' },
        { label: '100 ml — Without Fragrance', price: 129, unit: '/ jar' },
        { label: '100 ml — With Fragrance', price: 149, unit: '/ jar' },
        { label: '200 ml — All Fragrances', price: 259, unit: '/ jar' }
      ],
      badge: '3 Sizes • 8 Scents',
      story: 'From intimate 30 ml tasters to statement 200 ml living-room jars with golden lids, customize your Saanjh Glow jar candle in any of our signature fragrances or pure unscented soy wax.',
      specs: ['Sizes: 30 ml, 100 ml, and 200 ml', 'Choice of Unscented or 8 Signature Scents', 'Crystal-Clear & Frosted Glass Vessels', 'Long, Soot-Free Burn'],
      fragranceNotes: ['Coffee Crush', 'Vanilla Velvet', 'Tangy Tangerine', 'Zesty Zen', 'Aqua Breeze'],
      craftNote: 'Custom Size & Fragrance Selection'
    },
    {
      id: 'glitter-candles',
      name: 'Glitter Candles (Rose Quartz & Champagne Gold Sparkle)',
      hindiTag: 'ग्लिटर जार कैंडल • Shimmering Celebration Jars',
      subtitle: 'Luminous crystal-glitter glass jar candles with brushed gold lids in 30 ml and 100 ml.',
      category: 'jars',
      categoryLabel: 'Signature & Glitter Jars',
      image: IMG['img_12_27_52'],
      secondaryImages: [IMG['img_12_27_52'], IMG['img_12_27_51']],
      price: 99,
      priceUnit: '(30 ml ₹99 | 100 ml ₹199)',
      variants: [
        { label: '30 ml Glitter Jar Candle', price: 99, unit: '/ jar' },
        { label: '100 ml Glitter Jar Candle', price: 199, unit: '/ jar' }
      ],
      badge: 'Sparkling Finish',
      story: 'Designed to catch every flicker of candlelight, our Glitter Candles shimmer in rose-pink and champagne-gold finishes—making them unforgettable bridal shower favors and festive table accents.',
      specs: ['Sizes: 30 ml & 100 ml', 'Brushed Gold Metal Lid Included', 'Rose Pink & Champagne Gold Sparkle', 'Infused with Signature Fragrances'],
      fragranceNotes: ['Champagne Rose', 'Vanilla Velvet', 'Festive Musk'],
      craftNote: 'Crystal-Glitter Finish • Gold Metal Lid'
    },
    {
      id: 'coffee-crush-candle',
      name: 'Coffee Crush Candle (Our Coffee Collection)',
      hindiTag: 'कॉफ़ी क्रश • Rich Espresso Roast',
      subtitle: 'Deep roasted coffee aroma candle that fills your room with the warmth of a morning café.',
      category: 'coffee',
      categoryLabel: 'Coffee Collection',
      image: IMG['img_12_27_56'],
      secondaryImages: [IMG['img_12_27_56'], IMG['img_12_27_52'], IMG['img_12_27_51']],
      price: 49,
      priceUnit: '(30ml ₹49 | 100ml ₹149 | 200ml ₹259)',
      variants: [
        { label: '30 ml Coffee Crush Jar', price: 49, unit: '/ jar' },
        { label: '100 ml Coffee Crush Jar', price: 149, unit: '/ jar' },
        { label: '200 ml Coffee Crush Jar', price: 259, unit: '/ jar' }
      ],
      badge: 'Coffee Lover’s Pick',
      story: 'Poured for true coffee aficionados, Coffee Crush blends freshly ground Arabica bean notes with warm caramel undertones to invigorate your study desk or living room.',
      specs: ['Available in 30 ml, 100 ml & 200 ml', 'Rich Roasted Coffee Bean Oil', 'Warm, Cozy & Invigorating Throw', 'Handpoured in Noida'],
      fragranceNotes: ['Dark Roasted Espresso', 'Toasted Hazelnut', 'Warm Brown Sugar'],
      craftNote: 'Our Coffee Collection • Rich Roast Aroma'
    },
    {
      id: 'iced-latte-candle',
      name: 'Iced Latte Candle (Our Coffee Collection)',
      hindiTag: 'आइस्ड लाते • Swirled Cream & Espresso',
      subtitle: 'Artisanal two-tone swirled cream and espresso wax candle topped with coffee-bean wax cubes.',
      category: 'coffee',
      categoryLabel: 'Coffee Collection',
      image: IMG['img_12_27_51'],
      secondaryImages: [IMG['img_12_27_51'], IMG['img_12_27_52']],
      price: 169,
      priceUnit: '(100 ml ₹169 | 200 ml ₹259)',
      variants: [
        { label: '100 ml Iced Latte Jar', price: 169, unit: '/ jar' },
        { label: '200 ml Iced Latte Jar', price: 259, unit: '/ jar' }
      ],
      badge: 'Swirled Latte Art',
      story: 'Crafted to look just like a chilled glass of café iced latte with espresso ice-cube wax embeds floating in creamy vanilla-milk wax.',
      specs: ['Sizes: 100 ml & 200 ml', 'Hand-Swirled Espresso & Cream Wax', 'Realistic Coffee Cube Wax Toppers', 'Long-Lasting Gourmet Throw'],
      fragranceNotes: ['Chilled Espresso', 'Sweet Condensed Milk', 'Vanilla Bean'],
      craftNote: 'Our Coffee Collection • Swirled Cream & Espresso'
    },
    {
      id: 'mocha-muse-candle',
      name: 'Mocha Muse Candle (Our Coffee Collection)',
      hindiTag: 'मोका म्यूज़ • Chocolate & Whipped Cream',
      subtitle: 'Decadent dual-layered dark chocolate mocha and whipped vanilla cream candle with cocoa shavings.',
      category: 'coffee',
      categoryLabel: 'Coffee Collection',
      image: IMG['img_12_27_52'],
      secondaryImages: [IMG['img_12_27_52'], IMG['img_12_27_51']],
      price: 199,
      priceUnit: '(100 ml ₹199 | 200 ml ₹299)',
      variants: [
        { label: '100 ml Mocha Muse Jar', price: 199, unit: '/ jar' },
        { label: '200 ml Mocha Muse Jar', price: 299, unit: '/ jar' }
      ],
      badge: 'Luxury Reserve',
      story: 'Our richest gourmand creation—Mocha Muse pairs a velvety dark-chocolate coffee base with a thick crown of ivory vanilla cream wax and cocoa curls.',
      specs: ['Sizes: 100 ml & 200 ml', 'Dual-Layered Mocha & Cream Wax', 'Gourmet Chocolate-Coffee Aroma', 'Perfect Gift for Coffee Lovers'],
      fragranceNotes: ['Belgian Dark Cocoa', 'Freshly Pulled Mocha', 'Whipped Vanilla Cream'],
      craftNote: 'Our Coffee Collection • Dual-Layer Gourmand'
    },
    {
      id: 'wax-sachet',
      name: 'Botanical Wax Sachet (Star Anise & Dried Orange)',
      hindiTag: 'वैक्स सैशे • Wardrobe & Linen Fragrance',
      subtitle: 'Handcrafted botanical soy wax tablets embedded with whole star anise and sun-dried orange slices.',
      category: 'wellness',
      categoryLabel: 'Wellness & Sachets',
      image: IMG['img_12_27_52_1'],
      secondaryImages: [IMG['img_12_27_52_1'], IMG['img_12_27_52_2'], IMG['img_12_27_53'], IMG['img_12_27_53_1']],
      price: 50,
      priceUnit: '/ piece',
      variants: [],
      badge: 'Lasts for Months',
      story: '“Warm, clean luxury that stays for months, not minutes.” Strung with rustic jute twine and brass eyelets, our botanical wax sachets infuse wardrobes, sarees, linen drawers, and small spaces with continuous flameless fragrance.',
      specs: ['Oval & Rectangular Botanical Tablets', 'Embedded with Real Dried Orange & Star Anise', 'Jute Hanging Cord Included', 'Ideal for Wardrobes, Drawers & Return Gifts'],
      fragranceNotes: ['Spiced Star Anise', 'Sun-Dried Sweet Orange', 'Clean Linen Musk'],
      craftNote: 'Flameless Wardrobe Fragrance • Natural Botanicals'
    },
    {
      id: 'sunflower-frosted-jar',
      name: 'Frosted Emerald Jar Candle with Dual Sunflower Blooms',
      hindiTag: 'सूरजमुखी फ्रॉस्टेड जार • Botanical Couture',
      subtitle: 'Matte emerald-green frosted glass tumbler crowned with two hand-sculpted golden wax sunflowers.',
      category: 'jars',
      categoryLabel: 'Signature & Glitter Jars',
      image: IMG['img_12_28_11'],
      secondaryImages: [IMG['img_12_28_11'], IMG['img_12_28_11_1'], IMG['img_12_28_01_2']],
      price: 149,
      priceUnit: '(100ml ₹149 | 200ml ₹259)',
      variants: [
        { label: '100 ml Frosted Floral Jar', price: 149, unit: '/ jar' },
        { label: '200 ml Frosted Floral Jar', price: 259, unit: '/ jar' }
      ],
      badge: 'Sculpted Wax Blooms',
      story: 'Matte emerald frosted glass tumbler filled with creamy yellow wax and topped with twin sculpted sunflower blossoms.',
      specs: ['Matte Frosted Emerald Glass Vessel', 'Dual 3D Sunflower Wax Toppers', 'Part of Our Signature Jar Collection', 'Handpoured with 100% Natural Wax'],
      fragranceNotes: ['Zesty Zen', 'Tangy Tangerine', 'Sunlit Meadow'],
      craftNote: 'Matte Emerald Vessel • Sculpted Wax Sunflowers'
    },
    {
      id: 'honeycomb-white-jar',
      name: 'Frosted Ivory Jar Candle with Golden Marigold Topper',
      hindiTag: 'आइवरी फ्लोरल जार • Serene Sanctuary',
      subtitle: 'Snow-white glass jar candle adorned with a sculpted golden marigold/honeycomb wax flower.',
      category: 'jars',
      categoryLabel: 'Signature & Glitter Jars',
      image: IMG['img_12_28_02'],
      secondaryImages: [IMG['img_12_28_02'], IMG['img_12_28_05'], IMG['img_12_28_01']],
      price: 149,
      priceUnit: '(100ml ₹149 | 200ml ₹259)',
      variants: [
        { label: '100 ml Ivory Floral Jar', price: 149, unit: '/ jar' },
        { label: '200 ml Ivory Floral Jar', price: 259, unit: '/ jar' }
      ],
      badge: 'Artisan Studio Edition',
      story: 'Pure ivory wax poured into a minimalist glass tumbler and finished with a delicate golden floral wax crown or botanical green melts.',
      specs: ['Frosted & Clear Ivory Glass Options', 'Hand-Sculpted Floral & Botanical Toppers', 'Signature Saanjh Glow Crest Label', 'Clean Cotton Wick'],
      fragranceNotes: ['Vanilla Velvet', 'Chamomile Honey', 'White Jasmine'],
      craftNote: 'Frosted Ivory Vessel • Botanical Topper'
    },
    {
      id: 'golden-marble-jar',
      name: 'Saffron & Ivory Cloud-Swirl Artisan Jar Candle',
      hindiTag: 'केसर मार्बल जार • Hand-Marbled Wax',
      subtitle: 'Mesmerizing hand-marbled golden saffron and cream soy wax in a crystal glass tumbler.',
      category: 'jars',
      categoryLabel: 'Signature & Glitter Jars',
      image: IMG['img_12_28_00_1'],
      secondaryImages: [IMG['img_12_28_00_1'], IMG['img_12_28_00_2'], IMG['img_12_28_10']],
      price: 149,
      priceUnit: '(100ml ₹149 | 200ml ₹259)',
      variants: [
        { label: '100 ml Cloud-Swirl Jar', price: 149, unit: '/ jar' },
        { label: '200 ml Cloud-Swirl Jar', price: 259, unit: '/ jar' }
      ],
      badge: 'One-of-a-Kind Swirl',
      story: 'No two jars are ever alike. Poured at dual temperatures to create dreamy golden-amber clouds suspended inside ivory wax, glowing like a sunset when lit at dusk.',
      specs: ['Hand-Marbled Dual-Tone Wax', 'Clear Heavy-Base Glass Tumbler', 'Glows with Layered Sunset Hues at Night', 'Available in 100 ml & 200 ml'],
      fragranceNotes: ['Tangy Tangerine', 'Saffron Vanilla', 'Warm Amber'],
      craftNote: 'Hand-Marbled Dual-Tone Soy Blend'
    },
    {
      id: 'floral-wax-card',
      name: 'Saanjh Glow Daisy Wax Bouquet Keepsake Card',
      hindiTag: 'पुष्प स्मृति कार्ड • Matchstick Favor Card',
      subtitle: 'Blush-pink keepsake card featuring a 3D wax daisy bouquet in a printed glass vase & wooden matchstick.',
      category: 'wellness',
      categoryLabel: 'Wellness & Sachets',
      image: IMG['img_12_28_08_2'],
      secondaryImages: [IMG['img_12_28_08_2'], IMG['img_12_28_09']],
      price: 50,
      priceUnit: '/ card (or Custom Bulk Favor)',
      variants: [],
      badge: 'Wedding & Event Favor',
      story: 'An unforgettable poetic gesture: a sculpted 3D wax daisy flower rests atop an illustrated wildflower vase on a blush card inscribed “Light up the little moments — Handmade with Love”, complete with a red-tipped wooden matchstick.',
      specs: ['3D Sculpted Wax Daisy Flower', 'Includes Attached Wooden Matchstick', 'Printed Blush-Pink Keepsake Card', 'Ideal for Invitations, Return Gifts & Hampers'],
      fragranceNotes: ['Soft Meadow Daisy', 'Clean Botanical Wax'],
      craftNote: 'Handmade Keepsake Card • With Matchstick'
    },
    {
      id: 'royal-hamper-potli',
      name: 'Royal Festive Gift Hamper (Potli Edition)',
      hindiTag: 'शाही उपहार हैम्पर • Candles, Sweets & Dry Fruits',
      subtitle: 'Champagne satin-lined gift box with 2 Saanjh Glow jar candles, golden organza Dry Fruits potli & pistachio sweets.',
      category: 'hampers',
      categoryLabel: 'Luxury Gift Hampers',
      image: IMG['img_12_27_57_1'],
      secondaryImages: [IMG['img_12_27_57_1']],
      price: null,
      priceUnit: 'Bespoke Hamper',
      variants: [],
      badge: 'Royal Satin Box',
      story: 'Curated for grand Diwali, wedding, and corporate gifting. Nestled inside a hinged rigid box lined with champagne-gold satin are two signature gold-lid Saanjh Glow jar candles, a pearl-tasseled organza potli of premium almonds & cashews, and a ribboned box of silver-leaf rose & pistachio sweets.',
      specs: ['Includes 2 Saanjh Glow Gold-Lid Jar Candles (100ml + 200ml)', 'Embroidered Organza Potli with Assorted Dry Fruits', '4-Piece Artisanal Rose & Pistachio Vark Mithai Box', 'Reusable Hinged Satin-Lined Keepsake Trunk'],
      fragranceNotes: ['Customizable Candle Fragrances on Call'],
      craftNote: 'Luxury Satin-Lined Gift Trunk'
    },
    {
      id: 'deluxe-hamper-jar',
      name: 'Deluxe Festive Gift Hamper (Glass Jar Edition)',
      hindiTag: 'उत्सव उपहार बॉक्स • Glass Dry Fruit Jar & Candles',
      subtitle: 'Satin-lined luxury trunk with 2 Saanjh Glow candles, branded glass dry-fruits jar & artisanal sweets.',
      category: 'hampers',
      categoryLabel: 'Luxury Gift Hampers',
      image: IMG['img_12_27_58'],
      secondaryImages: [IMG['img_12_27_58']],
      price: null,
      priceUnit: 'Bespoke Hamper',
      variants: [],
      badge: 'Corporate & Family Gift',
      story: 'A regal variation of our signature festive trunk, pairing two hand-poured Saanjh Glow aroma candles with a gold-capped glass jar of roasted cashews, almonds & pistachios, plus a gold-ribboned box of rose-petal sweets.',
      specs: ['Includes 2 Saanjh Glow Gold-Lid Jar Candles', 'Saanjh Glow Branded Glass Jar of Premium Dry Fruits', '4-Piece Silver-Leaf Pistachio & Rose Petal Sweets', 'Custom Gift Tag & Pan-India Bulk Dispatch'],
      fragranceNotes: ['Customizable Candle Fragrances on Call'],
      craftNote: 'Bespoke Corporate & Wedding Gifting'
    },
    {
      id: 'diffuser-gift-sets',
      name: 'Ceramic Aroma Diffuser & Botanical Gift Sets (Lavender & Vanilla)',
      hindiTag: 'अरोमा डिफ्यूज़र सेट • Complete Home Ritual',
      subtitle: 'Curated aromatherapy gift boxes pairing ceramic oil burners, fragrance oils, botanicals, and sculpted tea lights.',
      category: 'hampers',
      categoryLabel: 'Luxury Gift Hampers',
      image: IMG['img_12_28_08_1'],
      secondaryImages: [IMG['img_12_28_08_1'], IMG['img_12_27_59']],
      price: null,
      priceUnit: 'Call for Gift Box Price',
      variants: [],
      badge: 'Lavender & Vanilla Sets',
      story: 'Available in soothing Lavender (with ceramic cutwork burner, aroma oil bottle, 3 purple tea lights & floating lotus candle) and warm Vanilla (with ceramic diffuser, 4 leaf-shaped tea lights, scalloped wax tart & natural reed botanicals).',
      specs: ['2 Gift Box Editions: Lavender & Vanilla', 'Includes Ceramic Diffuser Burner + Tea Lights', 'Includes Aroma Oil / Scalloped Wax Tart', 'Ready-to-Gift Ribboned Window Packaging'],
      fragranceNotes: ['French Lavender Mist', 'Warm Vanilla Botanical'],
      craftNote: 'Complete Home Fragrance Ritual Box'
    }
  ]);

  readonly categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'festive', label: 'Festive & Traditional' },
    { id: 'jars', label: 'Signature & Glitter Jars' },
    { id: 'coffee', label: 'Coffee Collection' },
    { id: 'wellness', label: 'Wellness & Sachets' },
    { id: 'hampers', label: 'Luxury Gift Hampers' }
  ];

  readonly masterPriceTable = [
    { item: 'Floating Daisy Candles', category: 'Festive & Traditional', price: 15, unit: '/ piece' },
    { item: 'Motichoor Ladoo Candle', category: 'Festive & Traditional', price: 25, unit: '/ piece' },
    { item: 'Festive Anar (Anaar) Candle', category: 'Festive & Traditional', price: 25, unit: '/ piece' },
    { item: 'Bomb Candles (Sutli Bomb & Pataka)', category: 'Festive & Traditional', price: 25, unit: '/ piece' },
    { item: 'Jar Candle — 30 ml (Without Fragrance)', category: 'Our Jar Collection', price: 29, unit: '/ jar' },
    { item: 'Jar Candle — 30 ml (With Fragrance: Lavender, Rose, Lemongrass, etc.)', category: 'Our Jar Collection', price: 49, unit: '/ jar' },
    { item: 'Coffee Crush Candle — 30 ml', category: 'Our Coffee Collection', price: 49, unit: '/ jar' },
    { item: 'Botanical Wax Sachet (Wardrobe & Drawer Tablet)', category: 'Wellness & Sachets', price: 50, unit: '/ piece' },
    { item: 'Tea Light Candles (Box / Pack of 10)', category: 'Signature Jars & Tea Lights', price: 99, unit: '/ box' },
    { item: 'Decorative Floral Urli Candle (10–12 cm Bowl)', category: 'Festive & Traditional', price: 99, unit: '/ piece' },
    { item: 'Glitter Candles — 30 ml', category: 'Glitter Candles', price: 99, unit: '/ jar' },
    { item: 'Jar Candle — 100 ml (Without Fragrance)', category: 'Our Jar Collection', price: 129, unit: '/ jar' },
    { item: 'Jar Candle — 100 ml (With Fragrance)', category: 'Our Jar Collection', price: 149, unit: '/ jar' },
    { item: 'Coffee Crush Candle — 100 ml', category: 'Our Coffee Collection', price: 149, unit: '/ jar' },
    { item: 'Iced Latte Candle — 100 ml', category: 'Our Coffee Collection', price: 169, unit: '/ jar' },
    { item: 'Candy Jar Candle (200 g Decorative Reusable Glass Jar)', category: 'Festive & Traditional', price: 179, unit: '/ piece' },
    { item: 'Glitter Candles — 100 ml', category: 'Glitter Candles', price: 199, unit: '/ jar' },
    { item: 'Mocha Muse Candle — 100 ml', category: 'Our Coffee Collection', price: 199, unit: '/ jar' },
    { item: 'Jar Candle — 200 ml (All Fragrances)', category: 'Our Jar Collection', price: 259, unit: '/ jar' },
    { item: 'Coffee Crush Candle — 200 ml', category: 'Our Coffee Collection', price: 259, unit: '/ jar' },
    { item: 'Iced Latte Candle — 200 ml', category: 'Our Coffee Collection', price: 259, unit: '/ jar' },
    { item: 'Mocha Muse Candle — 200 ml', category: 'Our Coffee Collection', price: 299, unit: '/ jar' },
    { item: '7 Chakra Candle Set (Premium Gift Box of 7)', category: 'Wellness & Sachets', price: 329, unit: '/ set' }
  ];

  readonly lookbookPhotos = signal<LookbookPhoto[]>([
    { id: '1', title: 'Signature Collection Menu', caption: 'Complete Candle & Coffee Lineup', image: IMG['img_12_27_52'] },
    { id: '2', title: 'Candle Collection Overview', caption: 'Handpoured Jars, Tealights & Specials', image: IMG['img_12_27_51'] },
    { id: '3', title: 'Festive Flatlay Showcase', caption: 'Candles for Every Little Moment', image: IMG['img_12_27_55_2'] },
    { id: '4', title: 'Our Fragrance Atelier', caption: '5 Mood-Lifting Signature Scents', image: IMG['img_12_27_56'] },
    { id: '5', title: 'Urli & Candy Jar Craft', caption: 'Traditional & Modern Heirloom Vessels', image: IMG['img_12_27_57'] },
    { id: '6', title: 'Candy Jar Candle', caption: '200g Embossed Glass Jar • ₹179', image: IMG['img_12_27_55'] },
    { id: '7', title: '7 Chakra Candle Set', caption: 'Balance Your Energy • ₹329', image: IMG['img_12_27_55_1'] },
    { id: '8', title: 'Festive Anar Candle', caption: 'A Festive Spark for Your Decor • ₹25', image: IMG['img_12_27_53_2'] },
    { id: '9', title: 'Bomb Candles', caption: 'Playful Sutli Bomb & Pataka • ₹25', image: IMG['img_12_27_55_3'] },
    { id: '10', title: 'Motichoor Ladoo Candle', caption: 'A Sweet Touch for Festive Decor • ₹25', image: IMG['img_12_27_54_1'] },
    { id: '11', title: 'Floating Daisy Candles', caption: 'Sculpted Water Blooms • ₹15', image: IMG['img_12_27_54'] },
    { id: '12', title: 'Tea Light Candles Box', caption: 'Pack of 10 Jewel-Toned Tealights • ₹99', image: IMG['img_12_27_54_2'] },
    { id: '13', title: 'Botanical Wax Sachet', caption: 'Star Anise & Dried Orange • ₹50', image: IMG['img_12_27_52_1'] },
    { id: '14', title: 'Artisan Wax Tablets', caption: 'Handcrafted Botanical Embeds', image: IMG['img_12_27_52_2'] },
    { id: '15', title: 'Wardrobe Fragrance Ritual', caption: 'Warm, Clean Luxury for Months', image: IMG['img_12_27_53'] },
    { id: '16', title: 'Linen & Closet Sachet', caption: 'Natural Soy Wax & Jute Cord', image: IMG['img_12_27_53_1'] },
    { id: '17', title: 'Royal Festive Hamper (Potli)', caption: 'Candles, Mithai & Dry Fruits Potli', image: IMG['img_12_27_57_1'] },
    { id: '18', title: 'Deluxe Festive Hamper (Jar)', caption: 'Candles, Mithai & Dry Fruits Glass Jar', image: IMG['img_12_27_58'] },
    { id: '19', title: '30g Botanical Trio & Card', caption: 'Lavender, Rose & Lemongrass Jars', image: IMG['img_12_28_09'] },
    { id: '20', title: 'Daisy Wax Bouquet Card', caption: 'Handmade Keepsake with Matchstick', image: IMG['img_12_28_08_2'] },
    { id: '21', title: 'Twin Sunflower Emerald Jar', caption: 'Sculpted Golden Sunflower Toppers', image: IMG['img_12_28_11'] },
    { id: '22', title: 'Morning Balcony Glow', caption: 'Frosted Emerald Sunflower Tumbler', image: IMG['img_12_28_11_1'] },
    { id: '23', title: 'Twilight Balcony Flame', caption: 'Layered Sunset Glow at Dusk', image: IMG['img_12_28_10'] },
    { id: '24', title: 'Lavender Aroma Diffuser Set', caption: 'Ceramic Burner, Oil & Lotus Candle', image: IMG['img_12_28_08_1'] },
    { id: '25', title: 'Vanilla Home Fragrance Set', caption: 'Diffuser, Leaf Tealights & Wax Tart', image: IMG['img_12_27_59'] },
    { id: '26', title: 'Saanjh Glow Official Seal', caption: 'Light Up the Little Moments', image: IMG['img_12_28_01_1'] },
    { id: '27', title: 'Frosted Ivory Marigold Jar', caption: 'Crowned with Sculpted Wax Bloom', image: IMG['img_12_28_02'] },
    { id: '28', title: 'Frosted Emerald Festive Jar', caption: 'Styled with Marigold Petals', image: IMG['img_12_28_01_2'] },
    { id: '29', title: 'Small-Batch Pouring Tray', caption: 'Handpoured Sapphire & Emerald Tealights', image: IMG['img_12_27_59_1'] },
    { id: '30', title: 'Saffron Cloud-Swirl Jar', caption: 'Hand-Marbled Soy Wax Tumbler', image: IMG['img_12_28_00_1'] },
    { id: '31', title: 'Golden Marble Glow', caption: 'Warm Evening Candlelight', image: IMG['img_12_28_00_2'] },
    { id: '32', title: 'Warm Studio Collection', caption: 'Tealight Box & Frosted Glass Jars', image: IMG['img_12_28_01'] },
    { id: '33', title: 'Petite 30ml Aroma Trio', caption: 'Tangerine, Lemongrass & Lavender', image: IMG['img_12_28_00'] },
    { id: '34', title: 'Ivory Botanical Melt Jar', caption: 'Soft Evening Ambience', image: IMG['img_12_28_05'] },
    { id: '35', title: 'Petite Lemongrass Jar', caption: 'Hand-Labeled Apothecary Vessel', image: IMG['img_12_28_02_1'] },
    { id: '36', title: 'Atelier Shelf Curation', caption: 'Ready for Dispatch in Noida', image: IMG['img_12_28_06'] },
    { id: '37', title: 'Evening Sanctuary Glow I', caption: 'Soft Flicker Across the Studio', image: IMG['img_12_28_07'] },
    { id: '38', title: 'Evening Sanctuary Glow II', caption: 'Handpoured Warmth at Twilight', image: IMG['img_12_28_07_1'] },
    { id: '39', title: 'Evening Sanctuary Glow III', caption: 'Light Up the Little Moments', image: IMG['img_12_28_08'] }
  ]);

  readonly featuredProducts = computed(() => {
    const ids = ['urli-candle', 'candy-jar-candle', 'chakra-set', 'mocha-muse-candle'];
    return this.products().filter(p => ids.includes(p.id));
  });

  readonly filteredProducts = computed(() => {
    const cat = this.selectedCategory();
    const q = this.searchQuery().trim().toLowerCase();
    return this.products().filter(item => {
      const matchesCat = cat === 'all' || item.category === cat;
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.story.toLowerCase().includes(q) ||
        item.fragranceNotes.some(n => n.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  });

  readonly visibleLookbookPhotos = computed(() => {
    return this.archiveExpanded() ? this.lookbookPhotos() : this.lookbookPhotos().slice(0, 12);
  });

  readonly shortlistedProducts = computed(() => {
    const ids = this.shortlistIds();
    return this.products().filter(p => ids.includes(p.id));
  });

  readonly shortlistedTotal = computed(() => {
    return this.shortlistedProducts().reduce((acc, item) => acc + (item.price ?? 0), 0);
  });

  setPage(page: 'story' | 'catalog' | 'contact'): void {
    this.activePage.set(page);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  openCategoryInCatalog(category: string): void {
    this.selectedCategory.set(category);
    this.setPage('catalog');
  }

  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.searchQuery.set(target ? target.value : '');
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }

  getActiveProductImage(product: ProductItem): string {
    const map = this.activeThumbnails();
    return map[product.id] || product.image;
  }

  selectProductThumbnail(productId: string, imageUrl: string): void {
    this.activeThumbnails.update(prev => ({ ...prev, [productId]: imageUrl }));
  }

  openProductModal(product: ProductItem): void {
    this.selectedProduct.set(product);
    this.modalActiveImage.set(product.image);
  }

  closeProductModal(): void {
    this.selectedProduct.set(null);
    this.modalActiveImage.set('');
  }

  setModalImage(imgUrl: string): void {
    this.modalActiveImage.set(imgUrl);
  }

  openImageModal(url: string, caption: string): void {
    this.lightboxImage.set({ url, caption });
  }

  closeImageModal(): void {
    this.lightboxImage.set(null);
  }

  toggleArchiveExpanded(): void {
    this.archiveExpanded.update(v => !v);
  }

  isShortlisted(id: string): boolean {
    return this.shortlistIds().includes(id);
  }

  toggleShortlist(id: string): void {
    const current = this.shortlistIds();
    if (current.includes(id)) {
      this.shortlistIds.set(current.filter(item => item !== id));
      this.showToast('Removed from your Call Inquiry Note.');
    } else {
      this.shortlistIds.set([...current, id]);
      this.showToast('Added to your Call Inquiry Note for 94562 21293!');
    }
  }

  clearShortlist(): void {
    this.shortlistIds.set([]);
    this.showToast('Call Inquiry Note cleared.');
  }

  copyShortlistSummary(): void {
    const items = this.shortlistedProducts();
    const lines = items.map(
      i => `• ${i.name}: ${i.price ? '₹' + i.price + ' (' + i.priceUnit + ')' : 'Custom Hamper Quote'}`
    );
    const summary = [
      'Saanjh Glow — Phone Order Inquiry (Call: 94562 21293)',
      'Address: A-16/7, Shiv Shakti Apartments, Sector-71, Noida',
      ...lines
    ].join('\n');
    this.copyText(summary, 'Order inquiry summary copied! Call 94562 21293 to place your order.');
  }

  copyText(text: string, message: string): void {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else if (typeof document !== 'undefined') {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
    } catch {
      // Fallback handled silently
    }
    this.showToast(message);
  }

  showToast(msg: string): void {
    this.toastMessage.set(msg);
  }

  clearToast(): void {
    this.toastMessage.set('');
  }
}