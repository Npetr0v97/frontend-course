export const places = [
  {
    id: 0,
    name: "Bo-Kaap in Cape Town, South Africa",
    description:
      "The tradition of choosing bright colors for houses began in the late 20th century.",
    imageId: "K9HVAGH",
  },
  {
    id: 1,
    name: "Rainbow Village in Taichung, Taiwan",
    description:
      "To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.",
    imageId: "9EAYZrt",
  },
  {
    id: 2,
    name: "Macromural de Pachuca, Mexico",
    description:
      "One of the largest murals in the world covering homes in a hillside neighborhood.",
    imageId: "DgXHVwu",
  },
  {
    id: 3,
    name: "Selarón Staircase in Rio de Janeiro, Brazil",
    description:
      'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people."',
    imageId: "aeO3rpI",
  },
  {
    id: 4,
    name: "Burano, Italy",
    description:
      "The houses are painted following a specific color system dating back to 16th century.",
    imageId: "kxsph5C",
  },
  {
    id: 5,
    name: "Chefchaouen, Marocco",
    description:
      "There are a few theories on why the houses are painted blue, including that the color repells mosquitos or that it symbolizes sky and heaven.",
    imageId: "rTqKo46",
  },
  {
    id: 6,
    name: "Gamcheon Culture Village in Busan, South Korea",
    description:
      "In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.",
    imageId: "ZfQOOzf",
  },
];

export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}

export const foods = [
  {
    id: 0,
    name: "Sushi",
    description:
      "Sushi is a traditional Japanese dish of prepared vinegared rice",
  },
  {
    id: 1,
    name: "Dal",
    description:
      "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added",
  },
  {
    id: 2,
    name: "Pierogi",
    description:
      "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water",
  },
  {
    id: 3,
    name: "Shish kebab",
    description:
      "Shish kebab is a popular meal of skewered and grilled cubes of meat.",
  },
  {
    id: 4,
    name: "Dim sum",
    description:
      "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch",
  },
];
