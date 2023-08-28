import React, { useState } from 'react';

function Slides({ slides }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentSlideIndex(index);
    };

    const goToNextSlide = () => {
        if (currentSlideIndex < slides.length - 1) {
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const goToPrevSlide = () => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(currentSlideIndex - 1);
        }
    };

    const restartSlides = () => {
        setCurrentSlideIndex(0);
    };

    const { title, text } = slides[currentSlideIndex];

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    className="small outlined"
                    onClick={restartSlides}
                    disabled={currentSlideIndex === 0}
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    className="small"
                    onClick={goToPrevSlide}
                    disabled={currentSlideIndex === 0}
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    className="small"
                    onClick={goToNextSlide}
                    disabled={currentSlideIndex === slides.length - 1}
                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{title}</h1>
                <p data-testid="text">{text}</p>
            </div>
        </div>
    );
}

export default Slides;
