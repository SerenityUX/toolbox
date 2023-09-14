import { Container, Box, Link } from 'theme-ui'

export default function Index(props) { 

    const tools = [
        {
            title: "Starting A Club",
            color: "#5BC0DE",
            tools: [
                {
                    type: "Guide",
                    title: "Deciding To Start A Club",
                    background: null,
                    url: "/start-a-club"
                },
                {
                    type: "Guide",
                    title: "Finding a Co-leader",
                    background: null,
                    url: "/finding-co-leader"
                },
                {
                    type: "Application",
                    title: "Start a  Hack Club",
                    background: null,
                    url: "https://hackclub.com/clubs/"
                },
                {
                    type: "Guide",
                    title: "Finding a Teacher Sponsor",
                    background: null,
                    url: "/teacher-sponsor"
                },
                {
                    type: "Guide",
                    title: "Getting School Approved",
                    background: null,
                    url: "/teacher-sponsor"
                }               
            ]
        },
        {
            title: "Promoting My Club ",
            color: "#33D6A6",
            tools: [
                {
                    type: "Gift",
                    title: "Hack Club Sticker Box",
                    background: null,
                    url: "/stickers"
                },
                {
                    type: "Resources",
                    title: "Club Flyers & Posters",
                    background: null,
                    url: "/club-flyers"
                },
                {
                    type: "Resources",
                    title: "Club Rush Booth",
                    background: null,
                    url: "/club-booth"
                },
                {
                    type: "Jam",
                    title: "Creating a Club Website",
                    background: null,
                    url: "https://jams.hackclub.com/jam/club-website"
                },
                {
                    type: "Resources",
                    title: "Club Social Media Posts",
                    background: null,
                    url: "/club-social-media"
                }             
            ]
        },
        {
            title: "Leading Meetings",
            color: "#FF8C37",
            tools: [
                {
                    type: "Premade Meetings",
                    title: "Club Jams",
                    background: null,
                    url: "https://jams.hackclub.com/"
                },
                {
                    type: "Guide",
                    title: "Creating Your Own Jams",
                    background: null,
                    url: "/create-jams"
                },
                {
                    type: "Community Project",
                    title: "Sprig Game Editor + Console",
                    background: null,
                    url: "https://sprig.hackclub.com/"
                },
                {
                    type: "ARG Puzzle",
                    title: "Stable Quarters",
                    background: null,
                    url: "https://stablequarters.org/"
                },
                {
                    type: "Community Project",
                    title: "Blot Generative Art Machine",
                    background: null,
                    url: "https://haxidraw.hackclub.dev/"
                },
                {
                    type: "Premade Meetings",
                    title: "Workshops (2018-2022)",
                    background: null,
                    url: "https://workshops.hackclub.dev/"
                }             
            ]
        },
        {
            title: "Empowering Members",
            color: "#A633D6",
            tools: [
                {
                    type: "Free Perk",
                    title: "Figma for Clubs",
                    background: null,
                    url: "/figma-for-clubs"
                },
                {
                    type: "Free Perk",
                    title: "openAI for Clubs",
                    background: null,
                    url: "/openAI-for-clubs"
                },
                {
                    type: "Free Perk",
                    title: "Zoom Pro for Clubs",
                    background: null,
                    url: "/zoom-for-clubs"
                },
                {
                    type: "PCB Grant",
                    title: "Onboard Grant",
                    background: null,
                    url: "https://hackclub.com/onboard/"
                },
                {
                    type: "Social Platform",
                    title: "Clubs Scrapbook",
                    background: null,
                    url: "https://scrapbook.hackclub.com/"
                },
                {
                    type: "Guide",
                    title: "Unblock Hacker Tools at School",
                    background: null,
                    url: "/unblock"
                }           
            ]
        },
        {
            title: "Finding Community",
            color: "#338EDA",
            tools: [
                {
                    type: "Tool",
                    title: "Clubs Map",
                    background: null,
                    url: "https://hackclub.com/map/"
                },
                {
                    type: "Social Platform",
                    title: "Hack Club Slack",
                    background: null,
                    url: "https://hackclub.com/slack/"
                },
                {
                    type: "Events",
                    title: "Hackathons",
                    background: null,
                    url: "https://hackathons.hackclub.com/"
                },
                {
                    type: "Events",
                    title: "Days of Service",
                    background: null,
                    url: "https://days-of-service.hackclub.dev/"
                },
                {
                    type: "Guide",
                    title: "Host Your Own Hackathon",
                    background: null,
                    url: "https://hackclub.com/how-to-organize-a-hackathon/"
                } ,
                {
                    type: "Grant",
                    title: "$500 Hackathon First Grant",
                    background: null,
                    url: "https://hackclub.com/hackathons/grant/"
                }           
            ]
        },
        {
            title: "Club Turnover",
            color: "#EC3750",
            tools: [
                {
                    type: "Guide",
                    title: "How to Find New Leaders",
                    background: null,
                    url: "/new-leaders"
                },
                {
                    type: "Application",
                    title: "Club Turnover",
                    background: null,
                    url: "/club-turnover"
                }         
            ]
        }
    ]

    return (
        <Container>
            <p>Club Toolbox</p>
            <p>Tools for Every Step of Your Club Journey</p>
            {tools.map((category) =>
                <Box>
                    <strong>{category.title}</strong>
                    {category.tools.map((tool) => 
                        <Link href={tool.url}>
                        <p>{tool.title}</p>
                        </Link>
                    )}
                </Box>
            )}
        </Container>
        )
}