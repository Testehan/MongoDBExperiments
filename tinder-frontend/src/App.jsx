import './App.css'
import {User, MessageCircle, X, Heart} from "lucide-react"

import React, { useState, useEffect } from 'react';

const fetchRandomProfile = async () => {
    console.log("fetching a random profile");
    const response = await fetch('http://localhost:8080/profiles/random');
    if (!response.ok) {
        throw new Error('Failed to fetch profile');
    }
    return response.json();
}

const saveSwipe = async (profileId) => {
    const response = await fetch('http://localhost:8080/matches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ profileId })
    });
    if (!response.ok) {
        throw new Error('Failed to save swipe');
    }
}

const fetchMatches = async () => {
    const response = await fetch('http://localhost:8080/matches');
    if (!response.ok) {
        throw new Error('Failed to fetch matches');
    }
    return response.json();
}


const ProfileSelector = ( {profile, onSwipe} ) => (
  profile ? (       // if profile exists display it
  <div className="rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="relative">
      <img src={profile.imageUrl} />
      <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black" >
        <h2 className='text-3xl font-bold'>{profile.firstName}, {profile.age}</h2>
      </div>
    </div>

    <div className="p-4">
      <p className="text-gray-600 mb-4">
          {profile.bio}
      </p>
    </div>

    <div className="p-2 flex justify-center space-x-16">
      <button className='bg-red-500 rounded-full p-4 text-white hover:bg-red-700'
              onClick={() => onSwipe(profile.id, "left")}>
        <X size={24} />
      </button>
      <button className='bg-green-500 rounded-full p-4 text-white hover:bg-green-700'
              onClick={() => onSwipe(profile.id, "right")}>
        <Heart size={24} />
      </button>
    </div>

  </div>
  ) : (<div>Loading...</div>)   // if profile does not exist display this div
);

const MatchesList = ({ matches, onSelectMatch }) => (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Your Matches:</h2>
      <ul>
        {matches.map(match => (
            <li key={match.profile.id} className="mb-2">
              <button
                  className="w-full hover:bg-gray-100 rounded flex item-center"
                  onClick={onSelectMatch}   // this will execute this function recieved as parameter
              >
                  <img src={match.profile.imageUrl} className="w-16 h-16 rounded-full mr-3 object-cover" />
                  <span>
                    <h3 className='font-bold'>{match.profile.firstName}</h3>
                  </span>
              </button>
            </li>
        ))
        }
      </ul>
    </div>
);

const ChatScreen = () => {
    // this state holds the message that the user types in the input field
    const [input, setInput] = useState('');

    const handleSend = async (input) => {
        if (input.trim()) {
            // await sendMessage(conversation.id, input);
            console.log(input);
            setInput('');
        }
        // refreshState();
    }

return (
    <div className='rounded-lg shadow-lg p-4'>
        <h2 className="text-2xl font-bold mb-4">Chat with Foo Bar </h2>
        <div className="h-[50vh] border rounded-lg overflow-y-auto mb-6 p-4 bg-gray-50">
        {
            [
                "Hi",
                "How are you ?",
                "How are you ?",
                "How are you ?",
                "How are you ?",
                "How are you ?",
                "How are you ?",
                "How are you ?"
            ].map((message, index) => (
                <div key={index}>
                    <div className='mb-4 p-2 rounded bg-gray-100'>{message}</div>
                </div>
            ))
        }
        </div>

        <div className="flex items-center">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border-2 border-gray-300 rounded-full py-2 px-4 mr-2 focus:outline-none focus:border-blue-500"
                placeholder="Type a message..."
            />
            <button
                className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-200"
                onClick={()=> handleSend(input)}
            >
                {/*<Send size={24} />*/}
            </button>
        </div>

    </div>
)};



function App() {

    // when defining state, we also need to define the method that sets that state, in this case setCurrentScreen;
    // Default state is 'profile'
    const [currentScreen, setCurrentScreen] = useState('profile');
    // a state for the current profile being shown in the UI
    const [currentProfile, setCurrentProfile] = useState(null);
    const [matches, setMatches] = useState([]);     // initially this is an empty array

    useEffect(() => {
        loadRandomProfile();
        loadMatches();
    }, {});

    const loadRandomProfile = async () => {
        try {
            const profile = await fetchRandomProfile();
            setCurrentProfile(profile);
        } catch (error) {
            console.error(error);
        }
    }

    const loadMatches = async () => {
        try {
            const matches = await fetchMatches();
            setMatches(matches);
        } catch (error) {
            console.error(error);
        }
    }

    const onSwipe = async (profileId, swipeDirection) => {
        if (swipeDirection === 'right'){
            await saveSwipe(profileId);
            await loadMatches();
        }

        loadRandomProfile();        // no matter what type the swipe is, we need to load a new profile
    }

    const renderScreen = () => {
        switch (currentScreen) {
            case 'profile':
                return <ProfileSelector profile={currentProfile} onSwipe={onSwipe} />;
            case 'matches':                 // here we are passing the setCurrentScreen function with "chat" argument to the MatchesList
                return <MatchesList matches={matches} onSelectMatch={()=>setCurrentScreen('chat')}/>;
            case 'chat':
                return <ChatScreen/>;
        }
    }

    return <>
        <div className="max-w-md mx-auto">
            <nav className="flex justify-between">
                <User onClick={() => setCurrentScreen("profile")} />
                <MessageCircle onClick={() => setCurrentScreen("matches")} />
            </nav>
            {renderScreen()}
        </div>
    </>
}

export default App
