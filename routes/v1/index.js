var express = require('express');
var router = express.Router();
const atob = require('atob');
const btoa = require('btoa');


router.post('/voters', async function (req, res) {
  let limit = parseInt(req.body.limit || 20);
  let next = req.body.next || null;
  let filters = req.body.filters || {};
  let skip = 0;
  if (next) {
    const [_s] = atob(next).split('/');
    skip = parseInt(_s);
  }

  try {

    const results = await VOTERS_COLLECTION.find({ ...filters }).limit(limit).skip(skip).toArray();
    nextPage = skip + limit;

    res.json({
      next: btoa(`${nextPage}/${limit}`),
      results
    });
  } catch (e) {
    res.status = 500;
    res.json({ e })
  }
});

router.get('/settings', async function (req, res) {
  const [setting] = await SETTINGS_COLLECTION.find().limit(1).toArray();
  res.json({
    status: true,
    code: 200,
    message: "",
    data: {
      colorCodes: setting
    }
  });
});



router.get("/services", (req, res) => {
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
    title: "Pooling Services",
    services: [
      { id: "p1", label: "Pre Pool Survey", name: "chart-bar" },
      { id: "p2", label: "Pooling Stats", name: "chart-line" },
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
});

router.get("/videos", (req, res) => {
  const videos = [
    "https://www.youtube.com/embed/w6kkunJM9NM",
    'https://www.youtube.com/embed/h399oJCiP30'
  ]
  res.send({
    status: true,
    code: 200,
    message: "",
    data: videos
  });
});

router.get("/filters", (req, res) => {
  let filters = [
    {
      categoryName: "Gender",
      subList: [{ subItemName: "Male", isSelected: false }, { subItemName: "Female", isSelected: false }],
      isActive: true,
    },
    {
      categoryName: "Age",
      subList: [{ subItemName: "Male", isSelected: false }, { subItemName: "Female", isSelected: false }],
      isActive: false,
    },
    {
      categoryName: "Mandal",
      subList: [{ subItemName: "Male", isSelected: false }, { subItemName: "Female", isSelected: false }],
      isActive: false,
    },
    {
      categoryName: "Booth",
      subList: [{ subItemName: "Male", isSelected: false }, { subItemName: "Female", isSelected: false }],
      isActive: false,
    },

    {
      categoryName: "Gender",
      subList: [{ subItemName: "Male", isSelected: false }, { subItemName: "Female", isSelected: false }],
      isActive: true,
    },
    {
      categoryName: "Age",
      subList: [{ subItemName: "Male", isSelected: false }, { subItemName: "Female", isSelected: false }],
      isActive: false,
    },
  ];
  res.send({
    status: true,
    code: 200,
    message: "",
    data: filters
  })
})

module.exports = router;
