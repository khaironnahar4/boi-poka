const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen px-[6vw]">
      <div className="hero-content flex-col gap-12 lg:flex-row-reverse">
        <img
          src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
          className="max-w-56 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn bg-green-600 mt-8">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
