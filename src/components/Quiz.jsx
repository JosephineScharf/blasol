
import quizheader from '../assets/quiz/quiz-header.png';
import quizx from '../assets/quiz/quizx.png';
import quizy from '../assets/quiz/quizy.png';
import Footer from './Footer';
import artist from '../assets/quiz/artistpic.png';
import videoSrc from '../assets/quiz/test5.webm';

const videoQuiz = () => {
    return (
        <video className="video-quiz" 
        controls 
        autoPlay 
        loop 
        >
            <source src={videoSrc} type="video/webm" />
        </video>
    );
};

// background , puntitos , swipe directions

function Quiz() {
return (
    <>
        <div>
            <header className="header-quiz">
                <img src={quizheader} className="header-quiz-image" />
            </header>

<div className='title'>
    <h1>Do you like this artist?</h1>
    <p>Swipe right to like, swipe left to dislike.</p>

    <h1 className='artist-name'>SaveUs</h1>
</div>
            <div className="artist-image">
                <img src={artist} className="artist-image" />
            </div>

            <div className="video-quiz">
                {videoQuiz()}
            </div>

            <div className='yes-no'>
                <img src={quizx} className="quiz-image" />
                <img src={quizy} className="quiz-image" />
            </div>

            <Footer />
        </div>
    </>
)
}

export default Quiz
