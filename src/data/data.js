user = {
  userInfos: {
    name: "jhon",
    age: 30,
    email: "bla@estin.dz",
    password: "123456789",
    role: "user",
  },
  bookingStatus: "Pending" || "Approved" || "Declined",
  currentBooking: {
    type: "room" || "suite",
    name: "room1",
    from: "2021-06-17",
    to: "2021-06-18",
  },
  loyalUser: true || false,
  nemberOfBooking: 0,
  id: 1,
};
room = {
  type: "room" || "suite",
  name: "room1",
  price: 100,
  description: "description room1",
  numberOfBed: 2,
  availability: true || false,
};
