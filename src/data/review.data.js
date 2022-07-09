const INTRODUCTION = [
    {introduction: 'I\'m a 5+ years experienced senior developer.'},
    {introduction: 'Working nearly 2.5 - 3 years as a full stack developer in the begining of developer life.'},
    {introduction: 'Then, over 3 years as a senior frontend developer and team leader.'},
    {introduction: 'Proficient in mostly JavaScript and it\'s libraries.'},
    {introduction: 'Focus on data visiualization and analysis for now.'},
];

const EDUCATION = [
    {
        school: 'MB;BS (2nd Year)',
        startYear: '2006',
        endYear: '2008'
    },
    {
        school: 'Diploma in Project Management',
        startYear: '2019',
        endYear: 'pending'
    }
];

const PERSONAL_SKILL = [
    {
        name: 'HTML',
        percent: 100
    },
    {
        name: 'CSS',
        percent: 100
    },
    {
        name: 'JavaScript',
        percent: 100
    },
    {
        name: 'jQuery',
        percent: 100
    },
    {
        name: 'Bootstrap',
        percent: 100
    },
    {
        name: 'React',
        percent: 80
    },
    {
        name: 'React Native',
        percent: 75
    }
];

const OTHER_SKILL = [
    {
        name: 'MERN stack',
        percent: 70
    },
    {
        name: 'API Development',
        percent: 70
    },
    {
        name: 'Laravel',
        percent: 60
    },
];

const WORK_EXPERIENCE = [
    {
        name: 'Seasoft Vietname Technology Co.,Ltd.',
        startDate: '2019',
        endDate: '2022 (April)',
        position: 'Senior Frontend Developer & Team Leader',
        description: 'Managed the Front-end development team. Lead of coding and guide the workflow. Full responsible for the product output of Front-end development team.'
    },
    {
        name: 'Lucid Unity Co.,Ltd.',
        startDate: '2017',
        endDate: '2019',
        position: 'IT Consultant & Project Team Leader',
        description: 'Managed the project operation. Adviser of digital marketing. Assist customers in all aspects of IT services. Web design and development.'
    },
    {
        name: '72Coder Co.,Ltd.',
        startDate: '2016',
        endDate: '2017',
        position: 'Web Developer',
        description: 'Web design and development. Assist customers in all aspects of web services.'
    }
];

const PROJECT_EXPERIENCE = [
    {
        name: 'Covid-19 Tracker',
        description: 'Covid-19 tracker front-end project with react.js. Using open source data from - https://covid19.mathdro.id/api',
        sourceCode: 'https://github.com/thantmyat31/covid-19-tracker',
        viewLive: 'https://covid19-tracker-tms.netlify.app/'
    },
    {
        name: 'Hotel & Resort',
        description: 'Hotel & resort front-end project sample with react.js. State management with context api. Using Contentful for static data API.',
        sourceCode: 'https://github.com/thantmyat31/resort',
        viewLive: 'https://react-resort-tms.netlify.app/'
    },
    {
        name: 'Travel Story Ticket',
        description: 'Online bus ticket selling website. Using React for frontend, Node/Express for API development and MongoDB for Database.',
        sourceCode: 'https://github.com/thantmyat31/travelstory-ticket',
        viewLive: 'https://travelstory-ticket.herokuapp.com/'
    },
    {
        name: 'My Created Re-usable React Components',
        description: 'The collection of my created re-usable component for React.js.',
        sourceCode: 'https://github.com/thantmyat31/My-Created-React-Components',
    },
    {
        name: 'Youtube Playlist App',
        description: 'Minimal scale app which can be showing youtube playlists and watch the video clip from the playlist. Using react-native, redux and react-redux for state management, redux-thunk middleware for calling youtube playlist api request.',
        sourceCode: 'https://github.com/thantmyat31/youtube-app',
        viewLive: 'https://play.google.com/store/apps/details?id=com.channelnke'
    }
]

export const PROFILE = {
    name: 'Thant Myat Sin',
    image: 'https://avatars.githubusercontent.com/u/26476793?v=4',
    info: [
        { name: 'Phone', value: '09425331210'},
        { name: 'Email', value: 'thantmyat1234@gmail.com'},
        { name: 'Github', value: 'https://github.com/thantmyat31'},
        { name: 'Skype', value: 'live:thantmyat1234'},
        { name: 'Position', value: 'Senior Frontend Developer'}
    ],
    introduction: INTRODUCTION,
    education: EDUCATION,
    personalSkill: PERSONAL_SKILL,
    otherSkill: OTHER_SKILL,
    workExperience: WORK_EXPERIENCE,
    projectExperience: PROJECT_EXPERIENCE
}