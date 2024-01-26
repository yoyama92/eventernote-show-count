Array.from(document.querySelector("ul.gb_actors_list")?.querySelectorAll("li") ?? []).forEach(n => {
  n.querySelector("a").innerHTML += `<span style="font-size: 16px"> ${n.classList[2].substring(1)} </span>`;
});
