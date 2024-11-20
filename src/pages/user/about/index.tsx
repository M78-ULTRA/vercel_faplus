import Footer from "../components/footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white flex flex-col justify-center items-center py-16 px-6 md:px-12">
        <h1 className="text-4xl font-bold animate__animated animate__fadeIn animate__delay-1s text-center">
          Welcome to FA+
        </h1>
        <p className="text-lg mt-4 animate__animated animate__fadeIn animate__delay-2s text-center">
          Your trusted partner for hassle-free event ticketing with transparency.
        </p>
      </div>

      {/* About Section */}
      <div className="flex-grow flex justify-center items-center bg-white py-12 px-4 md:px-10">
        <div className="max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-semibold text-blue-600 animate__animated animate__fadeIn animate__delay-1s">
            Our Mission
          </h2>
          <p className="text-lg mt-4 animate__animated animate__fadeIn animate__delay-2s">
            At FA+, we believe buying event tickets should be simple, transparent, and hassle-free. We’re committed to
            providing our customers with a seamless ticketing experience—free from hidden fees and complications. Our
            platform ensures you get the best deals with no surprises, so you can focus on enjoying the event!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 animate__animated animate__fadeIn animate__delay-3s">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-2xl font-semibold text-blue-600">Transparency</h3>
              <p className="text-lg">
                We believe that all fees and charges should be clear from the start. There are no hidden surprises when
                purchasing your tickets, so you always know what you're paying for.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-2xl font-semibold text-blue-600">Hassle-Free Experience</h3>
              <p className="text-lg">
                Our platform is designed to make the ticket-buying process as simple as possible. No complicated forms,
                no confusing steps—just quick, easy, and secure transactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-blue-600 text-white py-12 px-4 md:px-12">
        <div className="max-w-4xl text-center space-y-8 mx-auto">
          <h2 className="text-3xl font-semibold animate__animated animate__fadeIn animate__delay-1s">
            How FA+ Works
          </h2>
          <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
            <div className="flex flex-col items-center space-y-4 animate__animated animate__fadeIn animate__delay-2s">
              <h3 className="text-2xl font-semibold">Browse Events</h3>
              <p className="text-lg">Explore a wide range of events from concerts to conferences. Our platform has it all!</p>
            </div>
            <div className="flex flex-col items-center space-y-4 animate__animated animate__fadeIn animate__delay-3s">
              <h3 className="text-2xl font-semibold">Select Tickets</h3>
              <p className="text-lg">Choose your desired event, select the date and seat, and you're good to go!</p>
            </div>
            <div className="flex flex-col items-center space-y-4 animate__animated animate__fadeIn animate__delay-4s">
              <h3 className="text-2xl font-semibold">Enjoy the Event</h3>
              <p className="text-lg">Once your tickets are confirmed, all that's left is to show up and enjoy the event!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;





  