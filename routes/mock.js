var express = require('express');
var app = express.Router();

app.get("/getappsettings", (req, res) => {
    const { userId } = req.query;
    if (userId === "378282246310005") {
        const colorCodes = {
            primaryColor: "#FF5733",
            lightBackGroundColor: "lightgray",
            defaultColor: "black",
            tintColor: "white",
            screenBackGroundColor: "white",
            graphColorCodes: [
                "#FF0000",
                "#FF7300",
                "#FFEC00",
                "#52D726",
                "#007ED6",
                "#7CDDDD",
            ],
        };

        res.send({
            status: true,
            code: 200,
            message: "",
            data: { colorCodes },
        });
    } else {
        res.send({
            status: false,
            code: 404,
            message: "Details not found!",
            data: {},
        });
    }
});

app.get("/getuserdata", (req, res) => {
    const { userId } = req.query;
    if (userId === "378282246310005") {
        const bannerImage =
            "https://cdn.grstudycircle.com/file/banner-54b59a16-9be3-4ace-8f31-20095f83353a.jpeg";
        const upcomingEvents = [
            "https://cdn.grstudycircle.com/file/event01-27a86f2d-5cad-4d66-9adc-fe62d95e83aa.jpeg",
            "https://cdn.grstudycircle.com/file/event02-dfa506ab-490e-4f29-99b9-da2d47589e44.jpeg",
            "https://cdn.grstudycircle.com/file/event03-b0f310b3-a942-4d3c-89f9-6d554912b4fe.jpeg",
            "https://cdn.grstudycircle.com/file/event04-8c5801e1-5206-4a9c-9c9a-3ebf716413d5.jpeg",
            "https://cdn.grstudycircle.com/file/event05-234e8ddc-c956-4df5-8871-5274d38b1494.jpeg",
        ];
        res.send({
            status: true,
            code: 200,
            message: "",
            data: { bannerImage, upcomingEvents },
        });
    } else {
        res.send({
            status: false,
            code: 404,
            message: "User not found!",
            data: {},
        });
    }
});

app.get("/getallservices", (req, res) => {
    const { userId } = req.query;
    if (userId === "378282246310005") {
        const voterServiceDetails = {
            title: "Voter Services",
            services: [
                { id: "v1", label: "Voters", name: "user-alt" },
                { id: "v2", label: "Search", name: "search-plus" },
                { id: "v3", label: "Add Voter", name: "user-plus" },
                { id: "v4", label: "Update Voters", name: "user-edit" },
            ],
        };
        const poolingServiceDetails = {
            title: "Polling Services",
            services: [
                { id: "p1", label: "Pre poll Survey", name: "chart-bar" },
                { id: "p2", label: "Polling Stats", name: "chart-line" },
                { id: "p3", label: "Booth Managers", name: "person-booth" },
                { id: "p4", label: "Favour Wise", name: "grin-stars" },
                { id: "p5", label: "View", name: "user-alt" },
            ],
        };

        const influencerServiceDetails = {
            title: "Influencer Services",
            services: [
                { id: "i1", label: "Influencers", name: "users" },
                { id: "i2", label: "Search", name: "search" },
                { id: "i3", label: "Add", name: "user-plus" },
                { id: "i4", label: "Modify", name: "users-cog" },
            ],
        };

        const birthDayServiceDetails = {
            title: "Birthday Services",
            services: [
                { id: "b1", label: "View", name: "eye" },
                { id: "b2", label: "Wish All", name: "birthday-cake" },
                { id: "b3", label: "Upcoming", name: "calendar-alt" },
                { id: "b4", label: "Auto/Manual", name: "bolt" },
            ],
        };

        res.send({
            status: true,
            code: 200,
            message: "",
            data: [
                voterServiceDetails,
                poolingServiceDetails,
                influencerServiceDetails,
                birthDayServiceDetails,
            ],
        });
    } else {
        res.send({
            status: false,
            code: 404,
            message: "Failed to load services list!",
            data: {},
        });
    }
});

app.get("/getuservideos", (req, res) => {
    const { userId } = req.query;
    if (userId === "378282246310005") {
        const videos = [
            "https://www.youtube.com/embed/w6kkunJM9NM",
            "https://www.youtube.com/embed/h399oJCiP30",
        ];
        res.send({
            status: true,
            code: 200,
            message: "",
            data: videos,
        });
    } else {
        res.send({
            status: false,
            code: 404,
            message: "Failed to load services list!",
            data: {},
        });
    }
});


app.get("/getallmeetings", (req, res) => {
    const { userId } = req.query;
    if (userId === "378282246310005") {
        const meetings = [
            {
                id: "m1",
                name: "Budget meeting",
                audience: [
                    {
                        id: "m1a1",
                        name: "Phanindra Kumar",
                        email: "phanindrakumar@gmail.com",
                    },
                    {
                        id: "m1a2",
                        name: "Pradeep Kumar",
                        email: "pradeepkumar@gmail.com",
                    },
                    { id: "m1a3", name: "Rahul Kumar", email: "rahulkumar@gmail.com" },
                ],
                date: "10-10-2022",
            },
            {
                id: "m2",
                name: "Winter meeting",
                audience: [
                    {
                        id: "m2a1",
                        name: "Phanindra Kumar",
                        email: "phanindrakumar@gmail.com",
                    },
                    { id: "m2a3", name: "Rahul Kumar", email: "rahulkumar@gmail.com" },
                ],
                date: "12-10-2022",
            },
            {
                id: "m3",
                name: "Summer meeting",
                audience: [
                    {
                        id: "m3a1",
                        name: "Phanindra Kumar",
                        email: "phanindrakumar@gmail.com",
                    },
                    {
                        id: "m3a2",
                        name: "Pradeep Kumar",
                        email: "pradeepkumar@gmail.com",
                    },
                    { id: "m3a3", name: "Rahul Kumar", email: "rahulkumar@gmail.com" },
                ],
                date: "10-09-2022",
            },
        ];
        res.send({
            status: true,
            code: 200,
            message: "",
            data: meetings,
        });
    } else {
        res.send({
            status: false,
            code: 404,
            message: "Failed to load meetings list!",
            data: {},
        });
    }
});

app.get("/getattendies", (req, res) => {
    const { userId } = req.query;
    if (userId === "378282246310005") {
        const attendies = [
            {
                id: "att1",
                name: "Phanindra Kumar",
                email: "phanindrakumar@gmail.com",
                isSelected: false,
            },
            {
                id: "att2",
                name: "Pradeep Kumar",
                email: "pradeepkumar@gmail.com",
                isSelected: false,
            },
            {
                id: "att3",
                name: "Rahul Kumar",
                email: "rahulkumar@gmail.com",
                isSelected: false,
            },
        ];
        res.send({
            status: true,
            code: 200,
            message: "",
            data: attendies,
        });
    } else {
        res.send({
            status: false,
            code: 404,
            message: "Failed to load meetings list!",
            data: {},
        });
    }
});

app.get("/getmeetingnotifyrange", (req, res) => {
    const { userId } = req.query;
    if (userId === "378282246310005") {
        const notifies = [
            { id: "n1", label: "Before 7 Days", value: "7D", isSelected: false },
            { id: "n2", label: "Before 2 Days", value: "2D", isSelected: false },
            { id: "n3", label: "Before 1 Day", value: "1D", isSelected: false },
            { id: "n4", label: "Before 1 Hour", value: "1H", isSelected: false },
            { id: "n1", label: "Before 15 Min", value: "15MIN", isSelected: false },
        ];
        res.send({
            status: true,
            code: 200,
            message: "",
            data: notifies,
        });
    } else {
        res.send({
            status: false,
            code: 404,
            message: "Failed to Meeting notify range list!",
            data: {},
        });
    }
});

app.get("/getprepoolsurvey", (req, res) => {
    const { userId } = req.query;
    if (userId === "378282246310005") {
        const prePoolSurvey = [
            {
                name: "Besta Chinna Anjaiah",
                age: 56,
                epicId: "ADX0526848",
                fathersName: "Bhomaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "1-26",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Satla Sangamma",
                age: 42,
                epicId: "ADX0526541",
                fathersName: "",
                husbandsName: "Sailu",
                gender: "FEMALE",
                houseNumber: "1-68/A",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Daiahpu Allaiah",
                age: 76,
                epicId: "BJRO995142",
                fathersName: "Raajaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-17/2",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Sangaiah",
                age: 57,
                epicId: "ADX1950948",
                fathersName: "Allaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-36",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Manjula",
                age: 47,
                epicId: "ADX0193847",
                fathersName: "",
                husbandsName: "Sangaiah",
                gender: "FEMALE",
                houseNumber: "3-36",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Balamma",
                age: 60,
                epicId: "ADX0829044",
                fathersName: "",
                husbandsName: "Radhaiah",
                gender: "FEMALE",
                houseNumber: "3-37",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Vishnu",
                age: 35,
                epicId: "ADX0829010",
                fathersName: "Ramulu",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-37",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Pentavwva",
                age: 72,
                epicId: "ADX1951532",
                fathersName: "",
                husbandsName: "Lasmaiah",
                gender: "FEMALE",
                houseNumber: "3-38",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Gopal",
                age: 38,
                epicId: "ADX0193979",
                fathersName: "Lakshmaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-38",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Kummari Bhomaiah",
                age: 51,
                epicId: "ADX1951672",
                fathersName: "Parvaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-40",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Besta Chinna Sayavva",
                age: 42,
                epicId: "ADX0195693",
                fathersName: "",
                husbandsName: "Anjaiah",
                gender: "FEMALE",
                houseNumber: "1-26",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Ramesh Satla",
                age: 26,
                epicId: "ADX1308618",
                fathersName: "Pentaiah Satla",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "1-68/A",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Daiahpu Mallesh",
                age: 39,
                epicId: "BJRO995175",
                fathersName: "Daiahpu Mallaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-17/2",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Radaiah",
                age: 54,
                epicId: "ADX0193813",
                fathersName: "Mallaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-36",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Satyanarayana",
                age: 31,
                epicId: "ADX0795096",
                fathersName: "Radhaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-36",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Chandraiah",
                age: 50,
                epicId: "ADX0828996",
                fathersName: "Narayana",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-37",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Laxmi",
                age: 35,
                epicId: "ADX0828970",
                fathersName: "",
                husbandsName: "Chandraiah",
                gender: "FEMALE",
                houseNumber: "3-37",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Kistaiah",
                age: 52,
                epicId: "ADX0204537",
                fathersName: "Lakshmaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-38",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Dathavva",
                age: 38,
                epicId: "ADX0732263",
                fathersName: "",
                husbandsName: "Gopal",
                gender: "FEMALE",
                houseNumber: "3-38",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "non-favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Kummari Lacchamma",
                age: 46,
                epicId: "ADX1951334",
                fathersName: "",
                husbandsName: "Bumaiah",
                gender: "FEMALE",
                houseNumber: "3-40",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "non-favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Satla Sai Baba",
                age: 31,
                epicId: "ADX0795112",
                fathersName: "Pentaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "1-68",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "non-favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Laxmi Mangali",
                age: 24,
                epicId: "ADX1308139",
                fathersName: "",
                husbandsName: "Sangameshwar Mangali",
                gender: "FEMALE",
                houseNumber: "1-87/1",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "non-favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Daiypu Lakshmi",
                age: 35,
                epicId: "ADX0194274",
                fathersName: "",
                husbandsName: "Mallesh",
                gender: "FEMALE",
                houseNumber: "3-17/2",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "non-favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Sayawva",
                age: 47,
                epicId: "ADX1951540",
                fathersName: "",
                husbandsName: "Radaiah",
                gender: "FEMALE",
                houseNumber: "3-36",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Swapna Mukka",
                age: 27,
                epicId: "ADX0887325",
                fathersName: "",
                husbandsName: "Sathya Narayana",
                gender: "FEMALE",
                houseNumber: "3-36",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Sailu",
                age: 38,
                epicId: "ADX0828988",
                fathersName: "Narayana",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-37",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Renuka",
                age: 29,
                epicId: "ADX0829077",
                fathersName: "Ramulu",
                husbandsName: "",
                gender: "FEMALE",
                houseNumber: "3-37",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Sayavva",
                age: 43,
                epicId: "ADX0193953",
                fathersName: "",
                husbandsName: "Kistaiah",
                gender: "FEMALE",
                houseNumber: "3-38",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Kummari Parvaiah",
                age: 84,
                epicId: "ADX1951409",
                fathersName: "Shiwaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-40",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Kummari Anusamma",
                age: 44,
                epicId: "ADX1951342",
                fathersName: "",
                husbandsName: "Sailu",
                gender: "FEMALE",
                houseNumber: "3-40",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
        ];
        res.send({
            status: true,
            code: 200,
            message: "",
            data: prePoolSurvey,
        });
    } else {
        res.send({
            status: false,
            code: 404,
            message: "Failed to Meeting notify range list!",
            data: {},
        });
    }
});

app.get("/getpoolstatus", (req, res) => {
    const { userId } = req.query;
    if (userId === "378282246310005") {
        const poolStatus = {
            totalVoters: 20000,
            totalFavAppeared: 10000,
            totalNoShow: 1000,
        };
        res.send({
            status: true,
            code: 200,
            message: "",
            data: poolStatus,
        });
    } else {
        res.send({
            status: false,
            code: 404,
            message: "Failed to pool status!",
            data: {},
        });
    }
});

app.get("/getvoterdetails", (req, res) => {
    const { userId, searchBy, searchKey } = req.query;
    if (userId === "378282246310005" && searchBy !== "" && searchKey !== "") {
        const voterDetails = {
            name: "Besta Chinna Anjaiah",
            age: 56,
            epicId: "ADX0526848",
            fathersName: "Bhomaiah",
            husbandsName: "",
            gender: "MALE",
            houseNumber: "1-26",
            constituency: "34-Medak",
            booth: "1-Kompally-1",
            favStatus: "favourable",
            reason: "Just for run",
            mobile: "(+91) 7569759049",
        }
        res.send({
            status: true,
            code: 200,
            message: "",
            data: voterDetails,
        });
    } else {
        res.send({
            status: false,
            code: 404,
            message: "Failed to load voter details!",
            data: {},
        });
    }
});

app.get("/getnoshowvoters", (req, res) => {
    const { userId } = req.query;
    if (userId === "378282246310005") {
        const noShowVoters = [
            {
                name: "Besta Chinna Anjaiah",
                age: 56,
                epicId: "ADX0526848",
                fathersName: "Bhomaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "1-26",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Satla Sangamma",
                age: 42,
                epicId: "ADX0526541",
                fathersName: "",
                husbandsName: "Sailu",
                gender: "FEMALE",
                houseNumber: "1-68/A",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Daiahpu Allaiah",
                age: 76,
                epicId: "BJRO995142",
                fathersName: "Raajaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-17/2",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Sangaiah",
                age: 57,
                epicId: "ADX1950948",
                fathersName: "Allaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-36",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Manjula",
                age: 47,
                epicId: "ADX0193847",
                fathersName: "",
                husbandsName: "Sangaiah",
                gender: "FEMALE",
                houseNumber: "3-36",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Balamma",
                age: 60,
                epicId: "ADX0829044",
                fathersName: "",
                husbandsName: "Radhaiah",
                gender: "FEMALE",
                houseNumber: "3-37",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Vishnu",
                age: 35,
                epicId: "ADX0829010",
                fathersName: "Ramulu",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-37",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Pentavwva",
                age: 72,
                epicId: "ADX1951532",
                fathersName: "",
                husbandsName: "Lasmaiah",
                gender: "FEMALE",
                houseNumber: "3-38",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Gopal",
                age: 38,
                epicId: "ADX0193979",
                fathersName: "Lakshmaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-38",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Kummari Bhomaiah",
                age: 51,
                epicId: "ADX1951672",
                fathersName: "Parvaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-40",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Besta Chinna Sayavva",
                age: 42,
                epicId: "ADX0195693",
                fathersName: "",
                husbandsName: "Anjaiah",
                gender: "FEMALE",
                houseNumber: "1-26",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Ramesh Satla",
                age: 26,
                epicId: "ADX1308618",
                fathersName: "Pentaiah Satla",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "1-68/A",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Daiahpu Mallesh",
                age: 39,
                epicId: "BJRO995175",
                fathersName: "Daiahpu Mallaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-17/2",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Radaiah",
                age: 54,
                epicId: "ADX0193813",
                fathersName: "Mallaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-36",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Satyanarayana",
                age: 31,
                epicId: "ADX0795096",
                fathersName: "Radhaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-36",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Chandraiah",
                age: 50,
                epicId: "ADX0828996",
                fathersName: "Narayana",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-37",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Laxmi",
                age: 35,
                epicId: "ADX0828970",
                fathersName: "",
                husbandsName: "Chandraiah",
                gender: "FEMALE",
                houseNumber: "3-37",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Kistaiah",
                age: 52,
                epicId: "ADX0204537",
                fathersName: "Lakshmaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-38",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Dathavva",
                age: 38,
                epicId: "ADX0732263",
                fathersName: "",
                husbandsName: "Gopal",
                gender: "FEMALE",
                houseNumber: "3-38",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "non-favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Kummari Lacchamma",
                age: 46,
                epicId: "ADX1951334",
                fathersName: "",
                husbandsName: "Bumaiah",
                gender: "FEMALE",
                houseNumber: "3-40",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "non-favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Satla Sai Baba",
                age: 31,
                epicId: "ADX0795112",
                fathersName: "Pentaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "1-68",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "non-favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Laxmi Mangali",
                age: 24,
                epicId: "ADX1308139",
                fathersName: "",
                husbandsName: "Sangameshwar Mangali",
                gender: "FEMALE",
                houseNumber: "1-87/1",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "non-favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Daiypu Lakshmi",
                age: 35,
                epicId: "ADX0194274",
                fathersName: "",
                husbandsName: "Mallesh",
                gender: "FEMALE",
                houseNumber: "3-17/2",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "non-favourable",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Sayawva",
                age: 47,
                epicId: "ADX1951540",
                fathersName: "",
                husbandsName: "Radaiah",
                gender: "FEMALE",
                houseNumber: "3-36",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Swapna Mukka",
                age: 27,
                epicId: "ADX0887325",
                fathersName: "",
                husbandsName: "Sathya Narayana",
                gender: "FEMALE",
                houseNumber: "3-36",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Sailu",
                age: 38,
                epicId: "ADX0828988",
                fathersName: "Narayana",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-37",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Renuka",
                age: 29,
                epicId: "ADX0829077",
                fathersName: "Ramulu",
                husbandsName: "",
                gender: "FEMALE",
                houseNumber: "3-37",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Mukka Sayavva",
                age: 43,
                epicId: "ADX0193953",
                fathersName: "",
                husbandsName: "Kistaiah",
                gender: "FEMALE",
                houseNumber: "3-38",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Kummari Parvaiah",
                age: 84,
                epicId: "ADX1951409",
                fathersName: "Shiwaiah",
                husbandsName: "",
                gender: "MALE",
                houseNumber: "3-40",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
            {
                name: "Kummari Anusamma",
                age: 44,
                epicId: "ADX1951342",
                fathersName: "",
                husbandsName: "Sailu",
                gender: "FEMALE",
                houseNumber: "3-40",
                constituency: "34-Medak",
                booth: "1-Kompally-1",
                favStatus: "nota",
                reason: "Just for run",
                mobile: "(+91) 7569759049",
            },
        ];
        res.send({
            status: true,
            code: 200,
            message: "",
            data: noShowVoters,
        });
    } else {
        res.send({
            status: false,
            code: 404,
            message: "Failed to load no show voters, please try again later!",
            data: {},
        });
    }
});

app.get("/getbirthdays", (req, res) => {
    const { userId } = req.query;
    if (userId === "378282246310005") {
        const birthDays = {
            today: [
                {
                    id: 'b1',
                    name: "Pradeep Kumar",
                    dob: '1994-05-19',
                    mobile: '+919032425252'
                },
                {
                    id: 'b2',
                    name: "Poorna Chandar Kota",
                    dob: '1995-05-19',
                    mobile: '+919705118711'
                },
                {
                    id: 'b3',
                    name: "Phanindra Kumar",
                    dob: '1993-05-19',
                    mobile: '+917569759049'
                }
            ],
            recent: [
                {
                    id: 'b1',
                    name: "Pradeep Kumar",
                    dob: '1994-09-19',
                    mobile: '+919032425252'
                },
                {
                    id: 'b2',
                    name: "Poorna Chandar Kota",
                    dob: '1994-09-19',
                    mobile: '+919705118711'
                },
                {
                    id: 'b3',
                    name: "Phanindra Kumar",
                    dob: '1994-09-19',
                    mobile: '+917569759049'
                }
            ]
        }
        res.send({
            status: true,
            code: 200,
            message: "",
            data: birthDays,
        });
    } else {
        res.send({
            status: false,
            code: 404,
            message: "Failed to load birthdays, please try again later!",
            data: {},
        });
    }
});