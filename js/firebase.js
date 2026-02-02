// MOCK DATABASE (used until Firebase is added)

window.MockDB = {
  schools: [
    {
      id: "1",
      name: "St. Peter’s SHS",
      region: "Greater Accra",
      createdAt: "2022-06-01",
      mocks: [
        { name: "WASSCE Mock", enrollment: 120 }
      ],
      terminals: [
        { name: "Terminal 1", enrollment: 100 }
      ]
    },
    {
      id: "2",
      name: "Holy Trinity Academy",
      region: "Ashanti",
      createdAt: "2023-02-15",
      mocks: [
        { name: "Mid Mock", enrollment: 80 }
      ],
      terminals: [
        { name: "Terminal 2", enrollment: 70 }
      ]
    },
    {
      id: "3",
      name: "Unity Preparatory",
      region: "Eastern",
      createdAt: "2021-09-10",
      mocks: [
        { name: "Final Mock", enrollment: 150 }
      ],
      terminals: [
        { name: "Terminal 3", enrollment: 140 }
      ]
    }
  ]
};
