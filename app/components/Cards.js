import Image from 'next/image'

const Card = ({ title, description, columnNames, columnAlignment, data, footerLink, customClasses }) => {
  const alignment = columnAlignment || new Array(columnNames.length).fill('center')

  return (
    <section className={`flex flex-col justify-between bg-backgroundDarkerGray rounded-lg shadow-xl overflow-hidden ${customClasses} h-full`}>
      <header className="bg-backgroundDarkerGray text-white p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-[#7d7f84] text-xs">{description}</p>
      </header>

      <div className="flex-grow flex flex-col">
        {data.length > 0
          ? (
          <>
            <div className="bg-backgroundDarkGray p-3 border-b border-backgroundMediumGray">
              <div className="text-[#7d7f84] text-xs uppercase flex justify-between">
                {columnNames.map((name, index) => (
                  <span key={index} className={`flex-1 text-${alignment[index]}`}>{name}</span>
                ))}
              </div>
            </div>
            <ul className="flex-grow flex flex-col justify-between text-white">
              {data.map((item, index) => (
                <li key={index} className={`flex justify-between items-center text-sm p-3 ${index < data.length - 1 ? 'border-b border-backgroundMediumGray' : ''}`} style={{ flex: '1 1 auto' }}>
                  {Object.entries(item).map(([key, value], idx) => {
                    if (key === 'champion') {
                      return (
                        <span key={idx} className={`flex-1 flex items-center text-${alignment[idx]}`}>
                          <Image
                            src={value.img}
                            alt={value.name}
                            width={24}
                            height={24}
                            className="w-10 h-10 mr-2"
                          />
                          {value.name}
                        </span>
                      )
                    }
                    return <span key={idx} className={`flex-1 text-${alignment[idx]}`}>{value}</span>
                  })}
                </li>
              ))}
            </ul>
          </>
            )
          : (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-white text-center">No data</p>
          </div>
            )}
      </div>

      <footer className="bg-backgroundMediumGray text-white text-center text-xs uppercase p-3 cursor-pointer hover:bg-backgroundLightGray">
        <a href={footerLink} className="hover:text-gray-300 w-full h-full">
          View More
        </a>
      </footer>
    </section>
  )
}

export default function Cards () {
  const statisticsData = [
    { champion: { name: 'Trundle', img: 'https://blitz-cdn.blitz.gg/blitz/lol/champion/48.webp' }, tier: 'A', winRate: '53.6%', change: '+4.7%' },
    { champion: { name: 'Ashe', img: 'https://blitz-cdn.blitz.gg/blitz/lol/champion/22.webp' }, tier: 'S', winRate: '57.2%', change: '+3.1%' },
    { champion: { name: 'Ashe', img: 'https://blitz-cdn.blitz.gg/blitz/lol/champion/22.webp' }, tier: 'S', winRate: '57.2%', change: '+3.1%' },
    { champion: { name: 'Ashe', img: 'https://blitz-cdn.blitz.gg/blitz/lol/champion/22.webp' }, tier: 'S', winRate: '57.2%', change: '+3.1%' }
  ]

  const topPlayersData = [
    { player: 'PlayerOne', rank: 'Diamond', winRate: '60%', kda: '3.5', gamesPlayed: '120' },
    { player: 'PlayerTwo', rank: 'Master', winRate: '58%', kda: '4.2', gamesPlayed: '150' },
    { player: 'PlayerOne', rank: 'Diamond', winRate: '60%', kda: '3.5', gamesPlayed: '120' },
    { player: 'PlayerTwo', rank: 'Master', winRate: '58%', kda: '4.2', gamesPlayed: '150' },
    { player: 'PlayerOne', rank: 'Diamond', winRate: '60%', kda: '3.5', gamesPlayed: '120' }
  ]

  return (
    <div className="flex justify-center items-center p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        <Card
            title="Statistics"
            description="Optimize your League of Legends gameplay..."
            columnNames={['Champion', 'Tier', 'Win Rate', 'Change']}
            columnAlignment={['left', 'center', 'center', 'center']}
            data={statisticsData}
            customClasses="max-h-[500px]"
            footerLink="#"
          />
          <Card
            title="Top Players"
            description="Explore the best players in League of Legends..."
            columnNames={['Player', 'Rank', 'Win Rate', 'KDA', 'Games Played']}
            data={topPlayersData}
            customClasses="max-h-[500px]"
            footerLink="#"
          />
      </div>
    </div>
  )
}
