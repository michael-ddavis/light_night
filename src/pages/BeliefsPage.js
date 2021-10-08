import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/outline';
import visionImage from '../images/bible.jpg';

const beliefs = [
  {
    title: 'The Father',
    description:
      'We believe that the Father is the Lord equal in every way to the Son and the Spirit. He is our Father. From everlasting to everlasting He is the LORD God. His understanding is unsearchable. He is the creator of the heavens and gives life and breath to all things and all people. His way is perfect. God is Love. He is slow to anger and plenteous in mercy. We worship and honor Him as King and ruler of all. He is supreme. He is Holy. There is not one like Him. There is no one that compares to Him.',
    references: [
      'Psalm 145:8',
      'Lamentations 3:22',
      'Acts 17:24-25',
      'John 3:16',
      'Revelation 4:11',
      'Jeremiah 10:12',
      'Psalm 147:5',
      'James 1:17',
      'Isaiah 44:6',
      'Psalm 18:30',
      'Revelation 1:8',
      'Isaiah 40:28',
      '1 John4:8',
    ],
  },
  {
    title: 'The Son',
    description:
      'We believe that the Son, whose name is Jesus, is the perfect image of the invisible God. He is the Lord. He is equal to the Father and The Spirit in every way. He is the radiance of the Glory of God and is the exact imprint of God’s nature. He is the one the prophets of old spoke of. He is the one the scriptures speak of. He is one with the Father. Jesus is the way, the truth and the life. No one comes to the Father except through Him. Jesus the Christ is our savior and our Lord. He is our High Priest. He is the Word in the flesh. He is the head of the church. We exist to make Him known. We do this to make Jesus Famous.',
    references: [
      'Colossians 1:15-17',
      'Hebrews 1:3',
      'John 10:30',
      'John 5:39',
      'John 14:6',
      '1 Timothy 2:5',
      'Isaiah 7:14',
      'Colossians 2:9',
      'Isaiah 53',
      'Zechariah 9:9',
      'John 3:17',
    ],
  },
  {
    title: 'The Holy Spirit',
    description:
      'We believe that The Holy Spirit is the very Spirit of the Lord Himself. The Holy Spirit is not less than the Father or the Son but is equal in every way. The Holy Spirit is the power of the Godhead. He is the Spirit of Truth. He hears what is spoken from the Father and speaks it to the believer. We are His temple, He lives in us. He prays for us and through us. He gives every believer one or more gifts as He chooses to do so. We rely on Him as our guide, teacher and helper.',
    references: [
      '1 Corinthians 12:1-8',
      'John 14:26',
      'Romans 8:26',
      '1 Corinthians 6:19',
      '2 Corinthians 3:17',
      'John 15:26',
      'Acts 2:1-47',
      'Romans 8:14',
    ],
  },
  {
    title: 'The Bible',
    description:
      'We believe that the Word of God is the infallible and everlasting truth of God. The Word of God is the foundation of what we stand on. The word of God stands forever. The Lord puts His Word above His own name, and we must honor and respect it. It is powerful and sharp, alive and relevant. It needs no substitutions or additives, it can and does stand on its own with no help needed. God means exactly what He says and we agree with every word from Genesis 1 to Revelation 22.',
    references: [
      'Hebrews 4:12',
      'Psalm 119:105',
      'John 1:1',
      'John 1:14',
      'Proverbs 30:5',
      'Luke 11:28',
      'Psalm 138:2',
    ],
  },
  {
    title: 'Worship',
    description:
      "We believe that worship is more than the songs that we sing, it's about the posture of our heart before an Almighty God. Worship is a lifestyle. Worship is sacrifice. Worship is an offering. Worship is an action. Worship brings intimacy with the Lord. Worship invites God’s manifested presence into our lives. Worship is paramount.",
    references: [
      'John 4:23',
      'Hebrews 13:15',
      'Psalm 29:2',
      'Psalm 96:9',
      '1 Chronicles 16:29',
      'Psalm 71:8',
      'Exodus 34:14',
    ],
  },
  {
    title: 'Unity',
    description:
      'We believe that God created the body of Christ to be unified. There is no division in heaven and there should be no division in the body. God called us to be unified under one Lord, the Lord Jesus. The Word says in John 3:36 that “Whoever believes in the Son has eternal life”. We believe that regardless of denomination, culture, race, ethnicity, color, or gender the church needs to be unified.',
    references: [
      'Psalm 133:1',
      'Galatians 3:28',
      'Ephesians 4:3-6',
      '1 Corinthians 1:10',
      'Romans 14:19',
    ],
  },
];

const BeliefsPage = () => {
  return (
    <div className="container flex flex-col mx-auto min-w-full">
      {/* Events header */}
      <div className="relative">
        <div className="mx-auto">
          <div className="relative sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={visionImage}
                alt="People worshipping"
              />
              <div className="absolute inset-0 bg-gray-400 mix-blend-darken" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block uppercase tracking-widest text-white">
                  Our Beliefs
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {beliefs.map((belief, index) => (
        <div
          className="py-10 px-10 md:px-14 lg:px-20"
          key={index}
        >
          <h3 className="text-3xl font-medium pb-3">
            {belief.title}
          </h3>
          <p className="text-justify prose-lg">
            {belief.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-3 lg:pt-5">
            {belief.references.map((scripture, index) => (
              <div
                key={index}
                className="rounded-full py-1 px-3 text-xs font-medium md:font-semibold bg-gray-200 text-color-black flex-shrink-0 flex-none"
              >
                {scripture}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-row justify-end items-center p-6 rounded-bl-2xl rounded-br-2xl md:px-8 text-orange-500 hover:text-orange-700">
        <Link to="/about" className="text-xl font-medium">
          More About Light Night
        </Link>
        <ArrowRightIcon className="ml-3 h-5 w-5" />
      </div>
    </div>
  );
};

export default BeliefsPage;
