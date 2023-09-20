import { Container, Box, Heading, Grid, Text, Link } from 'theme-ui'

export default function Index(props) { 

    const tools = [
        {
            title: "Starting A Club",
            color: "#5BC0DE",
            tools: [
                {
                    type: "Guide",
                    title: "Deciding To Start\nA Club",
                    background: null,
                    url: "/guide/start-a-club"
                },
                {
                    type: "Guide",
                    title: "Finding a Co-leader",
                    background: null,
                    url: "/guide/finding-co-leader"
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
                    url: "/guide/teacher-sponsor"
                },
                {
                    type: "Guide",
                    title: "Getting School Approval",
                    background: null,
                    url: "/guide/teacher-sponsor"
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
                    url: "/guide/stickers"
                },
                {
                    type: "Resources",
                    title: "Club Flyers & Posters",
                    background: null,
                    url: "/guide/club-flyers"
                },
                {
                    type: "Resources",
                    title: "Club Rush Booth",
                    background: null,
                    url: "/guide/club-booth"
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
                    url: "/guide/club-social-media"
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
                    url: "/guide/create-jams"
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
                    url: "/guide/figma-for-clubs"
                },
                {
                    type: "Free Perk",
                    title: "openAI for Clubs",
                    background: null,
                    url: "/guide/openAI-for-clubs"
                },
                {
                    type: "Free Perk",
                    title: "Zoom Pro for Clubs",
                    background: null,
                    url: "/guide/zoom-for-clubs"
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
                    url: "/guide/unblock"
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
                    url: "/guide/new-leaders"
                },
                {
                    type: "Application",
                    title: "Club Turnover",
                    background: null,
                    url: "/guide/club-turnover"
                }         
            ]
        }
    ]

    return (
        <>
            
            <Box sx={{paddingTop: "64px", backgroundColor: "slate", paddingBottom: "32px"}}>
                <Container sx={{color: "#fff"}}>
                <Heading sx={{fontSize: "52px", marginBottom: "16px"}}>Club Toolbox</Heading>
                <Text sx={{fontSize: "24px"}}>Tools for Every Step of Your Club Journey</Text>
                </Container>
            </Box>
        
        <Container sx={{paddingBottom: "96px"}}>
            {tools.map((category) =>
                <Box sx={{marginTop: "32px"}}>
                    <Heading sx={{fontSize: "42px", marginBottom: "16px"}}>{category.title}</Heading>
                    <Grid gap={4} columns={[null, '1fr 1fr', '1fr 1fr 1fr']}>

                    {category.tools.map((tool) => 
                        <Link sx={{ textDecoration: "none" }} href={tool.url}>

                        <Box sx={{position: "relative", backgroundColor: category.color, padding: "48px", aspectRatio: "16/9", borderRadius: "16px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Box sx={{position: "absolute", top: "12px", left: "12px", backgroundColor: tool.url.includes("guide") ? category.color : "#fff", border: "1px #fff solid", padding: "4px 12px", borderRadius: "16px"}}>
                        <Text sx={{ color: !tool.url.includes("guide") ? category.color : "#fff"}}>{tool.type}</Text>
                        </Box>
                        <Text sx={{color: "#fff", fontSize: 28, fontWeight: 900, textAlign: "center"}}>{tool.title}</Text>
                        </Box>
                        </Link>
                    )}
                    </Grid>
                </Box>
            )}
        </Container>
        </>
        )
}