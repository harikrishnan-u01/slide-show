import React, {useState, useEffect} from 'react';

function Slides({slides}) {

    const initialSlide = {
        ...slides[0],
        index: 0
    };

    const [currentSlide, setCurrentSlide] = useState(initialSlide);
    const [restartDisabled, setRestartDisabled] = useState(true);
    const [previousDisabled, setPreviousDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);

    useEffect(() => {
        console.log("slides---> ", slides);
        console.log("currentSlide---> ", currentSlide);
        console.log("restartDisabled---> ", restartDisabled);
        console.log("previousDisabled---> ", previousDisabled);
        console.log("nextDisabled---> ", nextDisabled);
    }, [slides,currentSlide,restartDisabled,previousDisabled,nextDisabled]);

    // const setButtonStatus = (restart, previous, next) => {
    //     setRestartDisabled(restart);
    //     setPreviousDisabled(previous);
    //     setNextDisabled(next);
    // }

    const setButtonStatus = (index) => {
        if(index === 0){
            setRestartDisabled(true);
            setPreviousDisabled(true);
        }else{
            setRestartDisabled(false);
            setPreviousDisabled(false);
        }
        if(index === slides.length - 1){
            setNextDisabled(true);
        }else{
            setNextDisabled(false);
        }
    }

    const restart = () => {
        console.log("---restart clicked---");
        setCurrentSlide(initialSlide);
        setButtonStatus(0);
    }

    const prev = () => {
        console.log("---prev clicked---");
        const newIndex = currentSlide.index - 1;
        setCurrentSlide({
                ...slides[newIndex],
                index: newIndex
            });
        setButtonStatus(newIndex);
    }

    const next = () => {
        console.log("---next clicked---");    
        const newIndex = currentSlide.index + 1;
        setCurrentSlide({
            ...slides[newIndex],
            index: newIndex
        });
        setButtonStatus(newIndex);
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined"  disabled={restartDisabled} onClick={() => restart()}>Restart</button>
                <button data-testid="button-prev" className="small" disabled={previousDisabled} onClick={() => prev()}>Prev</button>
                <button data-testid="button-next" className="small" disabled={nextDisabled} onClick={() => next()}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
