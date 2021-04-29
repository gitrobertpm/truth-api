'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Votes', [
      {
        id: "20000000-0000-0000-0000-000000000001",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000001",
        truthId: "10000000-0000-0000-0000-000000000001"
      },
      {
        id: "20000000-0000-0000-0000-000000000002",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000001",
        truthId: "10000000-0000-0000-0000-000000000004"
      },
      {
        id: "20000000-0000-0000-0000-000000000003",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000001",
        truthId: "10000000-0000-0000-0000-000000000005"
      },
      {
        id: "20000000-0000-0000-0000-000000000004",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000001",
        truthId: "10000000-0000-0000-0000-000000000006"
      },
      {
        id: "20000000-0000-0000-0000-000000000005",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000001",
        truthId: "10000000-0000-0000-0000-000000000009"
      },
      {
        id: "20000000-0000-0000-0000-000000000006",
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000001",
        truthId: "10000000-0000-0000-0000-000000000002"
      },
      {
        id: "20000000-0000-0000-0000-000000000007",
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000001",
        truthId: "10000000-0000-0000-0000-000000000010"
      },
      {
        id: "20000000-0000-0000-0000-000000000008",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000002",
        truthId: "10000000-0000-0000-0000-000000000001"
      },
      {
        id: "20000000-0000-0000-0000-000000000009",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000002",
        truthId: "10000000-0000-0000-0000-000000000005"
      },
      {
        id: "20000000-0000-0000-0000-000000000010",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000002",
        truthId: "10000000-0000-0000-0000-000000000011"
      },
      {
        id: "20000000-0000-0000-0000-000000000011",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000003",
        truthId: "10000000-0000-0000-0000-000000000001"
      },
      {
        id: "20000000-0000-0000-0000-000000000012",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000003",
        truthId: "10000000-0000-0000-0000-000000000003"
      },
      {
        id: "20000000-0000-0000-0000-000000000013",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000003",
        truthId: "10000000-0000-0000-0000-000000000006"
      },
      {
        id: "20000000-0000-0000-0000-000000000014",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000003",
        truthId: "10000000-0000-0000-0000-000000000008"
      },
      {
        id: "20000000-0000-0000-0000-000000000015",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000003",
        truthId: "10000000-0000-0000-0000-000000000010"
      },
      {
        id: "20000000-0000-0000-0000-000000000016",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000004",
        truthId: "10000000-0000-0000-0000-000000000001"
      },
      {
        id: "20000000-0000-0000-0000-000000000017",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000004",
        truthId: "10000000-0000-0000-0000-000000000004"
      },
      {
        id: "20000000-0000-0000-0000-000000000018",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000004",
        truthId: "10000000-0000-0000-0000-000000000005"
      },
      {
        id: "20000000-0000-0000-0000-000000000019",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000004",
        truthId: "10000000-0000-0000-0000-000000000009"
      },
      {
        id: "20000000-0000-0000-0000-000000000020",
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000004",
        truthId: "10000000-0000-0000-0000-000000000002"
      },
      {
        id: "20000000-0000-0000-0000-000000000021",
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000004",
        truthId: "10000000-0000-0000-0000-000000000010"
      },
      {
        id: "20000000-0000-0000-0000-000000000022",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000006",
        truthId: "10000000-0000-0000-0000-000000000001"
      },
      {
        id: "20000000-0000-0000-0000-000000000023",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000006",
        truthId: "10000000-0000-0000-0000-000000000004"
      },
      {
        id: "20000000-0000-0000-0000-000000000024",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000006",
        truthId: "10000000-0000-0000-0000-000000000006"
      },
      {
        id: "20000000-0000-0000-0000-000000000025",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000007",
        truthId: "10000000-0000-0000-0000-000000000003"
      },
      {
        id: "20000000-0000-0000-0000-000000000026",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000007",
        truthId: "10000000-0000-0000-0000-000000000004"
      },
      {
        id: "20000000-0000-0000-0000-000000000027",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000007",
        truthId: "10000000-0000-0000-0000-000000000007"
      },
      {
        id: "20000000-0000-0000-0000-000000000028",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000007",
        truthId: "10000000-0000-0000-0000-000000000009"
      },
      {
        id: "20000000-0000-0000-0000-000000000029",
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000007",
        truthId: "10000000-0000-0000-0000-000000000010"
      },
      {
        id: "20000000-0000-0000-0000-000000000030",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000008",
        truthId: "10000000-0000-0000-0000-000000000001"
      },
      {
        id: "20000000-0000-0000-0000-000000000031",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000008",
        truthId: "10000000-0000-0000-0000-000000000003"
      },
      {
        id: "20000000-0000-0000-0000-000000000032",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000008",
        truthId: "10000000-0000-0000-0000-000000000007"
      },
      {
        id: "20000000-0000-0000-0000-000000000033",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000008",
        truthId: "10000000-0000-0000-0000-000000000008"
      },
      {
        id: "20000000-0000-0000-0000-000000000034",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000008",
        truthId: "10000000-0000-0000-0000-000000000010"
      },
      {
        id: "20000000-0000-0000-0000-000000000035",
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000008",
        truthId: "10000000-0000-0000-0000-000000000011"
      },
      {
        id: "20000000-0000-0000-0000-000000000036",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000009",
        truthId: "10000000-0000-0000-0000-000000000001"
      },
      {
        id: "20000000-0000-0000-0000-000000000037",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000009",
        truthId: "10000000-0000-0000-0000-000000000005"
      },
      {
        id: "20000000-0000-0000-0000-000000000038",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000009",
        truthId: "10000000-0000-0000-0000-000000000006"
      },
      {
        id: "20000000-0000-0000-0000-000000000039",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000009",
        truthId: "10000000-0000-0000-0000-000000000007"
      },
      {
        id: "20000000-0000-0000-0000-000000000040",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000009",
        truthId: "10000000-0000-0000-0000-000000000009"
      },
      {
        id: "20000000-0000-0000-0000-000000000041",
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000009",
        truthId: "10000000-0000-0000-0000-000000000011"
      },
      {
        id: "20000000-0000-0000-0000-000000000042",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000010",
        truthId: "10000000-0000-0000-0000-000000000003"
      },
      {
        id: "20000000-0000-0000-0000-000000000043",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000010",
        truthId: "10000000-0000-0000-0000-000000000007"
      },
      {
        id: "20000000-0000-0000-0000-000000000044",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000010",
        truthId: "10000000-0000-0000-0000-000000000010"
      },
      {
        id: "20000000-0000-0000-0000-000000000045",
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000010",
        truthId: "10000000-0000-0000-0000-000000000011"
      },
      {
        id: "20000000-0000-0000-0000-000000000046",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000011",
        truthId: "10000000-0000-0000-0000-000000000001"
      },
      {
        id: "20000000-0000-0000-0000-000000000047",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000011",
        truthId: "10000000-0000-0000-0000-000000000002"
      },
      {
        id: "20000000-0000-0000-0000-000000000048",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000011",
        truthId: "10000000-0000-0000-0000-000000000005"
      },
      {
        id: "20000000-0000-0000-0000-000000000049",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000011",
        truthId: "10000000-0000-0000-0000-000000000006"
      },
      {
        id: "20000000-0000-0000-0000-000000000050",
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "00000000-0000-0000-0000-000000000011",
        truthId: "10000000-0000-0000-0000-000000000011"
      },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Votes', null, {});
  }
};
