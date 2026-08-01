import "./Favorites.css";

function Favorites() {
  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>Favorites</h1>
        <p>
          Access your favorite documents and saved AI conversations from one
          place.
        </p>
      </div>

      <div className="favorites-empty">
        <h2>No Favorites Yet</h2>
        <p>
          Documents and chats that you mark as favorites will appear here.
        </p>
      </div>
    </div>
  );
}

export default Favorites;