import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import ConfettiComponent from './../intro/confetti';
import { checkForUpdates, VersionDetails } from './checkforupdates';
import settings from '../../../src/content/_settings.json';

const DevelopmentNotice: React.FC = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [hasShownConfetti, setHasShownConfetti] = useState<boolean>(false);
    const [versionDetails, setVersionDetails] = useState<VersionDetails | null>(null);
    const [autoupdatecheck, setAutoupdatecheck] = useState<boolean | null>(null);
    const [WelMsg, setWelMsg] = useState<string | null>(null);
    const [hideContent, setHideContent] = useState<boolean>(false);
    const [showNewPlayer, setShowNewPlayer] = useState<boolean>(false);
    const [timerRemaining, setTimerRemaining] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            // Fetch autoupdatecheck from the JSON file
            const jsonAutoupdatecheck = settings?.autoupdatecheck || false;
            setAutoupdatecheck(jsonAutoupdatecheck);

            if (jsonAutoupdatecheck) {
                // Fetch version details only if autoupdatecheck is true
                const details = await checkForUpdates();
                setVersionDetails(details);
            }

            const hasSeenNotice = localStorage.getItem('developmentNotice');
            if (!hasSeenNotice) {
                setShowPopup(true);
            }
        };

        fetchData();
    }, []);

    const handleHidePopup = () => {
        localStorage.setItem('developmentNotice', 'true');
        setIsVerified(true);
        setWelMsg("Make sure to Follow me on Github for more! ❤️");
        setHideContent(true); // Hide existing content
        setShowNewPlayer(true); // Show new Player
        const timeoutDuration = 5000;
        setTimerRemaining(timeoutDuration / 1000);
        const intervalId = setInterval(() => {
            setTimerRemaining((prev) => (prev !== null ? prev - 1 : null));
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId);
            setShowPopup(false);
            setHasShownConfetti(true);
            setWelMsg(null);
            setTimerRemaining(null);
        }, timeoutDuration);
    };

    const handleVerify = (token: string) => {
        if (token) {
            setIsVerified(true);
        }
    };

    if (!showPopup) {
        return (
            <>
                {hasShownConfetti && isVerified && <ConfettiComponent />}
            </>
        );
    }

    return (
        <div></div>
    );
};

export default DevelopmentNotice;
