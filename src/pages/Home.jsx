import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import quizImage from '../assets/toeic-quiz.svg';
function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-container">
      <div className="home-inner" role="banner" aria-label="TOEIC Grammar Quiz cover">
      

        {/* 제목 & 멘트 */}
        <h1 className="home-title">
          TOEIC Grammar Quiz
        </h1>
        <p className="home-description">
          5문제로 <strong>영어 문법 실력</strong>을 가볍게 체크해보세요!  
          초보부터 고수까지 누구나 도전 가능합니다.
        </p>

        {/* 대표 이미지 */}
        <div className="home-image-wrap">
          <img src={quizImage} alt="토익 퀴즈 일러스트" className="home-image" />
        </div>

        {/* 버튼 */}
        <button
          className="start-button"
          onClick={() => navigate('/quiz')}
          aria-label="퀴즈 시작하기"
        >
          퀴즈 시작하기 →
        </button>

        {/* 부가 멘트 */}
        <p className="home-hint" aria-hidden="true">
          평균 소요시간: 2~3분 ⏱️  
          오늘의 점수를 기록해보세요!
        </p>
      </div>

      {/* 배경 장식 */}
      <div className="bg-shape bg-1" aria-hidden="true" />
      <div className="bg-shape bg-2" aria-hidden="true" />
    </main>
  );
}

export default Home;
