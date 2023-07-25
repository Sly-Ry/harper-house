// import cover from '../assets/images/cover.jpg';
import pro1 from '../assets/images/pro_images/pro_red.jpg'
import pro2 from '../assets/images/pro_images/pro_the-pillowman.jpg'
import pro3 from '../assets/images/pro_images/pro_the-last-five-years.jpg'
import pro4 from '../assets/images/pro_images/pro_not-omaha.jpg'
import pro5 from '../assets/images/pro_images/pro_les-miserables.jpg'

export const ArchiveItems = [
    {
        id: 1,
        yr: "2021 - 2022",
        sh_yr: "2021 - 22",
        title: "Lost & Found",
        path: 'lost-and-found',
        showList: [
            {
                id: 1,
                type: "MAIN STAGE EVENT",
                title: 'RED',
                by: 'John Logan',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'February 23 - March 12, 2023',
                img: pro1,
                synopsis: "Raw and provocative, RED is a searing portrait of an artist's ambition and vulnerability as he tries to create a definitive work for an extraordinary setting.",
                path: 'red',
                video: 'https://www.youtube.com/embed/XH1Zj2llefU',
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 2,
                type: "MAIN STAGE EVENT",
                title: 'The Pillowman',
                by: 'Martin McDonagh',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'October 19 - Novemeber 3, 2023',
                img: pro2,
                synopsis: "In a totalitarian state a writer is questioned by the authorities about a spate of murders that bear similarities to their short stories. Is this life imitating art or something more sinister?",
                fontColor: 'white',
                fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                path: 'the-pillowman',
                video: "https://www.youtube.com/embed/44z0MOwwyjM",
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 3,
                type: "MAIN STAGE EVENT",
                title: 'The Last Five Years',
                by: 'Jason Robert Brown',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'December 2 - January 16, 2024',
                img: pro3,
                synopsis: "An emotionally powerful and intimate musical about two New Yorkers in their twenties who fall in and out of love over the course of five years.",
                fontColor: 'white',
                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                path: 'the-last-five-years',
                video: 'https://www.youtube.com/embed/XH1Zj2llefU',
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 4,
                title: 'Not Omaha',
                type: "MAIN STAGE EVENT",
                by: 'Paul Kruse',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'February 18 - March 4, 2024',
                img: pro4,
                synopsis: "Not Omaha is a surreal, darkly odd story about the end of the world in a small town. What if the apocalypse was like the death of a parent - natural, strange and sometimes beautiful?",
                fontColor: 'orange',
                fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                path: 'not-omaha',
                video: "https://www.youtube.com/embed/44z0MOwwyjM",
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 5,
                type: "MAIN STAGE EVENT",
                title: 'Les Miserables',
                by: 'Victor Hugo',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'March 10 - April 3, 2024',
                img: pro5,
                synopsis: "The story of a peasant named Jean Valjean and his desire for redemption, pursued by an insatiable officer, and swept into the beating heart of revolution.",
                tag: "The story of a peasant and his desire for redemption.",
                fontColor: 'gold',
                fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                path: 'les-miserables',
                video: 'https://www.youtube.com/embed/XH1Zj2llefU',
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            }
        ]
        // videoList: [
        //     {
        //         id: 1,
        //         src: "link",
        //     },
        //     {
        //         id: 2,
        //         src: "link",
        //     },
        //     {
        //         id: 3,
        //         src: "link",
        //     },
        //     {
        //         id: 4,
        //         src: "link",
        //     },
        //     {
        //         id: 5,
        //         src: "link",
        //     },
        //     {
        //         id: 6,
        //         src: "link",
        //     },
        // ],
        // photoList: [
        //     {
        //         id: 1,
        //         title: 'RED',
        //         cover: cover,
        //         img: pro1,
        //         fontColor: 'crimson',
        //         fontFamily: "'Times New Roman', Times, serif",
        //         path: 'red',
        //         photos: [
        //             {
        //                 id: 1,
        //                 src: pro1,
        //             },
        //             {
        //                 id: 2,
        //                 src: pro1,
        //             },
        //             {
        //                 id: 3,
        //                 src: pro1,
        //             },
        //             {
        //                 id: 4,
        //                 src: pro1,
        //             },
        //             {
        //                 id: 5,
        //                 src: pro1,
        //             },
        //             {
        //                 id: 6,
        //                 src: pro1,
        //             },
        //             {
        //                 id: 7,
        //                 src: pro1,
        //             },
        //             {
        //                 id: 8,
        //                 src: pro1,
        //             },
        //             {
        //                 id: 9,
        //                 src: pro1,
        //             },

        //         ]
        //     },
        //     {
        //         id: 2,
        //         title: 'Show',
        //         cover: cover,
        //         img: pro1,
        //         fontColor: 'white',
        //         fontFamily: "'Times New Roman', Times, serif",
        //         path: 'red',
        //     },
        //     {
        //         id: 3,
        //         title: 'Show',
        //         cover: cover,
        //         img: pro1,
        //         fontColor: 'white',
        //         fontFamily: "'Times New Roman', Times, serif",
        //         path: 'red',
        //     },
        //     {
        //         id: 4,
        //         title: 'Show',
        //         cover: cover,
        //         img: pro1,
        //         fontColor: 'white',
        //         fontFamily: "'Times New Roman', Times, serif",
        //         path: 'red',
        //     },
        // ],
    },
    {
        id: 2,
        yr: "2022 - 2023",
        sh_yr: "2022 - 23",
        title: "Sky's the Limit",
        path: "sky's-the-limit",
        showList: [
            {
                id: 1,
                type: "MAIN STAGE EVENT",
                title: 'RENT',
                by: 'John Logan',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'February 23 - March 12, 2023',
                img: pro1,
                fontColor: 'crimson',
                fontFamily: "'Times New Roman', Times, serif",
                synopsis: "Raw and provocative, RED is a searing portrait of an artist's ambition and vulnerability as he tries to create a definitive work for an extraordinary setting.",
                path: 'red',
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 2,
                type: "MAIN STAGE EVENT",
                title: 'Footloose: The Musical',
                by: 'Martin McDonagh',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'October 19 - Novemeber 3, 2023',
                img: pro2,
                synopsis: "In a totalitarian state a writer is questioned by the authorities about a spate of murders that bear similarities to their short stories. Is this life imitating art or something more sinister?",
                fontColor: 'white',
                fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                path: 'the-pillowman',
                video: "https://www.youtube.com/embed/44z0MOwwyjM",
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 3,
                type: "MAIN STAGE EVENT",
                title: 'Fun Home',
                by: 'Jason Robert Brown',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'December 2 - January 16, 2024',
                img: pro3,
                synopsis: "An emotionally powerful and intimate musical about two New Yorkers in their twenties who fall in and out of love over the course of five years.",
                fontColor: 'white',
                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                path: 'the-last-five-years',
                video: 'https://www.youtube.com/embed/XH1Zj2llefU',
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 4,
                title: 'Agamemnon',
                type: "MAIN STAGE EVENT",
                by: 'Paul Kruse',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'February 18 - March 4, 2024',
                img: pro4,
                synopsis: "Not Omaha is a surreal, darkly odd story about the end of the world in a small town. What if the apocalypse was like the death of a parent - natural, strange and sometimes beautiful?",
                fontColor: 'orange',
                fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                path: 'not-omaha',
                video: "https://www.youtube.com/embed/44z0MOwwyjM",
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 5,
                type: "MAIN STAGE EVENT",
                title: 'Water By the Spoonful',
                by: 'Victor Hugo',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'March 10 - April 3, 2024',
                img: pro5,
                synopsis: "The story of a peasant named Jean Valjean and his desire for redemption, pursued by an insatiable officer, and swept into the beating heart of revolution.",
                tag: "The story of a peasant and his desire for redemption.",
                fontColor: 'gold',
                fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                path: 'les-miserables',
                video: 'https://www.youtube.com/embed/XH1Zj2llefU',
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        yr: "2023 - 2024",
        sh_yr: "2023 - 24",
        title: "Distant Memories",
        path: 'distant-memories',
        showList: [
            {
                id: 1,
                type: "MAIN STAGE EVENT",
                title: 'Beetlejuice: The Musical',
                by: 'John Logan',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'February 23 - March 12, 2023',
                img: pro1,
                fontColor: 'crimson',
                fontFamily: "'Times New Roman', Times, serif",
                synopsis: "Raw and provocative, RED is a searing portrait of an artist's ambition and vulnerability as he tries to create a definitive work for an extraordinary setting.",
                path: 'red',
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 2,
                type: "MAIN STAGE EVENT",
                title: 'The Cherry Orchard',
                by: 'Martin McDonagh',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'October 19 - Novemeber 3, 2023',
                img: pro2,
                synopsis: "In a totalitarian state a writer is questioned by the authorities about a spate of murders that bear similarities to their short stories. Is this life imitating art or something more sinister?",
                fontColor: 'white',
                fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                path: 'the-pillowman',
                video: "https://www.youtube.com/embed/44z0MOwwyjM",
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 3,
                type: "MAIN STAGE EVENT",
                title: 'Waiting for Gadot',
                by: 'Jason Robert Brown',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'December 2 - January 16, 2024',
                img: pro3,
                synopsis: "An emotionally powerful and intimate musical about two New Yorkers in their twenties who fall in and out of love over the course of five years.",
                fontColor: 'white',
                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                path: 'the-last-five-years',
                video: 'https://www.youtube.com/embed/XH1Zj2llefU',
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 4,
                title: 'Topdog/Underdog',
                type: "MAIN STAGE EVENT",
                by: 'Paul Kruse',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'February 18 - March 4, 2024',
                img: pro4,
                synopsis: "Not Omaha is a surreal, darkly odd story about the end of the world in a small town. What if the apocalypse was like the death of a parent - natural, strange and sometimes beautiful?",
                fontColor: 'orange',
                fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                path: 'not-omaha',
                video: "https://www.youtube.com/embed/44z0MOwwyjM",
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 5,
                type: "MAIN STAGE EVENT",
                title: 'Assassins',
                by: 'Victor Hugo',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'March 10 - April 3, 2024',
                img: pro5,
                synopsis: "The story of a peasant named Jean Valjean and his desire for redemption, pursued by an insatiable officer, and swept into the beating heart of revolution.",
                tag: "The story of a peasant and his desire for redemption.",
                fontColor: 'gold',
                fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                path: 'les-miserables',
                url: 'https://www.youtube.com/embed/XH1Zj2llefU',
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        yr: "2024 - 2025",
        sh_yr: "2024 - 25",
        title: "Dreams of You",
        path: 'dreams-of-you',
        showList: [
            {
                id: 1,
                type: "MAIN STAGE EVENT",
                title: 'A Raisin in the Sun',
                by: 'John Logan',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'February 23 - March 12, 2023',
                img: pro1,
                synopsis: "Raw and provocative, RED is a searing portrait of an artist's ambition and vulnerability as he tries to create a definitive work for an extraordinary setting.",
                path: 'red',
                video: 'https://www.youtube.com/embed/XH1Zj2llefU',
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 2,
                type: "MAIN STAGE EVENT",
                title: 'The Cripple of Inishman',
                by: 'Martin McDonagh',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'October 19 - Novemeber 3, 2023',
                img: pro2,
                synopsis: "In a totalitarian state a writer is questioned by the authorities about a spate of murders that bear similarities to their short stories. Is this life imitating art or something more sinister?",
                fontColor: 'white',
                fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                path: 'the-pillowman',
                video: "https://www.youtube.com/embed/44z0MOwwyjM",
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 3,
                type: "MAIN STAGE EVENT",
                title: 'The Phantom of the Opera',
                by: 'Jason Robert Brown',
                producer: "HARPER HOUSE",
                director: 'Ryan Williams',
                date: 'December 2 - January 16, 2024',
                img: pro3,
                synopsis: "An emotionally powerful and intimate musical about two New Yorkers in their twenties who fall in and out of love over the course of five years.",
                fontColor: 'white',
                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                path: 'the-last-five-years',
                video: 'https://www.youtube.com/embed/XH1Zj2llefU',
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 4,
                title: 'Rosencrantz and Guildenstern Are Dead',
                type: "MAIN STAGE EVENT",
                by: 'Paul Kruse',
                producer: "HARPER HOUSE",
                director: 'Lindsey Ollinger',
                date: 'February 18 - March 4, 2024',
                img: pro4,
                synopsis: "Not Omaha is a surreal, darkly odd story about the end of the world in a small town. What if the apocalypse was like the death of a parent - natural, strange and sometimes beautiful?",
                fontColor: 'orange',
                fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                path: 'not-omaha',
                video: "https://www.youtube.com/embed/44z0MOwwyjM",
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            },
            {
                id: 5,
                type: "MAIN STAGE EVENT",
                title: 'Angels in America',
                by: 'Victor Hugo',
                producer: "HARPER HOUSE",
                director: 'Lindsey Ollinger',
                date: 'March 10 - April 3, 2024',
                img: pro5,
                synopsis: "The story of a peasant named Jean Valjean and his desire for redemption, pursued by an insatiable officer, and swept into the beating heart of revolution.",
                tag: "The story of a peasant and his desire for redemption.",
                fontColor: 'gold',
                fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                path: 'les-miserables',
                video: 'https://www.youtube.com/embed/XH1Zj2llefU',
                cast: [
                    {
                        name: "bob",
                        role: "protagonist"
                    },
                    {
                        name: "sam",
                        role: "antagonist"
                    }
                ],
                crew: [
                    {
                        name: 'bob',
                        role: 'producer'
                    },
                    {
                        name: 'sam',
                        role: 'designer'
                    }
                ]
            }
        ]
    }
]