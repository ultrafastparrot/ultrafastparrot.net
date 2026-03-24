const SITES: {
  name: string;
  slug: string;
  url: string;
  email: string;
}[] = [
  {
    name: "Ingo Wolf",
    slug: "ingo",
    url: "https://ingo.au",
    email: "me@ingo.au",
  },
  {
    name: "Coding Corner",
    slug: "kyle",
    url: "https://codingcorner.dev",
    email: "kyle@codingcorner.dev",
  },
  {
    name: "Josh",
    slug: "josh",
    url: "https://slitro.studio",
    email: "heya@slitro.studio.",
  },
  {
    name: "Lexy",
    slug: "lex",
    url: "https://lexy.boo",
    email: "me@lexy.boo",
  },
   {
    name: "Areg",
    slug: "areg",
    url: "https://aregus.me",
    email: "aregazatyank@outlook.com",
  },
  {
    name: "Devtochukwu",
    slug: "devtochukwu",
    url: "https://devtochukwu.me",
    email: "ntmark2004@gmail.com"
  }
];

export default SITES.sort((a, b) => a.name.localeCompare(b.name));
