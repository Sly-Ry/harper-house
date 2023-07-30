import photo3 from '../assets/images/photo3.jpg'
// import pro1 from '../assets/images/pro_images/pro_red.jpg'
// import pro2 from '../assets/images/pro_images/pro_the-pillowman.jpg'
// import pro3 from '../assets/images/pro_images/pro_the-last-five-years.jpg'
// import pro4 from '../assets/images/pro_images/pro_not-omaha.jpg'
// import pro5 from '../assets/images/pro_images/pro_les-miserables.jpg'
// import cover from '../assets/images/cover.jpg'

export const navItems = [
    {
        id: 1,
        title: 'SHOWS & EVENTS',
        path: '/shows-events',
        submenu: [
            {
                id: 1,
                title: 'Current Season',
                path: 'current-season',
                photo: photo3,
                text: "What's in store."
            },
            {
                id: 2,
                title: 'Coming Soon',
                path: 'coming-soon',
                photo: photo3,
                text: "What's to come."
            },
            {
                id: 3,
                title: 'Season Pass',
                path: 'season-pass',
                photo: photo3,
                text: "Stay a while."
            },
            {
                id: 4,
                title: 'Subscribe',
                path: 'subscribe',
                photo: photo3,
                text: "Wander the halls."
            },
            // {
            //     id: 5,
            //     title: 'Discounts',
            //     path: 'discounts',
            //     photo: photo3,
            //     text: "Quid pro quo."
            // },
            // {
            //     id: 5,
            //     title: 'Calendar',
            //     path: 'calendar',
            //     photo: photo3,
            //     text: "Chart the course."
            // }
        ]
    },
    {
        id: 2,
        title: 'VISITING',
        path: '/visit',
        submenu: [
            // {
            //     id: 1,
            //     title: 'Venues',
            //     path: '/visit/venues',
            //     photo: photo3,
            //     text: "Stay a while.",
            //     submenu: [
            //         {
            //             id: 1,
            //             title: 'The Red Deck',
            //             path: 'the-red-deck',
            //             photo: photo3,
            //             text: "What's in store."
            //         },
            //         {
            //             id: 1,
            //             title: 'The Gallery',
            //             path: 'the-gallery',
            //             photo: photo3,
            //             text: "What's in store."
            //         }
            //     ]
            // },
            {
                id: 1,
                title: 'Parking',
                path: 'parking',
                photo: photo3,
                text: "What's in store."
            },
            {
                id: 2,
                title: 'Tours',
                path: 'tours',
                photo: photo3,
                text: "What's in store."
            },
            {
                id: 3,
                title: 'Accessibility',
                path: 'accessibility',
                photo: photo3,
                text: "What's in store."
            }
        ]
    },
    {
        id: 3,
        title: 'ARCHIVES',
        path: '/archives',
        submenu: [
            {
                id: 1,
                title: "S4: 2024 - 25",
                title2: "S4: 2024 - 25 || Dreams of You",
                sh_yr: "2023 - 24",
                name: "Dreams of You",
                path: 'dreams-of-you',
                showList: []
            },
            {
                id: 2,
                title: "S3: 2023 - 24",
                title2: "S3: 2023 - 24 || Distant Memories",
                sh_yr: "2023 - 24",
                name: "Distant Memories",
                path: 'distant-memories',
                showList: []
            },
            {
                id: 3,
                title: "S2: 2022 - 23",
                title2: "S1: 2022 - 23 || Sky's the Limit",
                sh_yr: "2022 - 23",
                name: "Sky's the Limit",
                path: "sky's-the-limit",
                showList: []
            },
            {
                id: 4,
                title: "S1: 2021 - 22",
                title2: "S1: 2021 - 22 || Lost & Found",
                sh_yr: "2021 - 22",
                name: "Lost & Found",
                path: 'lost-and-found',
                showList: []
            }
        ]
    },
    {
        id: 4,
        title: 'SUPPORT US',
        path: '/support',
        submenu: [
            {
                id: 1,
                title: 'Membership',
                path: 'membership',
                photo: photo3,
                text: "What's in store."
            },
            {
                id: 2,
                title: 'Sponsorship',
                path: 'sponsorship',
                photo: photo3,
                text: "What's in store."
            },
            {
                id: 3,
                title: 'Donate',
                path: 'donate',
                photo: photo3,
                text: "What's in store."
            }
        ]
    },
    {
        id: 5,
        title: 'OPPORTUNITY',
        path: '/oppo',
        submenu: [
            {
                id: 1,
                title: 'Working at Harper',
                path: 'working-at',
                photo: photo3,
                text: "What's in store."
            },
            {
                id: 3,
                title: 'Auditions',
                path: 'auditions',
                photo: photo3,
                text: "What's in store."
            },
            {
                id: 2,
                title: 'Internship',
                path: 'internship',
                photo: photo3,
                text: "What's in store."
            },
            {
                id: 4,
                title: 'Volunteer',
                path: 'volunteer',
                photo: photo3,
                text: "What's in store."
            },
            // {
            //     id: 5,
            //     title: 'Rentals',
            //     path: 'rentals',
            //     photo: photo3,
            //     text: "What's in store."
            // }
        ]
    },
    {
        id: 6,
        title: 'ABOUT US',
        path: '/about',
        submenu: [
            {
                id: 1,
                title: 'The Theatre',
                path: '/the-theatre',
                photo: photo3,
                text: "What's in store.",
                submenu: [
                    {
                        id: 1,
                        title: 'About Harper House',
                        path: 'about-us',
                        photo: photo3,
                        text: "What's in store."
                        
                    },
                    {
                        id: 2,
                        title: 'History',
                        path: 'history',
                        photo: photo3,
                        text: "What's in store."
                        
                    },
                    {
                        id: 3,
                        title: 'Diversity & Inclusion',
                        path: 'diversity',
                        photo: photo3,
                        text: "What's in store."
                    }
                ]
            },
            {
                id: 2,
                title: 'The Team',
                path: '/the-team',
                photo: photo3,
                text: "What's in store.",
                submenu: [
                    {
                        id: 1,
                        title: 'Leadership',
                        path: 'leadership',
                        photo: photo3,
                        text: "What's in store."
                        
                    },
                    {
                        id: 2,
                        title: 'Staff',
                        path: 'staff',
                        photo: photo3,
                        text: "What's in store."
                        
                    },
                    {
                        id: 3,
                        title: 'Board of Trustees',
                        path: 'board',
                        photo: photo3,
                        text: "What's in store."
                    }
                ]
            },
            {
                id: 3,
                title: 'FAQ',
                path: 'faq',
                photo: photo3,
                text: "What's in store."
            },
            {
                id: 4,
                title: 'Contact',
                path: 'contact',
                photo: photo3,
                text: "What's in store."
            }
        ]
    },
]
