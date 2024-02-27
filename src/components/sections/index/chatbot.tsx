
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCommentAlt, faPaperPlane, faTimes} from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import Image from 'next/image';

const server_port = 'http://localhost:8000/api/chat/'; // change this to your server port

interface ChatMessage {
    text: string;
    sender: 'user' | 'bot';
    senderName: string;
    senderImage: string;
}

const Chatbot: React.FC = () => {
    const [isChatVisible, setIsChatVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        const welcomeMessage: ChatMessage = {
            text: 'Hi there! I am your Chat Assistant.',
            sender: 'bot',
            senderName: 'Chat Assistant',
            senderImage: '/img/logo.jpg',
        };
        setChatMessages([welcomeMessage]);

        const storedUserId = Cookies.get('userId'); // get the user ID from cookies
        if (storedUserId) {
            setUserId(storedUserId);
            const storedMessages = Cookies.get(`chatMessages_${storedUserId}`);
            if (storedMessages) {
                setChatMessages(JSON.parse(storedMessages));
            }
        } else {
            const newUserId = generateUserId();
            setUserId(newUserId);
            Cookies.set('userId', newUserId);
            Cookies.remove('chatMessages');
        }
    }, []);

    useEffect(() => {
        Cookies.set(`chatMessages_${userId}`, JSON.stringify(chatMessages));
    }, [chatMessages, userId]);

    const toggleChat = () => {
        setIsChatVisible(!isChatVisible);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            const newMessage: ChatMessage = {
                text: message,
                sender: 'user',
                senderName: 'User',
                senderImage: '/img/user.jpg',
            };
            setChatMessages([...chatMessages, newMessage]);
            setMessage('');

            sendMessageToServer(message, userId)
                .then((response) => {
                    const botResponse: ChatMessage = {
                        text: response,
                        sender: 'bot',
                        senderName: 'Chat Assistant',
                        senderImage: '/img/logo.jpg',
                    };
                    setChatMessages((prevMessages) => [...prevMessages, botResponse]);
                })
                .catch(() => {
                    const errorMessage: ChatMessage = {
                        text: `Hey ${userId}\n An error occurred. Please try again later.`,
                        sender: 'bot',
                        senderName: 'Chat Assistant',
                        senderImage: '/img/logo.jpg',
                    };
                    setChatMessages((prevMessages) => [...prevMessages, errorMessage]);
                });
        }
    };

  /*  const handleChatClose = () => {
        setIsChatVisible(false);
    };
*/
    const sendMessageToServer = (message: string, userId: string) => {
        return fetch(server_port, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, userId }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Server error');
                }
                return response.json();
            })
            .then((data) => {
                return data.response;
            });
    };

    const generateUserId = () => {
        // Generate a unique user ID (you can modify this logic as per your requirement)
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);
        return `user_${timestamp}_${random}`;
    };

    return (
        <div></div>
    );
};

export default Chatbot;
