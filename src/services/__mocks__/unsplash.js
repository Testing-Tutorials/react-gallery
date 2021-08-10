const fakeData = [
  {
    id: 1,
    categories: [{ title: "Nice image" }],
    user: { name: "Mr. Photographer" },
    links: { html: "https://www.mywebsite.com" },
    urls: { small: "https://www.image.com" },
    likes: 10,
  },
];

export default async (term) => {
  return await new Promise((resolve) => {
    resolve(fakeData);
  });
};
