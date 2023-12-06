import Image from 'next/image'

export default function Search () {
  return (
    <div className="relative w-full flex flex-col items-center justify-center p-12 shadow-xl bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(/lol-background.webp)', height: '25rem' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 flex items-center mb-6">
        <Image
          src="/icon-league-of-legends.svg"
          alt="League of Legends"
          width={40}
          height={40}
          className="mr-3"
        />
        <span className="text-3xl text-white font-bold">League of Stats</span>
      </div>
      <form className="flex flex-col z-10">
        <div className="flex items-center bg-white bg-opacity-20 rounded backdrop-blur-sm shadow-lg mb-4">
          <div className="pl-3">
            <Image
              src="/user.svg"
              alt="User Icon"
              width={24}
              height={24}
              className="filter invert"
            />
          </div>
          <input
            type="text"
            placeholder="Summoner Name"
            className="bg-transparent py-2 pl-2 pr-3 w-full border-2 border-transparent focus:outline-none focus:border-accent1 text-white"
          />
          <span className="text-white mx-2">#</span>
          <input
            type="text"
            placeholder="1234"
            className="bg-transparent py-2 px-3 border-transparent focus:outline-none focus:border-accent1 text-white w-20 sm:w-24 md:w-25 lg:w-26"
          />
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <button
              type="button"
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold rounded border-b-2 border-black shadow-md py-1 px-3 inline-flex items-center ml-4"
            >
              <Image
                src="/riot.svg"
                alt="Riot Logo"
                width={20}
                height={20}
                className="mr-2"
              />
              Login
          </button>
          <button
            type="submit"
            className="bg-white text-gray-800 font-bold rounded border-b-2 border-yellow-500 hover:border-green-600 shadow-md py-1 px-3 inline-flex items-center"
          >
            <div className="pr-3">
              <Image
                src="/search.svg"
                alt="Search Icon"
                width={15}
                height={15}
              />
            </div>
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
