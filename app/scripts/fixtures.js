App.Artist.FIXTURES = [{ // Avril Lavigne
    id: 1,
    slug: "Avril-Lavigne",
    mbid: "0103c1cc-4a09-4a5d-a344-56ad99a77193",
    name: 1,
    sort_name: 6,
    start_date: new Date("1987"),
    end_date: null,
    type: 1,
    country: 1,
    gender: 2,
    disambiguation: null,
    last_updated: new Date(),
    
    aliases: [1],
    posts: [],
}, { // Rihanna
    id: 2,
    slug: "Rihanna",
    mbid: "73e5e69d-3554-40d8-8516-00cb38737a1c",
    name: 3,
    sort_name: 3,
    start_date: new Date("1988-02-20"),
    end_date: null,
    type: 1,
    country: 2,
    gender: 2,
    disambiguation: "Barbadian R&B/pop singer",
    
    aliases: [2, 3, 4],
    annotations: [],
}];

App.ArtistName.FIXTURES = [{
    id: 1,
    artist: 1,
    name: "Avril Lavigne",
}, {
    id: 2,
    artist: 1,
    name: "アヴリル・ラヴィーン",
}, {
    id: 3,
    artist: 2,
    name: "Rihanna",
}, {
    id: 4,
    artist: 2,
    name: "Rhianna",
}, {
    id: 5,
    artist: 2,
    name: "Robyn Rihanna Fenty",
}, {
    id: 6,
    artist: 1,
    name: "Lavigne, Avril",
}];

App.ArtistAlias.FIXTURES = [{
    id: 1,
    artist: 1,
    name: 2,
    locale: "zh",
    last_updated: new Date(),
    type: 10,
    sort_name: 2,
    start_date: new Date(),
    end_date: null,
    primary_for_locale: true,
}];

App.ArtistType.FIXTURES = [{
    id: 1,
    name: "person"
}, {
    id: 2,
    name: "band",
}];

App.ArtistAliasType.FIXTURES = [{
    id: 1,
    name: "misspelling",
}, {
    id: 2,
    name: "variant",
}, {
    id: 3,
    name: "number",
}, {
    id: 4,
    name: "stylized name",
}, {
    id: 5,
    name: "missing title",
}, {
    id: 6,
    name: "acronym",
}, {
    id: 7,
    name: "initials",
}, {
    id: 8,
    name: "lead performer",
}, {
    id: 9,
    name: "misencoding",
}, {
    id: 10,
    name: "localization"
}, {
    id: 11,
    name: "transliteration"
}, {
    id: 12,
    name: "translated",
}, {
    id: 13,
    name: "legal change",
}];

App.Country.FIXTURES = [{
    id: 1,
    name: "UK",
}, {
    id: 2,
    name: "BB",
}];

App.Gender.FIXTURES = [{
    id: 1,
    name: "male",
}, {
    id: 2,
    name: "female",
}, {
    id: 3,
    name: "other",
}];

App.Post.FIXTURES = [{
    id: 1,
    user: 1,
    text: "<3 Avril!",
    created: new Date(),
}];

App.User.FIXTURES = [{
    id: 1,
    name: "edgewyn",
}];
