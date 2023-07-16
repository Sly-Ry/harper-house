import pro1 from '../assets/images/pro_images/pro_red.jpg'
import pro2 from '../assets/images/pro_images/pro_the-pillowman.jpg'
import pro3 from '../assets/images/pro_images/pro_the-last-five-years.jpg'
import pro4 from '../assets/images/pro_images/pro_not-omaha.jpg'
import pro5 from '../assets/images/pro_images/pro_les-miserables.jpg'
import openMic from '../assets/images/ev_images/ev_open-mic.jpg';
import readers from '../assets/images/ev_images/ev_readers.jpg';
import lounge from '../assets/images/ev_images/ev_lounge.jpg';
import ucPro1 from '../assets/images/pro_images/pro_amadeus.jpg'
import ucPro2 from '../assets/images/pro_images/pro_sweeney-todd.jpg'
import ucPro3 from '../assets/images/pro_images/pro_women-lockerbie.jpg'
import ucPro4 from '../assets/images/pro_images/pro_alice-in-wonderland.jpg'
import ucPro5 from '../assets/images/pro_images/pro_the-dumbwaiter.jpg'

export const showList = [
    {
        id: 1,
        type: "MAIN STAGE EVENT",
        title: 'RED',
        by: 'John Logan',
        director: 'Ryan Williams',
        date: 'February 23 - March 12, 2023',
        img: pro1,
        fontColor: 'crimson',
        fontFamily: "'Times New Roman', Times, serif",
        synopsis: "Raw and provocative, RED is a searing portrait of an artist's ambition and vulnerability as he tries to create a definitive work for an extraordinary setting.",
        path: 'red',
    },
    {
        id: 2,
        type: "MAIN STAGE EVENT",
        title: 'The Pillowman',
        by: 'Martin McDonagh',
        director: 'Ryan Williams',
        date: 'October 19 - Novemeber 3, 2023',
        img: pro2,
        synopsis: "In a totalitarian state a writer is questioned by the authorities about a spate of murders that bear similarities to their short stories. Is this life imitating art or something more sinister?",
        fontColor: 'white',
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        path: 'the-pillowman'
    },
    {
        id: 3,
        type: "MAIN STAGE EVENT",
        title: 'The Last Five Years',
        by: 'Jason Robert Brown',
        director: 'Ryan Williams',
        date: 'December 2 - January 16, 2024',
        img: pro3,
        synopsis: "An emotionally powerful and intimate musical about two New Yorkers in their twenties who fall in and out of love over the course of five years.",
        fontColor: 'white',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        path: 'the-last-five-years'
    },
    {
        id: 4,
        title: 'Not Omaha',
        type: "MAIN STAGE EVENT",
        by: 'Paul Kruse',
        director: 'Ryan Williams',
        date: 'February 18 - March 4, 2024',
        img: pro4,
        synopsis: "Not Omaha is a surreal, darkly odd story about the end of the world in a small town. What if the apocalypse was like the death of a parent - natural, strange and sometimes beautiful?",
        fontColor: 'orange',
        fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        path: 'not-omaha'
    },
    {
        id: 5,
        type: "MAIN STAGE EVENT",
        title: 'Les Miserables',
        by: 'Victor Hugo',
        director: 'Ryan Williams',
        date: 'March 10 - April 3, 2024',
        img: pro5,
        synopsis: "The story of a peasant named Jean Valjean and his desire for redemption, pursued by an insatiable officer, and swept into the beating heart of revolution.",
        fontColor: 'gold',
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        path: 'les-miserables'
    }
]

export const comingSoon = [
    {
        id: 1,
        type: "READER'S THEATRE",
        title: "FATHER DEATH",
        by: "",
        director: '',
        date: 'March 10 - April 3, 2024',
        img: readers,
        synopsis: "",
        fontColor: 'white',
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        path: 'open-mic'
    },
    {
        id: 2,
        type: "MAIN STAGE EVENT",
        title: "Amadeus",
        by: "Peter Shaffer",
        director: '',
        date: 'March 10 - April 3, 2024',
        img: ucPro1,
        synopsis: "Inspired by Alexander Pushkin's short 1830 play 'Mozart and Salieri', this play gives a fictional account of the lives of composers Wolfgang Amadeus Mozart and Antonio Salieri.",
        fontColor: 'goldenrod',
        fontFamily: "'Tilt Prism', cursive",
        path: 'amadeus'
    },
    {
        id: 3,
        type: "OPEN MIC NIGHT",
        title: "",
        by: "",
        director: '',
        date: 'March 10 - April 3, 2024',
        img: openMic,
        synopsis: "",
        fontColor: 'white',
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        path: 'open-mic'
    },
    {
        id: 4,
        type: "MAIN STAGE EVENT",
        title: "The Women of Lockerbie",
        by: "Deborah Brevoort",
        director: '',
        date: 'March 10 - April 3, 2024',
        img: ucPro3,
        synopsis: "A mother from New Jersey roams the hills of Lockerbie, Scotland, looking for her son's remains that were lost in the crash of Pan Am 103. It is poetic drama about the triumph of love over hate.",
        fontColor: 'darkseagreen',
        fontFamily: "'Cinzel', serif",
        path: 'women-of-lockerbie'
    },    
    {
        id: 5,
        type: "DISCOUNT NIGHT",
        title: "",
        by: "",
        director: '',
        date: 'March 10 - April 3, 2024',
        img: lounge,
        synopsis: "",
        fontColor: "",
        fontFamily: "",
        path: 'the-red-deck'
    },
    {
        id: 6,
        type: "MAIN STAGE EVENT",
        title: "Alice in Wonderland",
        by: "Anne Coulter Martens",
        director: '',
        date: 'March 10 - April 3, 2024',
        img: ucPro4,
        synopsis: "",
        fontColor: 'yellow',
        fontFamily: "'Satisfy', cursive",
        path: 'alice-in-wonderland'
    },
    {
        id: 7,
        type: "MAIN STAGE EVENT",
        title: "The Dumbwaiter",
        by: "Harold Pinter",
        director: '',
        date: 'March 10 - April 3, 2024',
        img: ucPro5,
        synopsis: "",
        fontColor: 'burlywood',
        fontFamily: "'IM Fell Great Primer SC', serif",
        path: 'the-dumbwaiter'
    },
    {
        id: 8,
        type: "READER'S THEATRE",
        title: "FATHER DEATH",
        by: "",
        director: '',
        date: 'March 10 - April 3, 2024',
        img: readers,
        synopsis: "",
        fontColor: 'white',
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        path: 'open-mic'
    },
    {
        id: 9,
        type: "MAIN STAGE EVENT",
        title: "Sweeney Todd",
        by: "Peter Shaffer",
        director: '',
        date: 'March 10 - April 3, 2024',
        img: ucPro2,
        synopsis: "Inspired by Alexander Pushkin's short 1830 play 'Mozart and Salieri', this play gives a fictional account of the lives of composers Wolfgang Amadeus Mozart and Antonio Salieri.",
        fontColor: 'firebrick',
        fontFamily: "'Satisfy', cursive;",
        path: 'sweeney-todd'
    },    
]