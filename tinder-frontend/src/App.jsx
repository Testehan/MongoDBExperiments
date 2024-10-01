import './App.css'
import {User, MessageCircle, X, Heart} from "lucide-react"


const ProfileSelector = () => (

  <div className="rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="relative">
      <img src="https://models.bestmodelsagency.com/recursos/clientes/F31110A5-6133-4F2E-96A8-927FA9485371/list.jpg?v1589811317?202203111855" />
      <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black" >
        <h2 className='text-3xl font-bold'>Laura, 23</h2>
      </div>
    </div>

    <div className="p-4">
      <p className="text-gray-600 mb-4">
        Always up for trying new things. Love to travel, explore, and discover new places. Let's see where life takes us!
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
);

const MatchesList = () => (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Your Matches:</h2>
      <ul>
        {[
          {id:1, name:"Laura",  imageUrl: "https://models.bestmodelsagency.com/recursos/clientes/F31110A5-6133-4F2E-96A8-927FA9485371/list.jpg?v1589811317?202203111855"},
          {id:2, name:"Diana",  imageUrl: "https://models.bestmodelsagency.com/recursos/clientes/F31110A5-6133-4F2E-96A8-927FA9485371/list.jpg?v1589811317?202203111855"}
        ].map(match => (
            <li key={match.id} className="mb-2">
              <button
                  className="w-full hover:bg-gray-100 rounded flex item-center"
                  onClick={() => console.log("Starting  a chat with " )}
              >
                <img src={match.imageUrl} className="w-16 h-16 rounded-full mr-3 object-cover" />
                <span>
                  <h3 className='font-bold'>{match.name}</h3>
                </span>
              </button>
            </li>
        ))
        }
      </ul>
    </div>
);

function App() {
  return <>
    <div className="max-w-md mx-auto">
      <nav className="flex justify-between">
        <User></User>
        <MessageCircle></MessageCircle>
      </nav>

      {/*<ProfileSelector></ProfileSelector>*/}
      <MatchesList></MatchesList>
    </div>
  </>
}

export default App
