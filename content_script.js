Array.from(document.querySelector("ul.gb_actors_list")?.querySelectorAll("li") ?? []).forEach(n => {
  n.querySelector("a").textContent += ` ${n.classList[2].substring(1)}`;
});
