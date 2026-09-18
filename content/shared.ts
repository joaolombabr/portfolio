/** Locale-independent facts. Everything a visitor reads lives in content/<locale>/. */
export const shared = {
  name: "João Paulo Lomba",
  url: "https://joaolomba.vercel.app",
  email: "joaolombadev@gmail.com",
  github: "https://github.com/joaolombabr",
  linkedin: "https://www.linkedin.com/in/joaolombadev/",
} as const;

/** Route of each locale. English sits at the root because the English CV and the GitHub profile link there. */
export const localePath = { en: "/", pt: "/pt" } as const;
