
import quizx from '../assets/quiz/quizx.png';
import quizy from '../assets/quiz/quizy.png';
import artist from '../assets/quiz/artistpic.png';
import videoSrc from '../assets/quiz/test5.webm';
import backpattern from '../assets/quiz/back-pattern.png';
import { Link } from 'react-router-dom';
import artist2 from '../assets/quiz/artist2.png';

function Quiz() {
return (
    <div
        className="min-h-screen bg-cover bg-center flex justify-center items-start"
        style={{ backgroundImage: `url(${backpattern})` }}
    >
        <div className="max-w-[430px] w-full flex flex-col items-center px-4 pt-4 pb-8 bg-transparent">
            <br />
            <br />

            <main className="w-full flex-1 flex flex-col items-center">

                <section className="w-full text-center mt-4">


                    <h1 style={{ fontFamily: '"PO", sans-serif', color: "#2F4195" }} className="text-lg sm:text-base font-semibold">What do you think?</h1>

                    <p style={{ fontFamily: '"Poppins", sans-serif', color: "#2F4195" }} className="text-lg sm:text-base mt-1">
                        Swipe right to like, swipe left to dislike.
                    </p>
<br />
<br />


<div className="mt-6 flex justify-center">
    <div className="flex gap-5">
        {Array.from({ length: 7 }).map((_, i) => (
            <span
                key={i}
                className={`w-4 h-4 rounded-full ${i === 1 ? 'bg-[#2F4195]' : 'bg-[#21A6DB]/40'}`}
            />
        ))}
    </div>


<br />
<br />


                </div>
                    <h2 style={{ fontFamily: '"Bowlby One", sans-serif' }}
                    className="artist-name text-4xl mt-4 justify-center align-middle">SAVEUS</h2>
                </section>

                <br />

                {/* Combined container: video placed behind the artist image */}
                <section className="w-4/5 max-w-[428px] relative mt-4 grid justify-center">

                    <div className="relative w-full h-[320px] sm:h-[380px]">
                        <video
                            className="absolute inset-0 w-80 h-full object-cover z-0 "
                            src={videoSrc}
                            type="video/webm"
                            autoPlay
                            loop
                            playsInline
                            muted
                            controls
                        />
                        <img
                            src={artist2}
                            alt="Artist"
                            className="relative z-10 w-80 sm:w-44 sm:h-44 object-cover mx-auto"
                        />
                    </div>
                </section>

                <section className="w-full flex flex-row items-center justify-center gap-32">
                    <Link to="/quiz3" className="flex items-center">
                        <img
                            src={quizx}
                            alt="Dislike"
                            className="w-30 sm:w-28 h-auto"
                        />
                    </Link>

                    <Link to="/quiz3" className="flex items-center">
                        <img
                            src={quizy}
                            alt="Like"
                            className="w-30 sm:w-28 h-auto"
                        />
                    </Link>
                </section>
            </main>

        </div>
    </div>
)
}

export default Quiz
