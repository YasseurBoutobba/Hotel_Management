{
  users: [
    {
      name: "jhon",
      age: 30,
      email: "randomail@estin.dz",
      password: "123456789",
      role: "user",
      booking: 0,

      loyalUser: this.booking >= 5 ? true : false,
      id: 1,
    },
  ];
  rooms: [
    {
      id: 1,
      name: "room1",
      type: "room" || "suite",
      price: 100,
      description: "description room1",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ikea.com%2Fus%2Fen%2Fp%2Fkallax-shelf-unit-white-80275887%2F&psig=AOvVaw2JZUc5oDj8h7V6qV9wX2z7&ust=1623956551781000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjH8J7Z0_ECFQAAAAAdAAAAABAD",
      available: true,
      booked: {
        user: "jhon",
        from: "2021-06-17",
        to: "2021-06-18",
      },
    },
  ];
  bookings: [
    {
      id: 1,
      user: "jhon",
      room: "room1",
      from: "2021-06-17",
      to: "2021-06-18",
      state: "pending" || "confirmed" || "canceled",
    },
  ];
}
