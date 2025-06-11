import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const Noisk8Config: Configuration = {
  title: "Noisk8",
  subTitle: "Vynil Collection",
  brandTitle: "Noisk8",

  description: "Demo Site",

  site: "https://yukina-blog.vercel.app",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },

    
   
  ],

  username: "WhitePaper 白芷",
  sign: "Ad Astra Per Aspera.",
  avatarUrl: "https://s2.loli.net/2025/01/25/FPpTrQSezM8ivbl.webp",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/WhitePaper233",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/22433608",
    },
    {
      icon: "mingcute:netease-music-line",
      link: "https://music.163.com/#/user/home?id=125291648",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://i.discogs.com/wUrGPYX7BSD8f7OZyOj4y785d4VMZHtMGMeSQgm7oiY/rs:fit/g:sm/q:90/h:581/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4OTQy/ODE0LTE2MjIzNjQw/MDMtNzc0OC5qcGVn.jpeg",
    "https://i.discogs.com/tW0XmsWIWSvbwj2qsYocW7h9U_ZPVY6459U2Tf6Ph-s/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjc0/ODk5LTE1MjA0NTI4/NzMtNjkxMy5qcGVn.jpeg",
    "https://i.discogs.com/P_x39cO0VkUEXZAjNjAR52md1Pi6OmyVMoP9TN61nhE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NTc4/My0xMjc3MDI2MTQw/LmpwZWc.jpeg",
    "https://i.discogs.com/MEQS6svClasayBvKLLUuJfvPXSy5zmexUA6qEsifAYA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTg0/MzM1LTE2Mzk0ODIx/MzAtNjY5NS5qcGVn.jpeg",
    "https://i.discogs.com/khAFBxYC__3b7FqPXUwQNo7CZvcUntET2LhRGUuawO8/rs:fit/g:sm/q:90/h:240/w:320/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjU1/NjUtMTIwOTgwNDIy/MC5qcGVn.jpeg",
    "https://i.discogs.com/3zcsYhQUBliUG2Mncd5yUcT6Fu63LDBa9tYu1UvAc4Y/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1MDMx/MS0xMzk5NTc1NTI2/LTc5NTEuanBlZw.jpeg",
    "https://i.discogs.com/Jt8Cm8tYj8dTBtVYIrhO9bS76wAtnqKNtn13643fguY/rs:fit/g:sm/q:90/h:354/w:345/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjc2/MDMtMTE5Nzc5NTg1/Ni5qcGVn.jpeg",
    "https://i.discogs.com/msSagMD2R5RXVKRvt2eVkb-6KWbbhaXBzsgRvBYp5dE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMDE3/MzkxLTE3MTM0Mzgx/NjktNDQ2MS5qcGVn.jpeg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default Noisk8Config;