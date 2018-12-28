import React from 'react';

export default function Minigame() {
  return (
    <div id="gameSection">
      <div class="embed-container">
        <iframe
          src="https://meteor-destroyer.herokuapp.com/"
          title="Meteor Destroyer"
          width="800px"
          height="800px"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
}
