import React from 'react';

export default function Minigame() {
  return (
    <div id="gameSection">
      <div class="embed-container">
        <iframe
          src="http://meteor-destroyer.herokuapp.com/"
          width="800px"
          height="800px"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
}
