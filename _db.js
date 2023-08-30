let games = [
    { id: "1", title: "Elden Ring", platform: ["PC", "Xbox", "PS5"] },
    { id: "2", title: "Zelda", platform: ["Switch"] },
    { id: "3", title: "Pokemon Scarlet", platform: ["PS5", "Xbox"] },
];
let authors = [
    { id: "1", name: "John Doe", verified: true },
    { id: "2", name: "Jane Smith", verified: false },
    { id: "3", name: "Michael Johnson", verified: true },
];
let reviews = [
    { id: "1", rating: "4", content: "Great game!", author_id: "1", game_id: "1" },
    { id: "2", rating: "3", content: "Needs improvement.", author_id: "2", game_id: "1" },
    { id: "3", rating: "5", content: "Loved it!", author_id: "3", game_id: "2" },
    { id: "4", rating: "2", content: "Not my favorite.", author_id: "1", game_id: "2" },
    { id: "5", rating: "4", content: "Solid gameplay.", author_id: "2", game_id: "3" },
];

export default { games, authors, reviews };
