import React, { useState, useEffect } from 'react';

const SetDate = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-05-01') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showImageDescription, setShowImageDescription] = useState(false);

  useEffect(() => {
    const toggleInterval = setInterval(() => {
      setShowImageDescription(prevState => !prevState);
    }, 12000); // Toggle between image and paragraph every 3 seconds

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    return () => {
      clearInterval(toggleInterval);
      clearInterval(timer);
    };
  }, []);

  const timerComponents = Object.keys(timeLeft).map(interval => (
    <div key={interval} className="p-4 m-2 bg-gray-100 rounded-lg shadow-md text-center">
      <span className="text-5xl font-bold text-gray-800">{timeLeft[interval]}</span>
      <span className="text-xl text-gray-600">{interval}</span>
    </div>
  ));

  const renderContent = () => {
    return (
      <div
        className={`flex justify-center items-center w-96 h-80 rounded-lg overflow-hidden`}
      >
        {showImageDescription ? (
          <img
            src="pitrupaksha.jpg"
            alt="Pitrupaksha"
            className="object-cover ai"
            style={{
              borderRadius: '10px',
            }}
          />
        ) : (
          <p className={`text-l text-orange-800 font-semibold text-center ap`}>
            నర్మదా నది పుష్కరములు చాలా మహిమాన్వితమైనవి 12 సంవత్సరములకు ఒకసారి వచ్చే ఈ పుష్కరములలో మీ పితృదేవతలకు  యధాశక్తిగా కార్యక్రమము చేసుకున్నట్లయితే మీ పితృదేవతల అనుగ్రహం కలిగి మీ వంశము గోత్రము వృద్ధి చెందుతుంది కనుక ప్రతి ఒక్కరు మీ శక్తి మేరకు నర్మదా నది దర్శనము, పితృదేవతల పిండ ప్రధానములు చేసి కొని పితృదేవతా రుణము తీర్చుకొనగలరు మరిన్ని వివరములకు సృష్టి ఫణి శర్మ సెల్ నెంబర్ 9603280769
          </p>
        )}
      </div>
    );
  };



  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center text-gray-800 my-3">Narmada Pushkaralu</h2>
      <div className="flex justify-center">
        {renderContent()}
      </div>
      <div className="flex flex-wrap justify-center">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <div className="flex items-center">
        <span className="mr-2">Click Here To Join Whatsapp Group!</span>
        <a href="https://chat.whatsapp.com/GdS0YlosHwMGXhIThE7AyA" target="_blank" rel="noopener noreferrer" className="icon-link">
          <img src="wa.ico" alt="WhatsApp Icon" height={40} width={40} className="icon" />
        </a>

      </div>
    </div>
  );
};

export default SetDate;
