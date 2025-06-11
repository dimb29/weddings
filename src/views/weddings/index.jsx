import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SiGooglemaps } from "react-icons/si";
import headerImage from '/image/header-img.png';
import footerImage from '/image/footer-img.png';
import cornerImage from "/image/corner-img.png";
import backgroundTexture from "/image/bg-flower-texture.webp";
import backgroundCard from "/image/dark-wave.jpeg";
import cinematicWeddingAudio from "/audio/bermuara.mp3";
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { QRCodeCanvas } from 'qrcode.react';

const FadeInUp = ({ children, delay = 0, className = '' }) => {
      const ref = useRef(null);
      const isVisible = useInView(ref, { once: false });
    return (
    <div ref={ref} className={className}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 1, delay }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    );
  };

const FadeInLeft = ({ children, delay = 0, className = '', id = null }) => {
    const ref = useRef(null);
    const isVisible = useInView(ref, { once: false });
    return (
        <div id={id} ref={ref} className={className}>
          <AnimatePresence>
            {isVisible && (
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
            )}
          </AnimatePresence>
        </div>
    )
};

const FadeInRight = ({ children, delay = 0, className = '', id = null }) => {
    const ref = useRef(null);
    const isVisible = useInView(ref, { once: false });
    return (
        <div id={id} ref={ref} className={className}>
          <AnimatePresence>
            {isVisible && (
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
            )}
          </AnimatePresence>
        </div>
    )
};

const FadeInDown = ({ children, delay = 0, className = '', id = null }) => {
    const ref = useRef(null);
    const isVisible = useInView(ref, { once: false });
    return (
        <div id={id} ref={ref} className={className}>
          <AnimatePresence>
            {isVisible && (
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
            )}
          </AnimatePresence>
        </div>
    )
};

const QrCodeGenerator = ({ url }) => {
  return (
    <div className="flex justify-center p-4 text-center">
      <QRCodeCanvas
        value={url}
        size={150}
        bgColor="rgba(0,0,0,0)"
        fgColor={"#000000"}
        level={"H"}
        includeMargin={true}
      />
    </div>
  );
};

// const FadeInUp = ({ children, delay = 0 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false });

//   const variants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: 40 }, // fadeOut turun (mirip fadeInUp reverse)
//   };

//   return (
//     <div ref={ref} style={{ overflow: 'hidden' }}>
//       <AnimatePresence mode="wait">
//         {isInView && (
//           <motion.div
//             key="content"
//             variants={variants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.6, delay }}
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const FadeInLeft = ({ children, delay = 0 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false });

//   const variants = {
//     hidden: { opacity: 0, x: -40 },
//     visible: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: -40 },
//   };

//   return (
//     <div ref={ref} style={{ overflow: 'hidden' }}>
//       <AnimatePresence mode="wait">
//         {isInView && (
//           <motion.div
//             key="content"
//             variants={variants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.6, delay }}
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const FadeInRight = ({ children, delay = 0 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false });

//   const variants = {
//     hidden: { opacity: 0, x: 40 },
//     visible: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: 40 },
//   };

//   return (
//     <div ref={ref} style={{ overflow: 'hidden' }}>
//       <AnimatePresence mode="wait">
//         {isInView && (
//           <motion.div
//             key="content"
//             variants={variants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.6, delay }}
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const FadeInDown = ({ children, delay = 0 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false });

//   const variants = {
//     hidden: { opacity: 0, y: -40 },
//     visible: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -40 },
//   };

//   return (
//     <div ref={ref} style={{ overflow: 'hidden' }}>
//       <AnimatePresence mode="wait">
//         {isInView && (
//           <motion.div
//             key="content"
//             variants={variants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             transition={{ duration: 0.6, delay }}
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

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

    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
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
            if (audioRef.current) {
              audioRef.current.muted = isMuted;
              await audioRef.current.play();
            }
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
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        document.body.style.overflow = 'auto';
        }
        // toggleMute()
        setIsMuted(false)
        audioRef.current.muted = false
    };

    useEffect(() => {
        // Scroll to the top on refresh
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-screen overflow-x-hidden h-full text-black bg-fixed bg-center bg-cover bg-no-repeat bg-[url('/image/bg-flower-texture.webp')]">
            <div className='inline-block w-full'>
                <img src={headerImage} alt="" className="absolute w-full opacity-60 -mt-5" />
            </div>
            <div className="w-full flex items-center justify-center h-screen shadow">
                <div className="h-fit w-full">
                    <FadeInUp delay={0} className="h-8">
                        <p className="text-center font-bold text-2xl">THE WEDDING OF</p>
                    </FadeInUp>
                    <div className="text-center text-[70px] dancing-script-regular mb-10 sm:mb-0">
                        <FadeInUp delay={0.1} className="h-20 sm:h-32">
                            <p>Bagas</p>
                        </FadeInUp>
                        <FadeInUp delay={0.2} className="h-20 sm:h-32">
                            <p>&</p>
                        </FadeInUp>
                        <FadeInUp delay={0.3} className="h-20 sm:h-32">
                            <p>Ria</p>
                        </FadeInUp>
                    </div>
                    <div className="text-center w-full">
                        <div className="text-center pb-1 px-2 sm:px-8 mb-5 sm:mb-0">
                            <FadeInUp delay={0.4} className="h-6">
                                <p className='text-base sm:text-xl mb-1'>
                                    Kepada Yang Terhormat Bapak/Ibu/Saudara/i
                                </p>
                            </FadeInUp>
                            <FadeInUp delay={0.5} className="h-10 mb-2">
                                <p className="text-3xl font-semibold">
                                    {guest}
                                </p>
                            </FadeInUp>
                            <FadeInUp delay={0.6} className='h-12'>
                                <button onClick={() => scrollToSection() } className='text-white mb-1 bg-gray-800'>Buka Undangan</button>
                            </FadeInUp>
                        </div>
                        <FadeInUp delay={0.7} className='h-24'>
                            <div className="flex flex-row gap-4 mb-1 justify-center mx-auto px-1 sm:px-5"> 
                                <div className='w-20 sm:w-24 py-3 text-center border rounded-lg shadow-lg bg-white bg-opacity-15'>
                                    <p className='text-3xl sm:text-4xl'>{timeLeft.days}</p>
                                    <p className=''> Hari</p>
                                </div>
                                <div className='w-20 sm:w-24 py-3 text-center border rounded-lg shadow-lg bg-white bg-opacity-15'>
                                    <p className='text-3xl sm:text-4xl'>{timeLeft.hours}</p>
                                    <p className=''> Jam</p>
                                </div>
                                <div className='w-20 sm:w-24 sm:px-6 py-3 text-center border rounded-lg shadow-lg bg-white bg-opacity-15'>
                                    <p className='text-3xl sm:text-4xl'>{timeLeft.minutes}</p>
                                    <p className=''> Menit</p>
                                </div>
                                <div className='w-20 sm:w-24 sm:px-6 py-3 text-center border rounded-lg shadow-lg bg-white bg-opacity-15'>
                                    <p className='text-3xl sm:text-4xl'>{timeLeft.seconds}</p>
                                    <p className=''> Detik</p>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </div>
            
            <FadeInLeft id="target-section" delay={0.3} className="w-full h-[398px] flex items-center bg-white border-t-2 bg-opacity-60">
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
            </FadeInLeft>

            <div className="w-full h-min bg-white bg-opacity-0">
                <div className="text-center py-5 sm:py-36 px-5 sm:px-10">
                    <FadeInDown delay={0.3} className="h-20 sm:h-16 mb-2 sm:mb-4">
                        <p className="font-bold text-xl sm:text-4xl italic">
                            Assalamu'alaikum Warahmatullahi Wabarakatuh,
                        </p>
                    </FadeInDown>
                    <FadeInDown delay={0.4} className="h-24 sm:h-16 mb-2 sm:mb-4">
                        <p className="text-base sm:text-xl mb-10 sm:mb-20">
                            Dengan penuh rasa syukur dan kebahagiaan, kami mengundang Bapak/Ibu/Saudara/Saudari untuk menghadiri acara resepsi kami.
                        </p>
                    </FadeInDown>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='w-full sm:w-5/12 text-center'>
                            <FadeInLeft delay={0.3} className='h-20 mb-1 sm:mb-5'>
                                <p className='font-bold text-6xl sm:text-7xl dancing-script-regular'>
                                    Bagas
                                </p>
                            </FadeInLeft>
                            <FadeInLeft delay={0.4} className="h-20 sm:h-[206]">
                                <p className='text-2xl sm:text-3xl mb-1 sm:mb-5 font-semibold'>
                                    Dimas Bagas Prakoso
                                </p>
                                <p className='text-base sm:text-xl'>
                                    Putra Bapak Purwanto dan Ibu Aniningsih
                                </p>
                                <p className='text-sm sm:text-lg'>
                                    Jalan Hilir, Kembangarum, Semarang Barat
                                </p>
                            </FadeInLeft>
                        </div>
                        <div className='w-full sm:w-2/12 my-5 sm:my-0 content-center'>
                            <FadeInDown delay={0.3} className="h-20">
                                <p className='font-bold text-7xl dancing-script-regular'>&</p>
                            </FadeInDown>
                        </div>
                        <div className='w-full sm:w-5/12 text-center'>
                            <FadeInRight delay={0.3} className="h-20 mb-1 sm:mb-5">
                                <p className='font-bold text-6xl sm:text-7xl dancing-script-regular'>
                                    Ria
                                </p>
                            </FadeInRight>
                            <FadeInRight delay={0.4} className='h-20 sm:h-[206] mb-1 sm:mb-5'>
                                <p className='text-2xl sm:text-3xl mb-1 sm:mb-10 font-semibold'>
                                    Ria Fatimatuz Zumaroh
                                </p>
                                <p className='text-base sm:text-xl'>
                                    Putri Bapak Khudori dan Ibu Fatonah
                                </p>
                                <p className='text-sm sm:text-lg'>
                                    Jl. Jend. Urip Sumoharjo, Wonosari, Ngaliyan
                                </p>
                            </FadeInRight>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-10 sm:py-20 px-5 sm:px-10 h-min bg-white bg-opacity-60">
                <div className='relative text-center mb-10 sm:mb-20'>
                    <FadeInUp delay={0.3} className='h-9 mb-2 sm:mb-8'>
                        <p className='text-3xl sm:text-4xl font-bold dancing-script-regular z-10'>Akad Nikah</p>
                    </FadeInUp>
                    <FadeInUp delay={0.4} className="h-5">
                        <p className='text-md sm:text-xl z-10'>Kamis, 25 September 2025</p>
                    </FadeInUp>
                    <FadeInUp delay={0.5} className="h-5 mb-8 z-10">
                        <p className='text-md sm:text-xl'>07.00 WIB - selesai</p>
                    </FadeInUp>

                    <img src={cornerImage} className='absolute transform -right-5 sm:-right-10 w-36 sm:w-56 z-0' alt="" />

                    <FadeInUp delay={0.7} className="h-10 mb-2 sm:mb-10">
                        <p className='text-3xl sm:text-4xl font-bold dancing-script-regular'>Resepsi</p>
                    </FadeInUp>
                    <FadeInUp delay={0.8} className="h-5">
                        <p className='text-md sm:text-xl'>Kamis, 25 September 2025</p>
                    </FadeInUp>
                    <FadeInUp delay={0.9} className="h-5 mb-8">
                        <p className='text-md sm:text-xl'>12.00 WIB - selesai</p>
                    </FadeInUp>
                    <FadeInUp delay={1} className="h-5 mb-4">
                        <p className='text-md sm:text-xl'>
                            Jl. Jend. Urip Sumoharjo, Wonosari, Ngaliyan
                        </p>
                    </FadeInUp>
                    <FadeInUp delay={1.1} className="h-56 mb-5">
                    <iframe
                        className="mx-auto border-2 border-gray-700 w-full max-w-md h-56"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1035.7048254693862!2d110.31048696599059!3d-6.972818591360223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705fe65fb8dcd7%3A0x902fa683a6ad3cad!2smusholla%20at%20thohirin!5e0!3m2!1sen!2sid!4v1748854478172!5m2!1sen!2sid"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    </FadeInUp>
                    <FadeInUp delay={1.1} className="h-8">
                        <a 
                        href={"https://maps.app.goo.gl/7mHbH6sivCX6TZgWA"}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center mx-auto p-2 w-fit bg-blue-500 text-white rounded hover:bg-blue-700"
                        >
                        <SiGooglemaps className="mr-1" /> {/* Icon with margin */}
                        Open Google Maps
                        </a>
                    </FadeInUp>
                    <FadeInUp delay={1.1} className="h-5 mt-4">
                        <p className="text-md sm:text-xl">Atau scan QRCode dibawah ini:</p>
                    </FadeInUp>
                    <FadeInUp delay={1.1} className="flex justify-center mx-auto">
                        <QrCodeGenerator url="https://maps.app.goo.gl/7mHbH6sivCX6TZgWA" className=""></QrCodeGenerator>
                    </FadeInUp>
                    <img src={cornerImage} className='absolute transform scale-x-[-1] -bottom-20 sm:-bottom-32 -left-10 w-36 sm:w-56' alt="" />
                    
                </div>
                <div className='flex flex-col text-center mb-5 sm:mb-20'>
                    <FadeInUp delay={0.3} className="h-9 mb-2">
                        <p className='text-3xl sm:text-4xl font-bold sm:mb-10 dancing-script-regular'>Wedding Gift</p>
                    </FadeInUp>
                    <FadeInUp delay={0.4}>
                        <p className='text-md sm:text-xl mb-5 sm:mb-16'>
                            Doa & restu Anda di acara pernikahan kami sudah cukup sebagai hadiah, namun apabila Anda ingin memberikan lebih, maka kami akan menerima dengan senang hati dan tentunya hal ini akan melengkapi kebahagiaan kami
                        </p>
                    </FadeInUp>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:flex-row">
                        <FadeInLeft delay={0.5}>
                            <div style={bgCard} className='p-3 rounded-lg mx-auto text-white w-full'>
                                <p className='text-md sm:text-xl my-2'>BCA DIGITAL</p>
                                <p className='text-md sm:text-xl my-2'>DIMAS BAGAS PRAKOSO</p>
                                <p className='text-md sm:text-xl my-2'>007986162835</p>
                                <button onClick={() => copyToClipboard('007986162835')} className="p-2 text-md rounded-full text-gray-700 bg-white my-2">Salin Nomor Rekening</button>
                            </div>
                        </FadeInLeft>
                        <FadeInRight delay={0.5}>
                            <div style={bgCard} className='p-3 rounded-lg mx-auto text-white w-full'>
                                <p className='text-md sm:text-xl my-2'>MANDIRI</p>
                                <p className='text-md sm:text-xl my-2'>RIA FATIMATUZ ZUMARO</p>
                                <p className='text-md sm:text-xl my-2'>1360033082436</p>
                                <button onClick={() => copyToClipboard('1360033082436')} className="p-2 text-md rounded-full text-gray-700 bg-white my-2">Salin Nomor Rekening</button>
                            </div>
                        </FadeInRight>
                    </div>
                </div>

                <audio ref={audioRef} autoPlay loop>
                <source src={cinematicWeddingAudio} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
                <button
                    onClick={toggleMute}
                    className="fixed bottom-4 right-4 bg-slate-500 hover:bg-slate-600 bg-opacity-50 focus:bg-opacity-50 active:bg-opacity-50 focus:outline-none active:outline-none text-white px-4 py-2 rounded-full shadow-lg"
                    >
                    {isMuted ? '🔇 Music Off' : '🔊 Music On'}
                </button>
            </div>
            <div className='hidden sm:inline-block'>
                <img src={footerImage} className='w-full bg-white opacity-60' />
            </div>
        </div>
    )
}