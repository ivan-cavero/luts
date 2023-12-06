import Image from 'next/image'

export default function Footer () {
  return (
    <footer className="bg-backgroundDarkerGray text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-3 gap-4 items-center">

        {/* Left Section */}
        <div className="space-y-2">
        <a href="/" className="inline-block">
            <div className="flex items-center space-x-2">
              <Image
                src="/icon-league-of-legends.svg"
                alt="League of Legends"
                width={30}
                height={30}
              />
              <span className="font-bold text-lg">League of Stats</span>
            </div>
          </a>
          <div className="flex">
            <select className="bg-buttonDark text-white rounded cursor-pointer p-1.5 mr-2 text-sm">
              <option value="en">EN</option>
            </select>
            <a href="/download" className="bg-buttonAccent hover:bg-accentBlue text-buttonTextWhite font-medium py-1.5 px-3 rounded text-sm transition duration-300">
              Download App
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center justify-center space-y-1">
        <span className="text-textLightGray text-sm">
            Made with love by <a href="https://github.com/ivan-cavero" target="_blank" rel="noopener noreferrer" className="text-accentBlue hover:underline">Ivan Cavero</a>
          </span>
          <div className="flex justify-center space-x-2">
            <a href="/terms" className="text-textLightGray hover:text-accentBlue text-xs transition duration-300">
              Terms of Service
            </a>
            <a href="/privacy" className="text-textLightGray hover:text-accentBlue text-xs transition duration-300">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-end space-x-10">
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm">Social</span>
            <a href="https://twitter.com" className="text-textLightGray hover:text-accentBlue text-xs transition duration-300 my-1">
              Twitter
            </a>
            <a href="https://discord.com" className="text-textLightGray hover:text-accentBlue text-xs transition duration-300 my-1">
              Our Discord
            </a>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm">Games</span>
            <span className="text-textLightGray text-xs my-1">
              League of Legends
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
