import { useState } from "react";
import Footer from "../components/footer";

const Events = () => {
  // Event Data with images from the public folder
  const events = [
    { id: 1, name: "Shin Godzilla – Fan Screening", category: "Screening", image: "/events/shingoji.jpg", description: "A fan screening of Shin Godzilla. A must-watch for fans of the series!", price: 100000, ticketsAvailable: 50 },
    { id: 2, name: "Akira Yasuda Art Exhibition", category: "Exhibition", image: "/events/akiman.png", description: "An exhibition showcasing the finest of Japanese artist, Akiman.", price: 80000, ticketsAvailable: 100 },
    { id: 3, name: "The Return of The Tribe", category: "Concert", image: "/events/tribe.jpeg", description: "Live concert by A Tribe Called Quest, one of the most iconic hip hop bands.", price: 300000, ticketsAvailable: 200 },
    { id: 4, name: "Shin Kamen Rider – Fan Screening", category: "Screening", image: "/events/shinkr.png", description: "A fan screening of the latest Kamen Rider film.", price: 120000, ticketsAvailable: 75 },
    { id: 5, name: "Akira, A Katsuhiro Otomo Exhibition", category: "Exhibition", image: "/events/akira.jpg", description: "An exhibition dedicated to the legendary Akira manga and film.", price: 90000, ticketsAvailable: 60 },
    { id: 6, name: "Rebuild of Evangelion – Fan Screening", category: "Screening", image: "/events/eva.jpeg", description: "Fan screening of the Rebuild of Evangelion films. A treat for anime lovers!", price: 110000, ticketsAvailable: 100 },
    { id: 7, name: "MF DOOM (Various Performances)", category: "Concert", image: "/events/mfdoom.jpg", description: "Various performances by MF DOOM. The underground legend.", price: 250000, ticketsAvailable: 150 },
    { id: 8, name: "Shing02 – Live Performance", category: "Concert", image: "/events/shing02.jpg", description: "Live performance by Shing02, the well-known Japanese-American rapper.", price: 200000, ticketsAvailable: 120 },
    { id: 9, name: "Tezuka Osamu Exhibition", category: "Exhibition", image: "/events/astroboy.jpeg", description: "An exhibition celebrating the works of the legendary manga artist Osamu Tezuka.", price: 70000, ticketsAvailable: 50 },
    { id: 10, name: "The King Gnu Experience", category: "Concert", image: "/events/kinggnu.jpg", description: "Live performance by A Tribe Called Quest. A classic in the hip-hop world.", price: 350000, ticketsAvailable: 180 },
    { id: 11, name: "Studio Ghibli Museum Exhibition", category: "Exhibition", image: "/events/totoro.png", description: "Exhibition showcasing Studio Ghibli's enchanting world of animation.", price: 100000, ticketsAvailable: 200 },
    { id: 12, name: "Shin Ultraman – Fan Screening", category: "Screening", image: "/events/shin-ultraman.png", description: "Fan screening of the latest Ultraman movie. A great experience for fans of the series!", price: 130000, ticketsAvailable: 50 },
  ];

  // State for Filters and Selected Event
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [ticketQuantity, setTicketQuantity] = useState(1);  // State for ticket quantity
  const [coupon, setCoupon] = useState<string>("none");  // State for selected coupon
  const [isPurchasing, setIsPurchasing] = useState(false);  // State to handle purchase flow
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);  // State for purchase success

  // Coupons data
  const coupons = [
    { code: "DISCOUNT10", discount: 0.1, label: "10% OFF" }, // 10% discount
    { code: "DISCOUNT20", discount: 0.2, label: "20% OFF" }, // 20% discount
    { code: "DISCOUNT50", discount: 0.5, label: "50% OFF" }, // 50% discount
    { code: "OFF50000", discount: 50000, label: "IDR 50,000 OFF" }, // IDR 50,000 discount
    { code: "OFF100000", discount: 100000, label: "IDR 100,000 OFF" }, // IDR 100,000 discount
  ];

  // Filtered Events Logic
  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(event.category);
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Toggle Category Logic
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category) // Remove category if already selected
        : [...prev, category] // Add category if not selected
    );
  };

  // Open Modal for Selected Event
  const openEventDetails = (event: any) => {
    setSelectedEvent(event);
    setTicketQuantity(1); // Reset ticket quantity when opening a new event
    setIsPurchasing(false); // Reset the purchasing state
    setPurchaseSuccess(false); // Reset purchase success state
  };

  // Close Modal
  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  // Update Quantity
  const updateQuantity = (amount: number) => {
    if (ticketQuantity + amount > 0 && ticketQuantity + amount <= selectedEvent?.ticketsAvailable) {
      setTicketQuantity(ticketQuantity + amount);
    }
  };

  // Calculate Total Price
  const totalPrice = selectedEvent ? selectedEvent.price * ticketQuantity : 0;

  // Calculate Discounted Price
  const getDiscountedPrice = () => {
    if (coupon === "none") return totalPrice;
    const selectedCoupon = coupons.find(c => c.code === coupon);
    if (!selectedCoupon) return totalPrice;
    if (selectedCoupon.discount > 1) {
      return totalPrice - selectedCoupon.discount; // Fixed amount discount
    }
    return totalPrice - totalPrice * selectedCoupon.discount; // Percentage discount
  };

  // Handle Purchase Success
  const handlePurchase = () => {
    setIsPurchasing(false);
    setPurchaseSuccess(true); // Show success message after purchase
  };

  // Reset and go back to event page
  const goBackToEvents = () => {
    setPurchaseSuccess(false);
    setSelectedEvent(null); // Close any event modal
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Search Section */}
      <div className="text-center bg-blue-600 text-white py-10 px-6">
        <h1 className="text-4xl font-bold mb-6">Thinking of going somewhere fun today?</h1>
        <div className="bg-white shadow-lg p-6 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search for events..."
              className="w-full sm:w-2/3 p-4 border border-gray-300 rounded-md text-lg text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* Category Filters */}
            <div className="flex space-x-4 items-center text-black">
              {["Concert", "Screening", "Exhibition"].map((category) => (
                <label key={category} className="flex items-center space-x-2 text-lg">
                  <input
                    type="checkbox"
                    className="w-6 h-6"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openEventDetails(event)}
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold">{event.name}</h2>
                <p className="text-gray-700">{event.category}</p>
                <p className="text-gray-500 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Modal (Purchase Details) */}
      {selectedEvent && !purchaseSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <img
              src={selectedEvent.image}
              alt={selectedEvent.name}
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h2 className="text-3xl font-bold mb-4">{selectedEvent.name}</h2>
            <p className="text-lg">{selectedEvent.description}</p>
            <div className="my-4">
              <span className="text-xl">Ticket Price: IDR {selectedEvent.price.toLocaleString()}</span>
            </div>
            <div className="mb-4 flex items-center">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => updateQuantity(-1)}
              >
                -
              </button>
              <span className="mx-4 text-xl">{ticketQuantity}</span>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => updateQuantity(1)}
              >
                +
              </button>
            </div>

            {/* Coupon Code */}
            <div className="mb-4">
              <label className="block text-lg">Apply Coupon</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              >
                <option value="none">None</option>
                {coupons.map((coupon) => (
                  <option key={coupon.code} value={coupon.code}>
                    {coupon.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-2xl">Total: IDR {getDiscountedPrice().toLocaleString()}</span>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                onClick={() => { setIsPurchasing(true); setTimeout(handlePurchase, 2000); }}
              >
                {isPurchasing ? "Processing..." : "Purchase"}
              </button>
            </div>

            <button
              className="mt-4 text-red-500"
              onClick={closeEventDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Purchase Success Page */}
      {purchaseSuccess && (
        <div className="fixed inset-0 bg-white flex flex-col justify-center items-center p-10 z-50">
          <h2 className="text-4xl font-bold text-green-500 mb-4">Purchase Successful!</h2>
          <p className="text-xl text-center mb-4">Thank you for your purchase! Your ticket will be sent to your email.</p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-md"
            onClick={goBackToEvents}
          >
            Go back to events
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Events;












