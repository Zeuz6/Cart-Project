export let products = JSON.parse(localStorage.getItem('products'));

if(!products){
  products = [
  { id: "prod-bball-001", name: "Basketball Ball", priceCents: 1090 },
  { id: "prod-foot-002", name: "Football", priceCents: 1599 },
  { id: "prod-tennis-003", name: "Tennis Racket", priceCents: 3599 },
  { id: "prod-basebat-004", name: "Baseball Bat", priceCents: 2499 },
  { id: "prod-soccer-005", name: "Soccer Ball", priceCents: 1399 },
  { id: "prod-golf-006", name: "Golf Clubs Set", priceCents: 18999 },
  { id: "prod-boxing-007", name: "Boxing Gloves", priceCents: 4599 },
  { id: "prod-volley-008", name: "Volleyball", priceCents: 1499 },
  { id: "prod-hockey-009", name: "Hockey Stick", priceCents: 3299 },
  { id: "prod-skate-010", name: "Skateboard", priceCents: 4199 },
  { id: "prod-rollers-011", name: "Roller Skates", priceCents: 3799 },
  { id: "prod-jumprope-012", name: "Jump Rope", priceCents: 899 },
  { id: "prod-yogamat-013", name: "Yoga Mat", priceCents: 2099 },
  { id: "prod-dumb-014", name: "Dumbbell Set", priceCents: 4999 },
  { id: "prod-bands-015", name: "Resistance Bands", priceCents: 1799 },
  { id: "prod-helmet-016", name: "Bicycle Helmet", priceCents: 2799 },
  { id: "prod-tent-017", name: "Camping Tent", priceCents: 9999 },
  { id: "prod-sleep-018", name: "Sleeping Bag", priceCents: 5499 },
  { id: "prod-bottle-019", name: "Water Bottle", priceCents: 1299 },
  { id: "prod-kayak-020", name: "Kayak Paddle", priceCents: 2999 },
  { id: "prod-fishrod-021", name: "Fishing Rod", priceCents: 4599 },
  { id: "prod-goggles-022", name: "Swimming Goggles", priceCents: 1399 },
  { id: "prod-surf-023", name: "Surfboard", priceCents: 21999 },
  { id: "prod-snow-024", name: "Snowboard", priceCents: 24999 },
  { id: "prod-ski-025", name: "Ski Poles", priceCents: 6999 },
  { id: "prod-tread-026", name: "Treadmill", priceCents: 52999 },
  { id: "prod-bike-027", name: "Exercise Bike", priceCents: 28999 },
  { id: "prod-punch-028", name: "Punching Bag", priceCents: 3499 },
  { id: "prod-ttennis-029", name: "Table Tennis Paddle", priceCents: 1999 },
  { id: "prod-badmin-030", name: "Badminton Racket", priceCents: 2599 }
  ];
}
