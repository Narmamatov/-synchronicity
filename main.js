fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((unp) => {
    unp.forEach((element) => {
      let body = document.querySelector("body");
      let box = document.createElement("div");
      let population = document.createElement("h2");
      let region = document.createElement("h3");
      let image = document.createElement("img");
      let name = document.createElement("h1");
      body.append(box);
      box.append(name);
      box.append(region);
      box.append(population);
      box.append(image);
      name.append("Имя страны: " + element.name.common);
      population.append("Калкы: " + element.population);
      region.append("Регион: " + element.region);
      image.src = element.flags.png;
      console.log(image);
    });
  });
