import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SiGooglemaps } from "react-icons/si";
import headerImage from '../../../public/image/header-img.png';
import footerImage from '../../../public/image/footer-img.png';
import cornerImage from "../../../public/image/corner-img.png";
import backgroundTexture from "../../../public/image/bg-flower-texture.jpeg";
import backgroundCard from "../../../public/image/dark-wave.jpeg";

export default function WeddingIndex(){
    const [searchParams] = useSearchParams();
    const guest = searchParams.get('guest');
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
    const calculateTimeLeft = () => {
        const weddingDate = new Date('2024-09-28T13:00:00'); // Set your wedding date and time
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

    const [value, setValue] = useState('1334974716');
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(value)
        .then(() => {
          alert('Nomor rekening telah disalin: ' + value);
        })
        .catch(err => {
          alert('Terjadi kesalahan saat menyalin: ', err);
        });
    };

    return (
        <div style={backgroundWedding} className="w-screen h-full text-black bg-no-repeat bg-fixed bg-cover">
            <div className="w-full h-screen sm:bg-white pt-5 sm:pt-0 shadow">
                <div className='hidden sm:inline-block'>
                    <img src={headerImage} alt="" />
                </div>
                <p className="text-center font-bold text-2xl sm:text-3xl mb-10 sm:mb-2">THE WEDDING OF</p>
                <div className="text-center text-[80px] sm:text-[90px] dancing-script-regular mb-20 sm:mb-2">
                    <p>Fahrul</p>
                    <p>&</p>
                    <p>Andari</p>
                </div>
                <div className="text-center w-full">
                    <div className="text-center py-1 px-2 sm:px-8 mb-10 sm:mb-0">
                        <p className='text-base sm:text-xl'>
                            Kepada Yang Terhormat Bapak/Ibu/Saudara/i
                        </p>
                        <p className="text-lg sm:text-2xl mb-2 font-semibold">
                            {guest}
                        </p>
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

            <div className="w-full h-min bg-white border-t-2">
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
                        Dengan penuh rasa syukur dan kebahagiaan, kami mengundang Bapak/Ibu/Saudara/Saudari untuk menghadiri acara ngunduh mantu kami.
                    </p>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='w-full sm:w-5/12 text-center'>
                            <p className='font-bold mb-1 sm:mb-5 text-6xl sm:text-7xl dancing-script-regular'>
                                Fahrul
                            </p>
                            <p className='text-2xl sm:text-3xl mb-1 sm:mb-5 font-semibold'>
                                Fahrul Wibowo Wicaksono
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
                                Andari
                            </p>
                            <p className='text-2xl sm:text-3xl mb-1 sm:mb-5 font-semibold'>
                                Andari Dwi Rahmawati
                            </p>
                            <p className='text-base sm:text-xl'>
                                Putri bapak Gono Sutrisno dan ibu Mariyem
                            </p>
                            <p className='text-sm sm:text-lg'>
                                Jalan Wologito V No 70, RT.02/RW.01 Kembangarum, Semarang Barat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-10 sm:py-20 px-5 sm:px-10 h-min bg-white">
                <div className='relative text-center mb-10 sm:mb-20'>
                    <p className='text-2xl sm:text-4xl font-bold mb-2 sm:mb-10 dancing-script-regular'>Ngunduh Mantu</p>
                    <p className='text-md sm:text-xl'>Sabtu, 28 September 2024</p>
                    <p className='text-md sm:text-xl'>13.00 WIB - selesai</p>
                    <p className='text-md sm:text-xl mb-4'>
                        Jalan Hilir RT.04/RW.04 Kembangarum, Semarang Barat
                    </p>
                    <iframe className='mx-auto mb-5 border-2 border-gray-700 w-min sm:w-96 h-56' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.148444051175!2d110.37194600000001!3d-6.991791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTknMzAuNSJTIDExMMKwMjInMTkuMCJF!5e0!3m2!1sid!2sid!4v1726663356098!5m2!1sid!2sid" />
                    <a 
                    href={"https://maps.app.goo.gl/dyoSYrY557ZPzp3e9"}
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
                    <p className='text-2xl sm:text-4xl font-bold mb-2 sm:mb-10 dancing-script-regular'>Wedding Gift</p>
                    <p className='text-md sm:text-xl mb-5 sm:mb-16'>
                        Doa & restu Anda di acara pernikahan kami sudah cukup sebagai hadiah, namun apabila Anda ingin memberikan lebih, maka kami akan menerima dengan senang hati dan tentunya hal ini akan melengkapi kebahagiaan kami
                    </p>
                    <div style={bgCard} className='p-3 rounded-lg mx-auto text-white w-full md:w-1/2 lg:w-1/2 xl:w-4/12'>
                        <p className='text-md sm:text-xl my-2'>BNI</p>
                        <p className='text-md sm:text-xl my-2'>FAHRUL WIBOWO WICAKSONO</p>
                        <p className='text-md sm:text-xl my-2'>1334974716</p>
                        <button onClick={copyToClipboard} className="p-2 text-md rounded-full text-gray-700 bg-white my-2">Salin Nomor Rekening</button>
                    </div>
                </div>
            </div>
            <div className='hidden sm:inline-block'>
                <img src={footerImage} className='w-full bg-white' />
            </div>
        </div>
    )
}