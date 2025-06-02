import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SiGooglemaps } from "react-icons/si";
import headerImage from '/image/header-img.png';
import footerImage from '/image/footer-img.png';
import cornerImage from "/image/corner-img.png";
import backgroundTexture from "/image/bg-flower-texture.jpeg";
import backgroundCard from "/image/dark-wave.jpeg";
import cinematicWeddingAudio from "/audio/Nyoman Paul, Andi Rianto  The Way You Look At Me (Official Music Video).mp3";

export default function WeddingIndex(){
    const [searchParams] = useSearchParams();
    const guest = searchParams.get('guest');
    const [isAtTop, setIsAtTop] = useState(true);

    const backgroundWedding = {
      backgroundImage: `url(${backgroundTexture})`,
      backgroundSize: 'cover', // or 'contain' depending on your needs
      backgroundPosition: 'center',
      height: '100vh', // Make sure the div takes the full height
      width: '100%',
    };

    const bgCard = {
      backgroundImage: `url(${backgroundCard})`,
      backgroundPosition: 'center',
    };

    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const calculateTimeLeft = () => {
        const weddingDate = new Date('2025-09-25T12:00:00'); // Set your wedding date and time
        const now = new Date();
        const difference = weddingDate - now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }else{
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
      const playAudio = async () => {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log("Audio playback failed:", error);
        }
      };
  
      playAudio();
    }, [isMuted]);

    const toggleMute = () => {
        setIsMuted((prev) => !prev)
        audioRef.current.muted = false
    }

    // const [norek] = useState('1360032026939');
    // const [norek2] = useState('1360032026939');
  
    const copyToClipboard = (norek) => {
      navigator.clipboard.writeText(norek)
        .then(() => {
          alert('Nomor rekening telah disalin: ' + norek);
        })
        .catch(err => {
          alert('Terjadi kesalahan saat menyalin: ', err);
        });
    };

    const handleScroll = () => {
      if (window.scrollY <= 5) {
        setIsAtTop(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
      } else {
        setIsAtTop(false);
        document.body.style.overflow = 'auto'; // Enable scrolling
      }
    };

    useEffect(() => {

        // Scroll to the top on component mount
        window.scrollTo(0, 0);

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup listener on unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const scrollToSection = () => {
        const section = document.getElementById('target-section');
        section.scrollIntoView({ behavior: 'smooth' });
    
        // Enable scrolling after clicking the button
        document.body.style.overflow = 'auto';

        toggleMute()
    };

    useEffect(() => {
        // Scroll to the top on refresh
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={backgroundWedding} className="w-screen h-full text-black bg-no-repeat bg-fixed bg-cover">
            <div className="w-full h-screen sm:bg-white pt-5 sm:pt-0 shadow">
                <div className='hidden sm:inline-block'>
                    <img src={headerImage} alt="" />
                </div>
                <p className="text-center font-bold text-2xl mb-5 sm:mb-0">THE WEDDING OF</p>
                <div className="text-center text-[70px] dancing-script-regular mb-10 sm:mb-0">
                    <p>Bagas</p>
                    <p>&</p>
                    <p>Ria</p>
                </div>
                <div className="text-center w-full">
                    <div className="text-center pb-1 px-2 sm:px-8 mb-5 sm:mb-0">
                        <p className='text-base sm:text-xl mb-1'>
                            Kepada Yang Terhormat Bapak/Ibu/Saudara/i
                        </p>
                        <p className="text-3xl mb-2 font-semibold">
                            {guest}
                        </p>
                        <button onClick={scrollToSection} className='text-white mb-1 bg-gray-800'>Buka Undangan</button>
                    </div>
                    <div className="flex flex-row gap-4 mb-1 justify-center w-5/12 mx-auto"> 
                        <div className='px-6 py-3 text-center rounded-lg shadow-lg bg-white bg-opacity-15'>
                            <p className='text-4xl'>{timeLeft.days}</p>
                            <p className=''> Hari</p>
                        </div>
                        <div className='px-6 py-3 text-center rounded-lg shadow-lg bg-white bg-opacity-15'>
                            <p className='text-4xl'>{timeLeft.hours}</p>
                            <p className=''> Jam</p>
                        </div>
                        <div className='px-6 py-3 text-center rounded-lg shadow-lg bg-white bg-opacity-15'>
                            <p className='text-4xl'>{timeLeft.minutes}</p>
                            <p className=''> Menit</p>
                        </div>
                        <div className='px-6 py-3 text-center rounded-lg shadow-lg bg-white bg-opacity-15'>
                            <p className='text-4xl'>{timeLeft.seconds}</p>
                            <p className=''> Detik</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="target-section" className="w-full h-min bg-white border-t-2">
                <div className="text-center py-10 sm:py-20 px-3 sm:px-8">
                    <p className='font-bold text-xl sm:text-4xl mb-2 sm:mb-5'>
                    وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
                    </p>
                    <p className='text-sm sm:text-xl'>
                    "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
                    </p>
                    <p className='text-base sm:text-xl font-semibold'>
                    Q.R Surah Ar Rum:21
                    </p>
                </div>
            </div>

            <div style={backgroundWedding} className="w-full h-min bg-white bg-no-repeat bg-fixed bg-cover">
                <div className="text-center py-10 sm:py-36 px-5 sm:px-10">
                    <p className="font-bold text-xl sm:text-4xl mb-2 sm:mb-4 italic">
                        Assalamu'alaikum Warahmatullahi Wabarakatuh,
                    </p>
                    <p className="text-base sm:text-xl mb-10 sm:mb-20">
                        Dengan penuh rasa syukur dan kebahagiaan, kami mengundang Bapak/Ibu/Saudara/Saudari untuk menghadiri acara resepsi kami.
                    </p>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='w-full sm:w-5/12 text-center'>
                            <p className='font-bold mb-1 sm:mb-5 text-6xl sm:text-7xl dancing-script-regular'>
                                Bagas
                            </p>
                            <p className='text-2xl sm:text-3xl mb-1 sm:mb-5 font-semibold'>
                                Dimas Bagas Prakoso
                            </p>
                            <p className='text-base sm:text-xl'>
                                Putra bapak Purwanto dan ibu Aniningsih
                            </p>
                            <p className='text-sm sm:text-lg'>
                                Jalan Hilir RT.04/RW.04 Kembangarum, Semarang Barat
                            </p>
                        </div>
                        <div className='w-full sm:w-2/12 my-10 sm:my-0 content-center'>
                            <p className='font-bold text-7xl dancing-script-regular'>&</p>
                        </div>
                        <div className='w-full sm:w-5/12 text-center'>
                            <p className='font-bold mb-1 sm:mb-5 text-6xl sm:text-7xl dancing-script-regular'>
                                Ria
                            </p>
                            <p className='text-2xl sm:text-3xl mb-1 sm:mb-5 font-semibold'>
                                Ria Fatimatuz Zumaro
                            </p>
                            <p className='text-base sm:text-xl'>
                                Putri bapak Khudori dan ibu Fathonah
                            </p>
                            <p className='text-sm sm:text-lg'>
                                Jl. Jend. Urip Sumoharjo, Wonosari, Ngaliyan
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-10 sm:py-20 px-5 sm:px-10 h-min bg-white">
                <div className='relative text-center mb-10 sm:mb-20'>
                    <p className='text-3xl sm:text-4xl font-bold mb-2 sm:mb-8 dancing-script-regular'>Akad Nikah</p>
                    <p className='text-md sm:text-xl'>Sabtu, 25 September 2025</p>
                    <p className='text-md sm:text-xl mb-8'>07.00 WIB - selesai</p>

                    <img src={cornerImage} className='absolute transform -right-10 w-36 sm:w-56' alt="" />

                    <p className='text-3xl sm:text-4xl font-bold mb-2 sm:mb-10 dancing-script-regular'>Resepsi</p>
                    <p className='text-md sm:text-xl'>Sabtu, 25 September 2025</p>
                    <p className='text-md sm:text-xl mb-8'>12.00 WIB - selesai</p>
                    <p className='text-md sm:text-xl mb-4'>
                        Jl. Jend. Urip Sumoharjo, Wonosari, Ngaliyan
                    </p>
                    <iframe className='mx-auto mb-5 border-2 border-gray-700 w-min sm:w-96 h-56' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1035.7048254693862!2d110.31048696599059!3d-6.972818591360223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705fe65fb8dcd7%3A0x902fa683a6ad3cad!2smusholla%20at%20thohirin!5e0!3m2!1sen!2sid!4v1748854478172!5m2!1sen!2sid" />
                    <a 
                    href={"https://maps.app.goo.gl/7mHbH6sivCX6TZgWA"}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center mx-auto p-2 w-fit bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                    <SiGooglemaps className="mr-1" /> {/* Icon with margin */}
                    Open Google Maps
                    </a>
                    <img src={cornerImage} className='absolute transform scale-x-[-1] -bottom-20 sm:-bottom-32 -left-10 w-36 sm:w-56' alt="" />
                    
                </div>
                <div className='flex flex-col text-center mb-5 sm:mb-20'>
                    <p className='text-3xl sm:text-4xl font-bold mb-2 sm:mb-10 dancing-script-regular'>Wedding Gift</p>
                    <p className='text-md sm:text-xl mb-5 sm:mb-16'>
                        Doa & restu Anda di acara pernikahan kami sudah cukup sebagai hadiah, namun apabila Anda ingin memberikan lebih, maka kami akan menerima dengan senang hati dan tentunya hal ini akan melengkapi kebahagiaan kami
                    </p>
                    <div style={bgCard} className='p-3 rounded-lg mx-auto text-white w-full md:w-1/2 lg:w-1/2 xl:w-4/12'>
                        <p className='text-md sm:text-xl my-2'>MANDIRI</p>
                        <p className='text-md sm:text-xl my-2'>DIMAS BAGAS PRAKOSO</p>
                        <p className='text-md sm:text-xl my-2'>1360032026939</p>
                        <button onClick={() => copyToClipboard('1360032026939')} className="p-2 text-md rounded-full text-gray-700 bg-white my-2">Salin Nomor Rekening</button>
                    </div>
                    <div style={bgCard} className='p-3 mt-4 rounded-lg mx-auto text-white w-full md:w-1/2 lg:w-1/2 xl:w-4/12'>
                        <p className='text-md sm:text-xl my-2'>MANDIRI</p>
                        <p className='text-md sm:text-xl my-2'>RIA FATIMATUZ ZUMARO</p>
                        <p className='text-md sm:text-xl my-2'>1360033082436</p>
                        <button onClick={() => copyToClipboard('1360033082436')} className="p-2 text-md rounded-full text-gray-700 bg-white my-2">Salin Nomor Rekening</button>
                    </div>
                </div>

                <audio ref={audioRef} autoPlay loop>
                <source src={cinematicWeddingAudio} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            </div>
            <div className='hidden sm:inline-block'>
                <img src={footerImage} className='w-full bg-white' />
            </div>
        </div>
    )
}