export const goTo = name => e => {
  e.preventDefault();

  const section = document.getElementById(name);
  if (section) return section.scrollIntoView({ behavior: "smooth" });
};
