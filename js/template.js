export const swipPageTmpl = (
  swipe
) => `   <div id="profile-popup" class="profile-popup hide">
<button id="hide-popup" class="info-button">
  <img src="/assets/image.png" alt="" />
</button>
<h2>${swipe.name} ${swipe.age}</h2>
<p>by</p>
<p>arbejde</p>
<p>seksualitet</p>
<div class="tags">
  <ul>
    <li>${swipe.Interesser}</li>
    <li>${swipe.Interesser2}</li>
    <li>${swipe.Interesser3}</li>
    <li>${swipe.Interesser4}</li>
  </ul>
</div>
</div>
<img class="profilepic" id=${swipe.id} src="${swipe.image}" />
<div class="info-div">
      <div id="profile-p" class="profile-p">
        <button id="popup" class="info-button">
          <img src="/assets/image.png" alt="" />
        </button>
        <h2>${swipe.name} ${swipe.age}</h2>
        <p>by</p>
        <p>arbejde</p>
        <p>seksualitet</p>
        <div class="tags">
          <ul>
            <li>${swipe.Interesser}</li>
            <li>${swipe.Interesser2}</li>
            <li>${swipe.Interesser3}</li>
            <li>${swipe.Interesser4}</li>
          </ul>
        </div>
      </div>
    </div>
<div class="arrows">
  <button data-direction="previous" class="arrow-left">
    <img src="/assets/Arrow-Transparent180.png" alt="" /></button
  ><button class="arrow-right">
    <img data-direction="next" src="/assets/Arrow-Transparent.png" alt="" />
  </button>
</div>
<h2 class="name">${swipe.name}</h2>
<h2 class="age">${swipe.age}</h2>
<h2 class="info">${swipe.info}</h2>
<div class="buttons">
<button class="no-like"><img src="/assets/657059.png" alt="" /></button>
<button id="info-button" class="info-button">
  <img src="/assets/rijRBjriR.png" alt="" />
</button>
<button class="like-button">
  <img src="/assets/social_follow_27_384.png" alt="" />
</button></div>
`;

export const matchestmpl = (match) => `<div class="slide">
<img
  src="${match.image}"
  alt=""
/>`;

export const chatstmpl = (chat) => `<div class="chats">
<img
  src="/assets/portrait-caucasian-man-with-arms-crossed_53876-13490.png"
  alt=""
/>
<h2>Lorem ipsum dolor sit amet, consectetur adi</h2>
</div>`;
